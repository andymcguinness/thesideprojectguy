import { request } from '@/lib/datocms';

import { Category, Posts } from '../PostTypes';
import ExcerptComponent from '../ExcerptComponent';

export async function getStaticPaths() {
  // Query
  const CATS_QUERY = `query MyQuery {
    allCategories {
      name
      slug
    }
  }`;

  // Request
  const categories = await request({
    "query": CATS_QUERY,
    "variables": { "limit": 10 }
  });

  const paths = categories.allCategories.map((category: Category) => ({
    params: { slug: category.slug },
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: { params: any }) {
    const CATS_QUERY = `query MyQuery {
        category(filter: {slug: {eq: "${params.slug}"}}) {
          name
          slug
          id
        }
      }`;
    
      // Request
      const thisCategory = await request({
        "query": CATS_QUERY,
        "variables": { "limit": 10 }
      });

      const category = thisCategory.category;
    
  // Query
  const POSTS_QUERY = `query MyQuery {
    allPosts(filter: {categories: {eq: "${category.id}"}}) {
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

  // Return
  return {
    props: { posts, category },
  }
}

export default function PostPage({ posts, category } : { posts : Posts, category : Category }) {
  return (
    <>
        <h1>Category: {category.name}</h1>

        {posts.allPosts?.map((post, index) => {
            return (
                <ExcerptComponent key={index} post={post} />
            )
        })}
    </>
  )
}