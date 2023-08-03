import Link from 'next/link'
import { Post } from '@/pages/blog/PostTypes'
import { StructuredText } from 'react-datocms'

export default function ExcerptComponent({ post } : { post : Post }) {
    return (
        <>
            <Link href={`/blog/${post.slug}`}>
                <h1>{post.title}</h1>
            </Link>
            <StructuredText data={post.excerpt} />
        </>
    )
}