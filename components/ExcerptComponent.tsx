import Link from 'next/link'
import { Post } from '@/pages/blog/PostTypes'
import { StructuredText } from 'react-datocms'
import Image from 'next/image'

export default function ExcerptComponent({ post } : { post : Post }) {
    return (
        <div className="mb-4 flex relative grid-cols-2 gap-6">
            <div className="w-auto flex col-span-1">
                <Image src={post.image.url} width={300} height={300} alt={''} />
            </div>
            <div className='col-span-1 flex flex-col'>
                <Link href={`/blog/${post.slug}`} className="w-full">
                    <h1 className="text-2xl underline decoration-tspg-yellow decoration-4 mb-4">{post.title}</h1>
                </Link>
                
                <div className="w-full">
                    <StructuredText data={post.excerpt} />
                </div>
            </div>
        </div>
    )
}