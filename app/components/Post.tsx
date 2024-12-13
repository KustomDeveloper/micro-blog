import  { type Post, User } from "@prisma/client" 
import Link from "next/link"
import styles from "./Post.module.css"

interface Props {
    post: Post & {
        author: User | null
    }
}

export default function Post({ post }: Props) {
    if (!post) {
        console.log(post)
        return "no posts"
    }
    
    const authorName = post?.author?.name ?? "Anonymous"

    return (
        <Link href={`/posts/${post.id}`} className={styles.post}>
            <h2>{post.title}</h2>
            <small>{authorName}</small>
        </Link>
    )
}