import { useMemo } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

interface LatexProps {
  children: string
  display?: boolean
}

export function Latex({ children, display = false }: LatexProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      })
    } catch {
      return children
    }
  }, [children, display])

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export function MixedLatex({ children }: { children: string }) {
  const parts = useMemo(() => {
    const result: { type: 'text' | 'latex'; content: string }[] = []
    const regex = /\$\$([^$]+)\$\$|\$([^$]+)\$/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(children)) !== null) {
      if (match.index > lastIndex) {
        result.push({ type: 'text', content: children.slice(lastIndex, match.index) })
      }
      result.push({ type: 'latex', content: match[1] || match[2] })
      lastIndex = regex.lastIndex
    }

    if (lastIndex < children.length) {
      result.push({ type: 'text', content: children.slice(lastIndex) })
    }

    return result
  }, [children])

  return (
    <>
      {parts.map((part, i) =>
        part.type === 'latex' ? <Latex key={i}>{part.content}</Latex> : <span key={i}>{part.content}</span>
      )}
    </>
  )
}
