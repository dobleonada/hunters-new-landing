import Markdown from 'react-markdown'

type LegalTextBlocksProps = {
  content: {
    id: number
    text: string
    title: string
  }[]
}

export const LegalTextBlocks = ({ content }: LegalTextBlocksProps) => {
  return (
    <section className="space-y-4">
      {content.map((block, i) => {
        return (
          <article key={i}>
            <h3 className="mb-2 text-2xl font-bold">{block.title}</h3>
            <Markdown className="mark-down-legal">{block.text}</Markdown>
          </article>
        )
      })}
    </section>
  )
}
