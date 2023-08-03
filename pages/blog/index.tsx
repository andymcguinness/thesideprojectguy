import { request } from "@/lib/datocms";
import Navbar from "../components/Navbar"
import ExcerptComponent from "./ExcerptComponent";
import { Post, Posts } from "./PostTypes";

export async function getStaticProps({ preview = false }) {
    // Query
    const POSTS_QUERY = `query MyQuery {
        allPosts {
          author {
            name
            image {
              url
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

export default function BlogHome({ posts } : { posts: Posts}) {

    return (
        <>
            <Navbar />
            <h1>Hello, this is my blog!</h1>
            {posts.allPosts.map((post, index) => {

                return (
                    <div key={post.title}>
                        <ExcerptComponent key={index} post={post} />
                    </div>
                );
            })}
        </>
    )
}