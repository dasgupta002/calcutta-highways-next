import { createClient } from 'contentful'
import Tile from '../components/tile'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  })

  const response = await client.getEntries({ content_type: 'post' })

  return {
    props: {
      posts: response.items
    },
    revalidate: 5
  }
}

export default function Home({ posts }) {
  return posts.map((post, index) => <Tile key = { index } index = { index } post = { post } />)
}
