import { request } from '@/lib/datocms';

import { Post } from './PostTypes';

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

export default function PostPage({ post } : { post : Post }) {
  return (
    <h1>{post.title}</h1>
  )
}