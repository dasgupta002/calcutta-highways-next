import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Post({ post }) {
    const { title, type, image, content } = post.fields
    
    return (
        <article className = "my-12">
            <h1 className = "text-4xl font-bold mb-16">{ title }</h1>
            { image && <img src = { image } className = "h-[27rem] w-full rounded-md rotate-6 mb-16" /> }
            <div className = { type === 'Poem' ? 'text-center text-lg' : 'text-justify text-lg' }>{ documentToReactComponents(content) }</div>
        </article>
    )
}