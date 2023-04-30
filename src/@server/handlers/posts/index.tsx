import { NextApiRequest, NextApiResponse } from 'next'
import postsEn from 'shared/data/posts.en.json'
import postsJa from 'shared/data/posts.ja.json'
import { Posts, PostT } from './types/posts.type'

export interface PostsHandlerResponse {
    data: PostT[]
}

const postsHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<PostsHandlerResponse>
) => {
    const {
        query: { name, locale = 'en' },
        method,
    } = req

    const posts = locale === 'en' ? postsEn : postsJa

    switch (method) {
        case 'GET':
            res.status(200).json({ data: (posts as Posts).data })
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
export default postsHandler
