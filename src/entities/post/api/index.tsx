import { PostHandlerResponse } from '@server/handlers/post'
import { API_ENDPOINTS } from 'shared/lib/api'
import { getFetcher } from 'shared/lib/fetcher'
import { defaultLocale } from 'shared/lib/i18/i18.constants'

export const getPostByName = async (name: string, locale = defaultLocale) => {
    const response = await getFetcher<PostHandlerResponse>(
        `${API_ENDPOINTS.PostByTitle}${locale}/${name}`
    )
    return response.data
}
