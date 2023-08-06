import { request } from '@/lib/datocms';

import Navbar from '@/components/Navbar';

import { Post } from './PostTypes';
import { StructuredText } from 'react-datocms';
import Image from 'next/image';

import styles from '../../styles/BlogPost.module.css'

export async function getStaticPaths() {
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

    <div className="bg-tspg-white min-h-screen">
      <Navbar />
      <main className="flex bg-tspg-white pb-5 h-full w-full grid xl:grid-cols-5">
        <div className="bg-tspg-white px-4 py-10 w-full mx-auto xl:col-span-3 xl:col-start-2 relative flex flex-col">
          <div className="block">
            <h1 className="mb-2 font-sans text-5xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none bg-tspg-yellow w-auto inline-block">{post.title}</h1>
            <h2 className="text-base text-xl inline-block w-full">{post.subtitle}</h2>
          </div>

          <div className="flex flex-row gap-x-6 mt-4 mb-4">
            <Image src={post.author.image.url} width={75} height={75} className="rounded-md col-span-1" alt="The author's picture" placeholder='blur' blurDataURL={post.author.image.blurUpThumb} />
            <div className="flex flex-col col-span-7">
              <p className="text-base mb-1 text-md font-semibold">{post.author.name}</p>
              <StructuredText data={post.author.excerpt} />
            </div>
          </div>

          <Image src={post.image.url} height={600} width={900} placeholder="blur" blurDataURL={post.image.blurUpThumb} alt={''} className="self-center rounded-md" />

          <div className={styles.blog_post_content}>
            <StructuredText data={post.body} />
          </div>

          <div className="categories">
            <p>Categories: 
            {post.categories.map((category) => (
              <a href={`/blog/category/${category.slug}`} key={category.id} className="ml-1 font-semibold decoration-4 decoration-tspg-yellow hover:underline">{category.name}</a>
            ))}
            </p>
          </div>

          <div className="tags">
            <p>Tags: 
            {post.tags.map((tag) => (
              <a href={`/blog/tag/${tag.slug}`} key={tag.id} className="ml-1 font-semibold decoration-4 decoration-tspg-yellow hover:underline">{tag.name}</a>
            ))}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}