import { GetStaticProps } from "next"

import Layout from "../components/Layout"
import { getAllPostData } from '../lib/fetch'
import Post from '../components/Post';
import { POST } from "../types/types"

type STATICPROPS = {
  posts: POST[]
}

/* SSG + PreFetch */

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className=" text-4xl mb-10">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostData()
  return {
    props: { posts }
  }
}
