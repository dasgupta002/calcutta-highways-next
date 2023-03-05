import { createClient } from "contentful"

import Tile from "../components/tile"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

  const response = await client.getEntries({ content_type: "post" })

  return {
    props: {
      posts: response.items
    },
    revalidate: 5
  }
}

export default function Home({ posts }) {
  return (
    <div className = "flex gap-12 mb-12">
      <div className = "flex flex-col">
        {
          posts.map((post, index) => <Tile key = { index } index = { index } post = { post } />)
        }
      </div>
      <img src = "/banner.png" className = "w-[15rem] h-[25rem] rounded-md hidden md:block"/>
    </div>
  )
}
