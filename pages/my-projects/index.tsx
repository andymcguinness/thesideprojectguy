import { request } from "@/lib/datocms";
import ProjectGrid from "@/components/ProjectGrid";
import Navbar from "../../components/Navbar";
import { ProjectTags, Projects } from "./ProjectTypes";

export async function getStaticProps({ preview = false }) {
  // Query
  const PROJECTS_QUERY = `query MyQuery {
    allProjects(orderBy: title_ASC) {
      title
      description
      link
      tags {
        name
        slug
      }
    }
  }`;

  // Request
  const projects = (await request({
    "query": PROJECTS_QUERY,
    "variables": { "limit": 10 }
  })) || [];

  const TAGS_QUERY = `query MyQuery {
    allProjectTags(orderBy: name_ASC) {
      name
      slug
      id
    }
  }`;

  const tags = (await request({
    "query": TAGS_QUERY,
    "variables": { "limit": 10 }
  })) || [];

  // Return
  return {
    props: { projects, tags },
  }
}

export default function MyProjects({ projects, tags } : { projects : Projects, tags : ProjectTags }) {
  return (
    <div className="bg-tspg-white min-h-screen">
      <Navbar />
      <main className="pt-10 flex bg-tspg-white pb-5 h-full grid xl:grid-cols-5">
        <ProjectGrid projects={projects} tags={tags} />
      </main>
    </div>
  )
}