import { request } from '@/lib/datocms';

import Navbar from '@/components/Navbar';

import { Tag, Posts } from '../PostTypes';
import ExcerptComponent from '../../../components/ExcerptComponent';

export async function getStaticPaths() {
  // Query
  const TAGS_QUERY = `query MyQuery {
    allTags {
      name
      slug
    }
  }`;

  // Request
  const tags = await request({
    "query": TAGS_QUERY,
    "variables": { "limit": 10 }
  });

  const paths = tags.allTags.map((tag: Tag) => ({
    params: { slug: tag.slug },
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: any }) {
    const TAGS_QUERY = `query MyQuery {
        tag(filter: {slug: {eq: "${params.slug}"}}) {
          name
          slug
          id
        }
      }`;
    
      // Request
      const thisTag = await request({
        "query": TAGS_QUERY,
        "variables": { "limit": 10 }
      });

    const tag = thisTag.tag;
    
  // Query
  const POSTS_QUERY = `query MyQuery {
    allPosts(filter: {tags: {eq: "${tag.id}"}}) {
      author {
        image {
          url
          blurUpThumb
        }
        name
        excerpt {
          value
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
      slug
      subtitle
      tags {
        name
        slug
        id
      }
      title
    }
  }`;

  // Request
  const posts = await request({
    "query": POSTS_QUERY,
    "variables": { "limit": 10 }
  });

  // Return
  return {
    props: { posts, tag },
  }
}

export default function PostPage({ posts, tag } : { posts : Posts, tag : Tag }) {
  return (
    <div className="bg-tspg-white min-h-screen">
    <Navbar />
    <main className="flex bg-tspg-white pb-5 h-full w-full grid xl:grid-cols-5">
      <div className="bg-tspg-white px-4 py-10 w-full mx-auto xl:col-span-3 xl:col-start-2">
        <h1 className="sm:max-w-xs mb-6 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">Blog</h1>
        <h2 className="text-2xl">Tag: {tag.name}</h2>

        {posts.allPosts?.map((post, index) => {
            return (
              <div key={post.title} className="block">
                <ExcerptComponent key={index} post={post} />
              </div>
            )
        })}
      </div>
      </main>
    </div>
  )
}