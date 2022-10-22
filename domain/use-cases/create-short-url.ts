import { ShortUrl } from '../entity/short-url'
import { ShortUrlRepository } from '../repository/short-url-repository'

export interface CreateShortUrlUseCase {
  invoke: (url: string, slug?: string) => Promise<ShortUrl>
}

export class CreateShortUrl implements CreateShortUrlUseCase {
  constructor(private shortUrlRepository: ShortUrlRepository) {}

  async invoke(url: string, slug?: string) {
    return this.shortUrlRepository.createShortUrl(url, slug)
  }
}
