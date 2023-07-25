import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeProps } from 'react-markdown/lib/ast-to-react'

interface MarkdownWithSyntaxHighlightingProps {
  body: string
}

export function MarkdownWithSyntaxHighlighting({
  body,
}: MarkdownWithSyntaxHighlightingProps) {
  return (
    <ReactMarkdown
      components={{
        code: markdownParserCodeHighlighter,
      }}
      skipHtml={true}
    >
      {body}
    </ReactMarkdown>
  )
}

function markdownParserCodeHighlighter({
  inline,
  className,
  children,
}: CodeProps) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter style={dracula} language={match[1]}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{children}</code>
  )
}
