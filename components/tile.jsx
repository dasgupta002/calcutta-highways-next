export default function Tile({ index, post }) {
    const { title, gist, image, slug } = post.fields

    return (
        <section className = "flex flex-col items-center md:flex-row gap-6 md:gap-12 border-[#fbe9b0] border-b-2 px-3 py-6 mb-12">
            <div className = "text-left">
                <a href = { '/post/' + slug } className = "text-2xl font-bold mb-6">{ title }</a>
                <p className = "text-white text-justify">{ gist }</p>
            </div>
            {
                image && <img src = { 'https:' + image.fields.file.url } className = { index % 2 === 0 ? "h-36 w-full md:w-36 rounded-md rotate-6" : "h-36 w-full md:w-36 rounded-md -rotate-6" } />
            }
        </section>
    )
}
