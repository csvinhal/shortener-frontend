import { ShortUrl } from '../../domain/entity/short-url'

export interface ShortUrlDataSource {
  createShortUrl(url: string, slug?: string): Promise<ShortUrl>
}
