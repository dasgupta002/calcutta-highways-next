import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default function Post({ post }) {
    const { title, publishedOn, type, image, content } = post.fields

    return (
        <article className = "my-12">
            <h1 className = "text-2xl md:text-4xl font-bold mb-6">{ title }</h1>
            <p className = "text-sm md:tracking-[0.2rem] mb-24">
                { publishedOn }    |    { type === "Poem" ? "5 minutes read" : "7 minutes read" }
            </p>
            
            {
                type === "Poem" && <div className = "text-center">
                    { documentToReactComponents(content) }
                </div>
            }
 
            {
                type === "Paragraph" && <div className = "flex flex-col items-center">
                    {
                        image && <img 
                              src = { "https:" + image.fields.file.url } 
                              className = "w-full h-[18rem] rounded-md mb-12" 
                        />
                    }

                    <div className = "text-sm text-justify tracking-widest leading-9 w-[85%] first-letter:text-6xl">
                        { documentToReactComponents(content) }
                    </div>
                </div>
            }
        </article>
    )
}