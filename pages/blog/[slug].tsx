import { request } from '@/lib/datocms';

import Navbar from '@/components/Navbar';

import { Post } from './PostTypes';
import { StructuredText } from 'react-datocms';
import Link from 'next/link';

export async function getStaticPaths() {
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
  const posts = await request({
    "query": POSTS_QUERY,
    "variables": { "limit": 10 }
  });

  const paths = posts.allPosts.map((post: Post) => ({
    params: { slug: post.slug },
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: any }) {
  // Query
  const POSTS_QUERY = `query MyQuery {
    post(filter: {slug: {eq: "${params.slug}"}}) {
      author {
        image {
          url
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
      }
      excerpt {
        value
      }
      image {
        url
      }
      slug
      subtitle
      tags {
        name
        slug
      }
      title
    }
  }`;

  // Request
  const posts = await request({
    "query": POSTS_QUERY,
    "variables": { "limit": 10 }
  });

  const post = posts.post;

  // Return
  return {
    props: { post },
  }
}

export default function PostPage({ post }: { post: Post }) {
  return (
    <div className="bg-tspg-gray min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-gray pb-5 h-full w-full">
        <div className="bg-tspg-white rounded-md px-4 py-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 shadow-2xl">
          <h1 className="sm:max-w-xs mb-2 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-flex">{post.title}</h1>
          <h2 className="text-base mb-4">{post.subtitle}</h2>

          <StructuredText data={post.body} />

        </div>
      </main>
    </div>
  )
}