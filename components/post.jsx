import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Post({ post }) {
    const { title, type, image, content } = post.fields
    
    return (
        <article className = "my-12">
            <h1 className = "text-4xl font-bold line-through -rotate-5 mb-16">{ title }</h1>
            {
                type === "Poem" && <div className = "text-center">
                    { documentToReactComponents(content) }
                </div>
            }
 
            {
                type === "Paragraph" && <div className = "flex flex-col items-end">
                    {
                        image && <img 
                              src = { "https:" + image.fields.file.url } 
                              className = "h-[18rem] w-[27rem] rounded-md mb-12" 
                        />
                    }

                    <div className = "textual text-justify tracking-widest leading-7 first-letter:text-4xl">
                        { documentToReactComponents(content) }
                    </div>
                </div>
            }
        </article>
    )
}