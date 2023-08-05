import { request } from '@/lib/datocms';

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
    props: { posts, tag },
  }
}

export default function PostPage({ posts, tag } : { posts : Posts, tag : Tag }) {
  return (
    <>
        <h1>Tag: {tag.name}</h1>

        {posts.allPosts?.map((post, index) => {
            return (
                <ExcerptComponent key={index} post={post} />
            )
        })}
    </>
  )
}