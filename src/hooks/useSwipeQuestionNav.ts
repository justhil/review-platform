import { useRef, useCallback } from 'react'

type Options = {
  onPrev: () => void
  onNext: () => void
  enabled?: boolean
  drawingEnabled?: boolean
  minDistance?: number
  maxVerticalRatio?: number
}

export function useSwipeQuestionNav({
  onPrev,
  onNext,
  enabled = true,
  drawingEnabled = false,
  minDistance = 56,
  maxVerticalRatio = 0.55,
}: Options) {
  const startRef = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || drawingEnabled || swipeBlockedTarget(e.target)) return
      if (e.touches.length !== 1) return
      const t = e.touches[0]
      startRef.current = { x: t.clientX, y: t.clientY }
    },
    [enabled, drawingEnabled]
  )

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!enabled || drawingEnabled || !startRef.current) return
      const t = e.changedTouches[0]
      if (!t) {
        startRef.current = null
        return
      }
      const dx = t.clientX - startRef.current.x
      const dy = t.clientY - startRef.current.y
      startRef.current = null

      if (Math.abs(dx) < minDistance) return
      if (Math.abs(dy) / Math.abs(dx) > maxVerticalRatio) return

      if (dx < 0) onNext()
      else onPrev()
    },
    [enabled, drawingEnabled, minDistance, maxVerticalRatio, onNext, onPrev]
  )

  const onTouchCancel = useCallback(() => {
    startRef.current = null
  }, [])

  return { onTouchStart, onTouchEnd, onTouchCancel }
}

function swipeBlockedTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false
  return !!target.closest(
    '.ink-fab-stack, .ink-palette, .question-nav-dock, .modal-overlay, input, textarea, select, button, a'
  )
}