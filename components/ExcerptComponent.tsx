// Next.js
import Link from "next/link"
import Image from "next/image"

// DatoCMS
import { StructuredText } from "react-datocms"

// Types
import { Post } from "@/pages/blog/index"


export default function ExcerptComponent({ post }: { post: Post }) {
  return (
    <div className="mb-4 flex relative grid-cols-2 gap-6 px-4 py-4 shadow-xl rounded-md">
      <div className="w-auto flex col-span-1">
        <Image src={post.image.url} width={250} height={250} alt={""} placeholder="blur" blurDataURL={post.image.blurUpThumb} className="rounded-md" />
      </div>
      <div className="w-full col-span-1 flex flex-col">
        <Link href={`/blog/${post.slug}`} className="w-auto inline-block" key={post.slug}>
          <h1 className="w-auto text-2xl underline decoration-tspg-yellow decoration-4 hover:bg-tspg-yellow hover:no-underline inline-block">{post.title}</h1>
        </Link>

        <div className="w-full mt-4 mb-4">
          <StructuredText data={post.excerpt} key={post.title} />
        </div>

        <div className="mt-auto">
          <p>Categories:
            {post.categories.map((category) => (
              <a href={`/blog/category/${category.slug}`} key={category.id} className="ml-1 font-semibold decoration-4 decoration-tspg-yellow hover:underline">{category.name}</a>
            ))}
          </p>
          <p>Tags:
            {post.tags.map((tag) => (
              <a href={`/blog/tag/${tag.slug}`} key={tag.id} className="ml-1 font-semibold decoration-4 decoration-tspg-yellow hover:underline">{tag.name}</a>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}