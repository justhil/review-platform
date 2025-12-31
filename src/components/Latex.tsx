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

// 简单的 Markdown 文本处理（粗体、换行）
function renderMarkdownText(text: string): (string | JSX.Element)[] {
  const result: (string | JSX.Element)[] = []
  // 先按换行分割
  const lines = text.split('\n')

  lines.forEach((line, lineIdx) => {
    // 处理粗体 **text**
    const boldRegex = /\*\*([^*]+)\*\*/g
    let lastIndex = 0
    let match
    const lineElements: (string | JSX.Element)[] = []

    while ((match = boldRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        lineElements.push(line.slice(lastIndex, match.index))
      }
      lineElements.push(<strong key={`b-${lineIdx}-${match.index}`}>{match[1]}</strong>)
      lastIndex = boldRegex.lastIndex
    }

    if (lastIndex < line.length) {
      lineElements.push(line.slice(lastIndex))
    }

    if (lineElements.length === 0) {
      lineElements.push(line)
    }

    result.push(...lineElements)

    // 添加换行（除了最后一行）
    if (lineIdx < lines.length - 1) {
      result.push(<br key={`br-${lineIdx}`} />)
    }
  })

  return result
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
        part.type === 'latex' ? (
          <Latex key={i}>{part.content}</Latex>
        ) : (
          <span key={i}>{renderMarkdownText(part.content)}</span>
        )
      )}
    </>
  )
}
