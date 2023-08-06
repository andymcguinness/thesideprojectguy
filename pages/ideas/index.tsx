import { request } from '@/lib/datocms';

import Navbar from '../../components/Navbar'
import IdeaFilter from '../../components/IdeaFilter'
import { IdeaTags, Ideas } from './IdeaTypes';

export async function getStaticProps({ preview = false }) {
  // Query
  const IDEAS_QUERY = `query MyQuery {
    allIdeas(orderBy: title_ASC) {
      title
      description
      tags {
        name
        slug
      }
    }
  }`;

  // Request
  const ideas = (await request({
    "query": IDEAS_QUERY,
    "variables": { "limit": 10 }
  })) || [];

  const TAGS_QUERY = `query MyQuery {
    allIdeaTags(orderBy: name_ASC) {
      slug
      name
      id
    }
  }`;

  const tags = (await request({
    "query": TAGS_QUERY,
    "variables": { "limit": 10 }
  })) || [];

  // Return
  return {
    props: { ideas, tags },
  }
}

export default function Ideas({ ideas, tags } : { ideas : Ideas, tags : IdeaTags }) {

  return (
    <div className="bg-tspg-white min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-white pb-5 h-full grid xl:grid-cols-5">
        <IdeaFilter ideas={ideas} tags={tags} />
      </main>
    </div>
  )
}