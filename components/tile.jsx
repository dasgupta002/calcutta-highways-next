export default function Tile({ post }) {
    const { title, gist, slug } = post.fields

    return (
        <section className = "flex flex-col text-left border-[#fbe9b0] border-b-2 px-3 py-6 mb-6">
            <a href = { "/post/" + slug } className = "text-2xl font-bold mb-6">{ title }</a>
            <p className = "text-white text-justify">{ gist }</p>
        </section>
    )
}