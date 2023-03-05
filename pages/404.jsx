export default function Error() {
    return (
        <div className = "flex flex-col items-center my-16">
            <img src = "/hero.png" className = "w-screen h-[18rem] rounded-md mb-12" />
            <h1 className = "text-4xl font-bold mb-6">404</h1>
            <p className = "text-lg mb-6">Sorry, page not found.</p>
        </div>
    )
}