import { ShortUrl } from '../../domain/entity/short-url'
import { ShortUrlRepository } from '../../domain/repository/short-url-repository'
import { ShortUrlDataSource } from '../data-source/short-url-data-source'

export class ShortUrlRepositoryImpl implements ShortUrlRepository {
  private dataSource: ShortUrlDataSource
  
  constructor(datasource: ShortUrlDataSource) {
    this.dataSource = datasource
  }

  async createShortUrl(url: string, slug?: string): Promise<ShortUrl> {
    return this.dataSource.createShortUrl(url, slug)
  }
}
