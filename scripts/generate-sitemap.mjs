import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';
import { GraphQLClient } from "graphql-request"



async function generate() {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby([
        'pages/**/*.tsx',
        'data/**/*.mdx',
        '!data/*.mdx',
        '!pages/_*.tsx',
        '!pages/api',
        '!pages/404.tsx',
        '!pages/**/[slug].tsx'
    ]);

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

    const endpoint = "https://graphql.datocms.com/"

    const client = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
        },
    });

    // Request
    const posts = await client.request(POSTS_QUERY, { "limit": 10 });

    // Query
    const TAGS_QUERY = `query MyQuery {
    allTags {
      name
      slug
    }
  }`;

    // Request
    const tags = await client.request(TAGS_QUERY, { "limit": 10 });

    // Query
    const CATS_QUERY = `query MyQuery {
    allCategories {
      name
      slug
    }
  }`;

    // Request
    const categories = await client.request(CATS_QUERY, { "limit": 10 });

    const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map((page) => {
                const path = page
                    .replace('pages', '')
                    .replace('data', '')
                    .replace('.tsx', '')
                    .replace('.mdx', '');
                const route = path.indexOf('/index') > 0 ? path.split('/index')[0] : path;

                return `
              <url>
                  <loc>${`https://thesideprojectguy${route}`}</loc>
              </url>
            `;
            })
            .join('')}

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
          </urlset>

    `;

    prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html',
    }).then((value) => {
        writeFileSync('public/sitemap.xml', value);
    });

    // eslint-disable-next-line no-sync

}

generate();