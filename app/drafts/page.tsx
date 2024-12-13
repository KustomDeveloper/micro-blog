
import { Metadata } from "next"
import prisma from "../lib/prisma";
import Post from "../components/Post";
import styles from "./Drafts.module.css"

export const metadata: Metadata = {
    title: "Draft",
    description: "About my mini blog.",
  };

export default async function DraftsPage() {
    const drafts = await prisma.post.findMany({
        where: {
          published: false
        },
        orderBy: {
          updatedAt: "desc"
        },
        include: {
            author: true
        }
      });
    return (
        <main>
            <h1>Drafts</h1>
            {drafts.map(post => (
                <div key={post.id} className={styles.draft}>
                    <Post key={post.id} post={post} />
                </div>
            ))}
        </main>
    )
}