import { request } from "@/lib/datocms";
import Navbar from "../../components/Navbar"
import ExcerptComponent from "../../components/ExcerptComponent";
import { Post, Posts } from "./PostTypes";

export async function getStaticProps({ preview = false }) {
  // Query
  const POSTS_QUERY = `query MyQuery {
        allPosts {
          author {
            name
            image {
              url
              blurUpThumb
            }
          }
          body {
            value
          }
          categories {
            name
            slug
            id
          }
          excerpt {
            value
          }
          image {
            url
            blurUpThumb
          }
          subtitle
          tags {
            name
            slug
            id
          }
          title
          slug
        }
      }`;

  // Request
  const posts = (await request({
    "query": POSTS_QUERY,
    "variables": { "limit": 10 }
  })) || [];

  // Return
  return {
    props: { posts },
  }
}

export default function BlogHome({ posts }: { posts: Posts }) {

  return (
    <div className="bg-tspg-white min-h-screen">
      <Navbar />
      <main className="flex bg-tspg-white pb-5 h-full w-full grid xl:grid-cols-5">
        <div className="bg-tspg-white px-4 py-10 w-full mx-auto xl:col-span-3 xl:col-start-2">
          <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Blog</h1>
          
          <div className="grid grid-col-1 gap-x-2 gap-y-2">
            {posts.allPosts.map((post, index) => {

              return (
                <div key={post.title} className="block">
                  <ExcerptComponent key={index} post={post} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  )
}