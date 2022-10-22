import ShortUrlDataSourceImpl from '../../../data/data-source/short-url-data-souce-impl'
import { ShortUrlRepositoryImpl } from '../../../data/repository/short-url-repository-impl'
import { CreateShortUrl } from '../../../domain/use-cases/create-short-url'

export const makeCreateShortUrl = () => {
  const dataSource = new ShortUrlDataSourceImpl()
  const shortUrlRepositoryImpl = new ShortUrlRepositoryImpl(dataSource)
  return new CreateShortUrl(shortUrlRepositoryImpl)
}
