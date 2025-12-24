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

const COLORS = ['#000000', '#e74c3c', '#3498db', '#27ae60', '#f39c12', '#9b59b6']
const BRUSH_SIZES = [2, 4, 6, 8, 12]
const ERASER_SIZES = [10, 20, 30, 40]
const MIN_DISTANCE = 1.5
const PRESSURE_SMOOTHING = 0.3

export function OverlayCanvas({ initialData, onSave, disabled, drawingEnabled, onToggleDrawing }: OverlayCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [color, setColor] = useState('#e74c3c')
  const [brushSize, setBrushSize] = useState(4)
  const [eraserSize, setEraserSize] = useState(20)
  const [isEraser, setIsEraser] = useState(false)
  const [showToolbar, setShowToolbar] = useState(false)

  const pendingPointsRef = useRef<Point[]>([])
  const lastPointRef = useRef<Point | null>(null)
  const smoothedPressureRef = useRef(0.5)
  const isDrawingRef = useRef(false)
  const saveTimeoutRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const initializedRef = useRef(false)
  const canvasStateRef = useRef({ width: 0, height: 0, dpr: 1 })

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
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

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctxRef.current = ctx
      if (hasContent && tempCanvas.width > 0) {
        const oldCssWidth = state.width || width
        const oldCssHeight = state.height || height
        ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, oldCssWidth, oldCssHeight)
      }
    }

    canvasStateRef.current = { width, height, dpr }
  }, [])

  const getCanvasCoords = useCallback((e: PointerEvent | React.PointerEvent): Point => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0, pressure: 0.5 }
    const rect = canvas.getBoundingClientRect()
    const rawPressure = e.pressure > 0 ? e.pressure : 0.5
    smoothedPressureRef.current = smoothedPressureRef.current * (1 - PRESSURE_SMOOTHING) + rawPressure * PRESSURE_SMOOTHING
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

  const drawSegment = useCallback((p0: Point, p1: Point, p2?: Point) => {
    const ctx = ctxRef.current
    if (!ctx) return

    ctx.strokeStyle = isEraser ? 'rgba(0,0,0,1)' : color
    ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const lineWidth = isEraser ? eraserSize : brushSize * (p0.pressure + p1.pressure)
    ctx.lineWidth = Math.max(1, lineWidth)

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
  }, [color, brushSize, eraserSize, isEraser])

  const flushPendingPoints = useCallback(() => {
    const points = pendingPointsRef.current
    if (points.length < 2) return

    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1]
      const p1 = points[i]
      const p2 = points[i + 1]
      drawSegment(p0, p1, p2)
    }

    if (points.length > 2) {
      pendingPointsRef.current = points.slice(-2)
    }
  }, [drawSegment])

  const scheduleSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = window.setTimeout(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.toBlob(blob => {
        if (blob) {
          const reader = new FileReader()
          reader.onloadend = () => {
            if (typeof reader.result === 'string') {
              onSave(reader.result)
            }
          }
          reader.readAsDataURL(blob)
        }
      }, 'image/png')
    }, 800)
  }, [onSave])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (disabled || !drawingEnabled) return
    e.preventDefault()
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)

    smoothedPressureRef.current = 0.5
    const point = getCanvasCoords(e.nativeEvent)
    pendingPointsRef.current = [point]
    lastPointRef.current = point
    isDrawingRef.current = true
  }, [disabled, drawingEnabled, getCanvasCoords])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
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
  }, [disabled, drawingEnabled, getCanvasCoords, shouldAddPoint, flushPendingPoints])

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDrawingRef.current) return
    e.currentTarget.releasePointerCapture(e.pointerId)

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    flushPendingPoints()

    const points = pendingPointsRef.current
    if (points.length === 1) {
      const ctx = ctxRef.current
      if (ctx) {
        const p = points[0]
        const size = isEraser ? eraserSize : brushSize * p.pressure * 2
        ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over'
        ctx.fillStyle = isEraser ? 'rgba(0,0,0,1)' : color
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(1, size / 2), 0, Math.PI * 2)
        ctx.fill()
        ctx.globalCompositeOperation = 'source-over'
      }
    }

    pendingPointsRef.current = []
    lastPointRef.current = null
    isDrawingRef.current = false
    scheduleSave()
  }, [flushPendingPoints, scheduleSave, isEraser, eraserSize, brushSize, color])

  const clearCanvas = useCallback(() => {
    const ctx = ctxRef.current
    const canvas = canvasRef.current
    if (!ctx || !canvas) return
    const { width, height } = canvasStateRef.current
    ctx.clearRect(0, 0, width, height)
    scheduleSave()
  }, [scheduleSave])

  useEffect(() => {
    // 延迟初始化，确保容器尺寸已计算
    const timer = setTimeout(() => resizeCanvas(), 50)
    const handleResize = () => resizeCanvas()
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [resizeCanvas])

  useEffect(() => {
    if (drawingEnabled) {
      setTimeout(() => resizeCanvas(), 10)
    }
  }, [drawingEnabled, resizeCanvas])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || initializedRef.current) return

    resizeCanvas()
    const ctx = ctxRef.current
    if (!ctx) return

    if (initialData) {
      const img = new Image()
      img.onload = () => {
        const { width, height } = canvasStateRef.current
        ctx.drawImage(img, 0, 0, width, height)
        initializedRef.current = true
      }
      img.src = initialData
    } else {
      initializedRef.current = true
    }
  }, [initialData, resizeCanvas])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    }
  }, [])

  return (
    <div className={`overlay-canvas-container ${drawingEnabled ? 'drawing-mode' : ''}`} ref={containerRef}>
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

      <div className="overlay-toolbar">
        <button className={`overlay-tool-btn ${drawingEnabled ? 'active' : ''}`} onClick={onToggleDrawing} title={drawingEnabled ? '退出手写' : '开始手写'}>
          {drawingEnabled ? '✓' : '✏️'}
        </button>

        {drawingEnabled && (
          <>
            <button className="overlay-tool-btn" onClick={() => setShowToolbar(!showToolbar)} title="工具设置">⚙️</button>

            {showToolbar && (
              <div className="overlay-tool-menu">
                <div className="menu-section">
                  <span>画笔</span>
                  <div className="color-options">
                    {COLORS.map(c => (
                      <button key={c} className={`color-btn ${color === c && !isEraser ? 'active' : ''}`} style={{ background: c }} onClick={() => { setColor(c); setIsEraser(false) }} />
                    ))}
                  </div>
                  <div className="size-options">
                    {BRUSH_SIZES.map(size => (
                      <button key={size} className={`size-btn ${brushSize === size && !isEraser ? 'active' : ''}`} onClick={() => { setBrushSize(size); setIsEraser(false) }}>
                        <span style={{ width: size * 2, height: size * 2, background: color, borderRadius: '50%', display: 'block' }} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="menu-section">
                  <span>橡皮擦</span>
                  <div className="size-options">
                    {ERASER_SIZES.map(size => (
                      <button key={size} className={`size-btn ${eraserSize === size && isEraser ? 'active' : ''}`} onClick={() => { setEraserSize(size); setIsEraser(true) }}>
                        <span style={{ width: size / 2, height: size / 2, background: '#ccc', borderRadius: '50%', display: 'block' }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <button className={`overlay-tool-btn ${isEraser ? 'active' : ''}`} onClick={() => setIsEraser(!isEraser)} title="橡皮擦">🧹</button>
            <button className="overlay-tool-btn" onClick={clearCanvas} disabled={disabled} title="清空手写">🗑️</button>
          </>
        )}
      </div>
    </div>
  )
}
