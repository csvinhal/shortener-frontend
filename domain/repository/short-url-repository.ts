import { ShortUrl } from '../entity/short-url'

export interface ShortUrlRepository {
  createShortUrl(url: string, slug?: string): Promise<ShortUrl>
}
