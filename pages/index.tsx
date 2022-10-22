import type { NextPage } from 'next'
import { makeCreateShortUrl } from '../presentation/home/factory/makeCreateShortUrl'
import HomePage from '../presentation/home/HomePage'

const Home: NextPage = () => {
  return <HomePage createShortUrl={makeCreateShortUrl()} />
}

export default Home
