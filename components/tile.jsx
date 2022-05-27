export default function Tile({ index, post }) {
    const { title, gist, image, slug } = post.fields

    return (
        <section className = "flex flex-row gap-12 border-[#fbe9b0] border-b-2 px-3 py-6 mb-12">
            <div className = "text-left">
                <a href = { '/post/' + slug } className = "text-2xl font-bold mb-6">{ title }</a>
                <p className = "text-white text-justify">{ gist }</p>
            </div>
            {
                image && <img src = "/sample.jpg" className = { index % 2 === 0 ? "h-66 w-72 rounded-md rotate-6" : "h-66 w-72 rounded-md -rotate-6" } />
            }
        </section>
    )
}