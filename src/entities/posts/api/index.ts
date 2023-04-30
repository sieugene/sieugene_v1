import { PostsHandlerResponse } from '@server/handlers/posts'
import { API_ENDPOINTS } from 'shared/lib/api'
import { getFetcher } from 'shared/lib/fetcher'
import { defaultLocale } from 'shared/lib/i18/i18.constants'

export const getPosts = async (locale = defaultLocale) => {
    const response = await getFetcher<PostsHandlerResponse>(
        `${API_ENDPOINTS.Posts}${locale}`
    )
    return response.data
}
