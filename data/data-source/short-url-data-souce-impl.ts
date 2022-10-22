import axios from 'axios'
import { ShortUrl } from '../../domain/entity/short-url'
import { ShortUrlDataSource } from './short-url-data-source'

interface ShortUrlDto {
  id: string
  slug: string
  url: string
}

export default class ShortUrlDataSourceImpl implements ShortUrlDataSource {
  async createShortUrl(url: string, slug?: string): Promise<ShortUrl> {
    const response = await axios.post<ShortUrlDto>(
      'http://localhost:4000/short',
      { url, slug },
    )

    return {
      slug: response.data.slug,
      url: response.data.url,
    }
  }
}
