import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function Post({ post }) {
    const { title, type, image, content } = post.fields
    
    return (
        <article className = "flex flex-col my-12">
            <h1 className = "text-4xl font-bold mb-16">{ title }</h1>
            <div className = "flex flex-row">
                { image && <img src = { 'https:' + image.fields.file.url } className = "h-[15rem] md:h-[27rem] w-1/2 rounded-md rotate-6 mr-12 mb-12" /> }
                <div className = { type === 'Poem' ? 'text-center text-lg' : 'text-justify text-lg' }>{ documentToReactComponents(content) }</div>
            </div>
        </article>
    )
}
