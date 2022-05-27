import { createClient } from 'contentful'
import Post from '././../../components/post' 

const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'post' })
  
  const paths = response.items.map((post) => {
    return {
        params: { slug: post.fields.slug }
    }
  })

  return { 
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const response = await client.getEntries({ content_type: 'post', 'fields.slug': params.slug })

    if(!response.items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: { 
            post: response.items[0]
        }
    }
}

export default function fetchPost({ post }) {
    return <Post post = { post } />
}