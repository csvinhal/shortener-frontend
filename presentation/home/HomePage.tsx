import Head from 'next/head'
import { CreateShortUrl } from '../../domain/use-cases/create-short-url'
import styles from '../../styles/Home.module.css'
import ShortenerForm from './components/ShortenerForm/ShortenerForm'

interface Props {
  createShortUrl: CreateShortUrl
}

const HomePage = ({ createShortUrl }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortener - Url Shortener</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Shortener</h1>

        <div className={styles.row}>
          <ShortenerForm createShortUrl={createShortUrl} />
        </div>
      </main>
    </div>
  )
}

export default HomePage
