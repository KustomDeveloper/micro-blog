import { notFound } from 'next/navigation';
import prisma from '../../lib/prisma'
import PostDetails from '../../components/PostDetails';

interface Props {
    params: {
        postId: string;
    }
}

export default async function PostPage({ params }: Props) {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params.postId)
        },
        include: {
            author: true
        }
    });

    if (!post) {
        notFound();
    }

    return <PostDetails {...post} />;
}