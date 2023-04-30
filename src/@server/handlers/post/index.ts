import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { defaultLocale } from 'shared/lib/i18/i18.constants'
const basepath = 'src/shared/data/'

export interface PostHandlerResponse {
    data: MDXRemoteSerializeResult<Record<string, unknown>>
}

const postHandler = async (
    req: NextApiRequest,
    res: NextApiResponse<PostHandlerResponse>
) => {
    const {
        query: { name, locale = defaultLocale },
        method,
    } = req

    fs.readFile(
        path.resolve(`${basepath}${locale}/${name}.mdx`),
        {
            encoding: 'utf8',
        },
        async (err, data) => {
            if (err) {
                res.status(404).end(`Post with name ${name} not found`)
            }
            const mdxSource = await serialize(data)
            switch (method) {
                case 'GET':
                    res.status(200).json({ data: mdxSource })
                    break
                default:
                    res.setHeader('Allow', ['GET'])
                    res.status(405).end(`Method ${method} Not Allowed`)
            }
        }
    )
}
export default postHandler
