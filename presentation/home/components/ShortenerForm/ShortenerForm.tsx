import { useForm } from 'react-hook-form'
import { CreateShortUrl } from '../../../../domain/use-cases/create-short-url'
import { useCreateShortUrl } from '../../hooks/useCreateShortUrl'
import styles from './ShortenerForm.module.css'

interface ShortenerForm {
  url: string
  slug?: string
}

interface Props {
  createShortUrl: CreateShortUrl
}

const ShortenerForm = ({ createShortUrl }: Props) => {
  const { mutateAsync } = useCreateShortUrl(createShortUrl)

  const { register, handleSubmit } = useForm<ShortenerForm>({
    defaultValues: { url: '', slug: '' },
  })

  const onSubmit = async ({ url, slug }: ShortenerForm) => {
    await mutateAsync({ url, slug })
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <input
          placeholder="Past a link to shorten it"
          {...register('url')}
          autoComplete="off"
        />
        <button type="submit">Shorten</button>
      </div>

      <button className={styles.moreOptions} type="button">
        More Options
      </button>
      <input
        className={styles.customAlias}
        placeholder="Custom Alias"
        {...register('slug')}
        autoComplete="off"
      />
    </form>
  )
}

export default ShortenerForm
