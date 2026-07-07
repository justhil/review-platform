import { useRef, useEffect, useState, useCallback } from 'react'

interface OverlayCanvasProps {
  initialData?: string
  onSave: (dataUrl: string) => void
  disabled?: boolean
  drawingEnabled: boolean
  onToggleDrawing: () => void
}

interface Point {
  x: number
  y: number
  pressure: number
}

const COLORS = ['#1a1a1a', '#e74c3c', '#3498db', '#27ae60', '#f39c12', '#9b59b6']
const BRUSH_SIZES = [2, 4, 6, 8, 12]
const ERASER_SIZES = [12, 20, 32, 44]
const MIN_DISTANCE = 1.2
const PRESSURE_SMOOTHING = 0.35
const MAX_HISTORY = 24
const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

function IconPen({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M13.5 6.5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {active && <circle cx="18" cy="6" r="2.5" fill="currentColor" className="ink-fab-dot" />}
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function OverlayCanvas({ initialData, onSave, disabled, drawingEnabled, onToggleDrawing }: OverlayCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [color, setColor] = useState('#e74c3c')
  const [brushSize, setBrushSize] = useState(isMobile ? 6 : 4)
  const [eraserSize, setEraserSize] = useState(isMobile ? 32 : 20)
  const [isEraser, setIsEraser] = useState(false)
  const [showToolbar, setShowToolbar] = useState(false)
  const [canUndo, setCanUndo] = useState(false)
  const [canRedo, setCanRedo] = useState(false)
  const [dockExpanded, setDockExpanded] = useState(false)

  const pendingPointsRef = useRef<Point[]>([])
  const lastPointRef = useRef<Point | null>(null)
  const smoothedPressureRef = useRef(0.5)
  const isDrawingRef = useRef(false)
  const strokeStartedRef = useRef(false)
  const saveTimeoutRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const initializedRef = useRef(false)
  const canvasStateRef = useRef({ width: 0, height: 0, dpr: 1 })
  const activePointersRef = useRef<Set<number>>(new Set())
  const historyRef = useRef<ImageData[]>([])
  const historyIndexRef = useRef(-1)

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const width = Math.round(rect.width)
    const height = Math.round(rect.height)

    const state = canvasStateRef.current
    if (state.width === width && state.height === height && state.dpr === dpr) return

    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    const hasContent = canvas.width > 0 && canvas.height > 0
    if (tempCtx && hasContent) {
      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height
      tempCtx.drawImage(canvas, 0, 0)
    }

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    const ctx = canvas.getContext('2d', { alpha: true })
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctxRef.current = ctx
      if (hasContent && tempCanvas.width > 0) {
        const oldCssWidth = state.width || width
        const oldCssHeight = state.height || height
        ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, oldCssWidth, oldCssHeight)
      }
    }

    canvasStateRef.current = { width, height, dpr }
  }, [])

  const updateHistoryState = useCallback(() => {
    setCanUndo(historyIndexRef.current > 0)
    setCanRedo(historyIndexRef.current < historyRef.current.length - 1)
  }, [])

  const saveSnapshot = useCallback(() => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas || canvas.width === 0) return
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1)
    historyRef.current.push(imageData)
    if (historyRef.current.length > MAX_HISTORY) {
      historyRef.current.shift()
    } else {
      historyIndexRef.current++
    }
    updateHistoryState()
  }, [updateHistoryState])

  const undo = useCallback(() => {
    if (historyIndexRef.current <= 0) return
    historyIndexRef.current--
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    ctx.putImageData(historyRef.current[historyIndexRef.current], 0, 0)
    updateHistoryState()
    scheduleSaveRef.current?.()
  }, [updateHistoryState])

  const redo = useCallback(() => {
    if (historyIndexRef.current >= historyRef.current.length - 1) return
    historyIndexRef.current++
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    ctx.putImageData(historyRef.current[historyIndexRef.current], 0, 0)
    updateHistoryState()
    scheduleSaveRef.current?.()
  }, [updateHistoryState])

  const getCanvasCoords = useCallback((e: PointerEvent | React.PointerEvent): Point => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0, pressure: 0.5 }
    const rect = canvas.getBoundingClientRect()
    const rawPressure = e.pressure > 0 ? e.pressure : 0.5
    smoothedPressureRef.current =
      smoothedPressureRef.current * (1 - PRESSURE_SMOOTHING) + rawPressure * PRESSURE_SMOOTHING
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: smoothedPressureRef.current,
    }
  }, [])

  const shouldAddPoint = useCallback((newPoint: Point): boolean => {
    const last = lastPointRef.current
    if (!last) return true
    const dx = newPoint.x - last.x
    const dy = newPoint.y - last.y
    return dx * dx + dy * dy >= MIN_DISTANCE * MIN_DISTANCE
  }, [])

  const strokeWidth = useCallback(
    (p0: Point, p1: Point) => {
      if (isEraser) return eraserSize
      const avg = (p0.pressure + p1.pressure) / 2
      return Math.max(1, brushSize * (0.45 + 0.55 * avg))
    },
    [brushSize, eraserSize, isEraser]
  )

  const drawSegment = useCallback(
    (p0: Point, p1: Point, p2?: Point) => {
      const ctx = ctxRef.current
      if (!ctx) return

      ctx.strokeStyle = isEraser ? 'rgba(0,0,0,1)' : color
      ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over'
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = strokeWidth(p0, p1)

      ctx.beginPath()
      if (p2) {
        const midX1 = (p0.x + p1.x) / 2
        const midY1 = (p0.y + p1.y) / 2
        const midX2 = (p1.x + p2.x) / 2
        const midY2 = (p1.y + p2.y) / 2
        ctx.moveTo(midX1, midY1)
        ctx.quadraticCurveTo(p1.x, p1.y, midX2, midY2)
      } else {
        ctx.moveTo(p0.x, p0.y)
        ctx.lineTo(p1.x, p1.y)
      }
      ctx.stroke()
      ctx.globalCompositeOperation = 'source-over'
    },
    [color, isEraser, strokeWidth]
  )

  const flushPendingPoints = useCallback(() => {
    const points = pendingPointsRef.current
    if (points.length < 2) return

    for (let i = 1; i < points.length; i++) {
      drawSegment(points[i - 1], points[i], points[i + 1])
    }

    pendingPointsRef.current = points.length > 2 ? points.slice(-2) : points
  }, [drawSegment])

  const scheduleSaveRef = useRef<() => void>(() => {})

  const scheduleSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = window.setTimeout(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.toBlob(
        blob => {
          if (!blob) return
          const reader = new FileReader()
          reader.onloadend = () => {
            if (typeof reader.result === 'string') onSave(reader.result)
          }
          reader.readAsDataURL(blob)
        },
        'image/png',
        0.92
      )
    }, 500)
  }, [onSave])

  scheduleSaveRef.current = scheduleSave

  const endStroke = useCallback(
    (e?: React.PointerEvent) => {
      if (!isDrawingRef.current) return

      if (e) {
        try {
          e.currentTarget.releasePointerCapture(e.pointerId)
        } catch {
          /* already released */
        }
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }

      if (e && strokeStartedRef.current) {
        const endPoint = getCanvasCoords(e.nativeEvent)
        const last = lastPointRef.current
        if (last && (endPoint.x !== last.x || endPoint.y !== last.y)) {
          pendingPointsRef.current.push(endPoint)
        }
      }

      flushPendingPoints()

      const points = pendingPointsRef.current
      if (points.length === 1) {
        const ctx = ctxRef.current
        if (ctx) {
          const p = points[0]
          const size = isEraser ? eraserSize : brushSize * (0.45 + 0.55 * p.pressure)
          ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over'
          ctx.fillStyle = isEraser ? 'rgba(0,0,0,1)' : color
          ctx.beginPath()
          ctx.arc(p.x, p.y, Math.max(0.5, size / 2), 0, Math.PI * 2)
          ctx.fill()
          ctx.globalCompositeOperation = 'source-over'
        }
      }

      pendingPointsRef.current = []
      lastPointRef.current = null
      isDrawingRef.current = false
      strokeStartedRef.current = false
      scheduleSave()
    },
    [flushPendingPoints, scheduleSave, isEraser, eraserSize, brushSize, color, getCanvasCoords]
  )

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled || !drawingEnabled) return

      activePointersRef.current.add(e.pointerId)
      if (activePointersRef.current.size > 1) {
        isDrawingRef.current = false
        return
      }

      e.preventDefault()
      e.stopPropagation()
      e.currentTarget.setPointerCapture(e.pointerId)

      saveSnapshot()
      smoothedPressureRef.current = e.pressure > 0 ? e.pressure : 0.5
      const point = getCanvasCoords(e.nativeEvent)
      pendingPointsRef.current = [point]
      lastPointRef.current = point
      isDrawingRef.current = true
      strokeStartedRef.current = true
    },
    [disabled, drawingEnabled, getCanvasCoords, saveSnapshot]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDrawingRef.current || disabled || !drawingEnabled) return
      e.preventDefault()
      e.stopPropagation()

      const coalescedEvents = (e.nativeEvent as PointerEvent).getCoalescedEvents?.() || [e.nativeEvent]
      for (const evt of coalescedEvents) {
        const point = getCanvasCoords(evt)
        if (shouldAddPoint(point)) {
          pendingPointsRef.current.push(point)
          lastPointRef.current = point
        }
      }

      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        flushPendingPoints()
      })
    },
    [disabled, drawingEnabled, getCanvasCoords, shouldAddPoint, flushPendingPoints]
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      activePointersRef.current.delete(e.pointerId)
      endStroke(e)
    },
    [endStroke]
  )

  const clearCanvas = useCallback(() => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    saveSnapshot()
    const { width, height } = canvasStateRef.current
    ctx.clearRect(0, 0, width, height)
    scheduleSave()
  }, [scheduleSave, saveSnapshot])

  const toggleDrawing = useCallback(() => {
    setShowToolbar(false)
    setDockExpanded(false)
    onToggleDrawing()
  }, [onToggleDrawing])

  useEffect(() => {
    const timer = setTimeout(() => resizeCanvas(), 50)
    const handleResize = () => resizeCanvas()
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [resizeCanvas])

  useEffect(() => {
    if (drawingEnabled) setTimeout(() => resizeCanvas(), 10)
    else setDockExpanded(false)
  }, [drawingEnabled, resizeCanvas])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || initializedRef.current) return

    resizeCanvas()
    const ctx = ctxRef.current
    if (!ctx) return

    const bootstrapHistory = () => {
      if (historyRef.current.length === 0) saveSnapshot()
      initializedRef.current = true
    }

    if (initialData) {
      const img = new Image()
      img.onload = () => {
        const { width, height } = canvasStateRef.current
        ctx.drawImage(img, 0, 0, width, height)
        bootstrapHistory()
      }
      img.src = initialData
    } else {
      bootstrapHistory()
    }
  }, [initialData, resizeCanvas, saveSnapshot])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (!drawingEnabled) return
    const prevent = (ev: TouchEvent) => {
      if (ev.touches.length === 1) ev.preventDefault()
    }
    document.addEventListener('touchmove', prevent, { passive: false })
    return () => document.removeEventListener('touchmove', prevent)
  }, [drawingEnabled])

  useEffect(() => {
    if (!showToolbar) return
    const onDoc = (ev: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(ev.target as Node)) setShowToolbar(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [showToolbar])

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape' && drawingEnabled) {
        setShowToolbar(false)
        setDockExpanded(false)
        onToggleDrawing()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawingEnabled, onToggleDrawing])

  return (
    <div
      className={`overlay-canvas-container ${drawingEnabled ? 'drawing-mode' : ''} ${isMobile ? 'mobile' : ''} ${dockExpanded ? 'dock-open' : ''}`}
      ref={containerRef}
    >
      <canvas
        ref={canvasRef}
        className="overlay-canvas"
        style={{ touchAction: drawingEnabled ? 'none' : 'auto', pointerEvents: drawingEnabled ? 'auto' : 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      <div className="ink-fab-stack" role="toolbar" aria-label="手写工具">
        <button
          type="button"
          className={`ink-fab ink-fab-main ${drawingEnabled ? 'is-active' : ''}`}
          onClick={toggleDrawing}
          title={drawingEnabled ? '完成手写 (Esc)' : '手写草稿'}
          aria-pressed={drawingEnabled}
        >
          <span className="ink-fab-icon">{drawingEnabled ? <IconCheck /> : <IconPen />}</span>
          {!drawingEnabled && <span className="ink-fab-ring" aria-hidden />}
        </button>

        {drawingEnabled && (
          <div className={`ink-dock ${dockExpanded ? 'is-expanded' : ''}`}>
            <button
              type="button"
              className="ink-dock-toggle"
              onClick={() => setDockExpanded(v => !v)}
              aria-expanded={dockExpanded}
              title={dockExpanded ? '收起工具' : '展开工具'}
            >
              <span className="ink-dock-chevron" />
            </button>

            <div className="ink-dock-tools">
              <button
                type="button"
                className={`ink-tool-btn ${showToolbar ? 'active' : ''}`}
                onClick={() => setShowToolbar(v => !v)}
                title="画笔与颜色"
              >
                <span className="ink-tool-swatch" style={{ background: isEraser ? '#94a3b8' : color }} />
              </button>
              <button
                type="button"
                className={`ink-tool-btn ${isEraser ? 'active' : ''}`}
                onClick={() => setIsEraser(v => !v)}
                title="橡皮擦"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 21l-5-5M3 21l9-9 5 5-9 9H3v-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" className="ink-tool-btn" onClick={undo} disabled={disabled || !canUndo} title="撤销">
                ↶
              </button>
              <button type="button" className="ink-tool-btn" onClick={redo} disabled={disabled || !canRedo} title="重做">
                ↷
              </button>
              <button type="button" className="ink-tool-btn ink-tool-danger" onClick={clearCanvas} disabled={disabled} title="清空">
                ⌫
              </button>
            </div>
          </div>
        )}

        {drawingEnabled && showToolbar && (
          <div className="ink-palette" ref={menuRef}>
            <div className="ink-palette-section">
              <span className="ink-palette-label">颜色</span>
              <div className="ink-palette-colors">
                {COLORS.map(c => (
                  <button
                    key={c}
                    type="button"
                    className={`ink-color-dot ${color === c && !isEraser ? 'active' : ''}`}
                    style={{ background: c }}
                    onClick={() => {
                      setColor(c)
                      setIsEraser(false)
                    }}
                    aria-label={`颜色 ${c}`}
                  />
                ))}
              </div>
            </div>
            <div className="ink-palette-section">
              <span className="ink-palette-label">粗细</span>
              <div className="ink-palette-sizes">
                {BRUSH_SIZES.map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`ink-size-dot ${brushSize === size && !isEraser ? 'active' : ''}`}
                    onClick={() => {
                      setBrushSize(size)
                      setIsEraser(false)
                    }}
                  >
                    <span style={{ width: size + 4, height: size + 4, background: color }} />
                  </button>
                ))}
              </div>
            </div>
            <div className="ink-palette-section">
              <span className="ink-palette-label">橡皮</span>
              <div className="ink-palette-sizes">
                {ERASER_SIZES.map(size => (
                  <button
                    key={size}
                    type="button"
                    className={`ink-size-dot ${eraserSize === size && isEraser ? 'active' : ''}`}
                    onClick={() => {
                      setEraserSize(size)
                      setIsEraser(true)
                    }}
                  >
                    <span style={{ width: size / 2.5, height: size / 2.5, background: '#cbd5e1' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {drawingEnabled && <div className="ink-mode-hint">手写模式 · 按 Esc 退出</div>}
    </div>
  )
}