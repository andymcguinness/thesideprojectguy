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
              blurHash
            }
          }
          body {
            value
          }
          categories {
            name
            slug
          }
          excerpt {
            value
          }
          image {
            url
            blurHash
          }
          subtitle
          tags {
            name
            slug
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
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-gray pb-5 h-full w-full">
        <div className="bg-tspg-white px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl rounded-md">
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