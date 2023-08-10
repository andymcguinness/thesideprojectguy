import React from 'react';

import { request } from "@/lib/datocms";

import { globby } from 'globby';
import unixify from 'unixify';

async function createSitemap (posts, tags, categories) {
    const pages = await globby([
        'pages/*.js',
        'data/**/*.mdx',
        '!data/*.mdx',
        '!pages/_*.js',
        '!pages/api',
        '!pages/404.js',
    ]);

    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        ${posts.allPosts
          .map(({ slug }) => {
            return `
                <url>
                    <loc>${`https://thesideprojectguy.com/blog/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}

          ${tags.allTags
            .map(({ slug }) => {
              return `
                  <url>
                      <loc>${`https://thesideprojectguy.com/blog/tag/${slug}`}</loc>
                  </url>
              `;
            })
            .join('')}

            ${categories.allCategories
                .map(({ slug }) => {
                  return `
                      <url>
                          <loc>${`https://thesideprojectguy.com/blog/category/${slug}`}</loc>
                      </url>
                  `;
                })
                .join('')}

                ${pages
                    .map((page) => {
                      const path = page
                        .replace('pages', '')
                        .replace('data', '')
                        .replace('.js', '')
                        .replace('.mdx', '');
                      const route = path === '/index' ? '' : unixify(path);
           
                      return `
                        <url>
                            <loc>${`https://thesideprojectguy${route}`}</loc>
                        </url>
                      `;
                    })
                    .join('')}
    </urlset>
    `};
 
class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
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
 
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(posts, tags, categories));
    res.end();
  }
}
 
export default Sitemap;