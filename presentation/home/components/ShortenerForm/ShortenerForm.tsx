import { useForm } from 'react-hook-form'
import Button, {
  ButtonSizeEnum,
  ButtonVariantEnum,
} from '../../../../components/Button/Button'
import Input, { InputSizeEnum } from '../../../../components/Input/Input'
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
        <Input
          placeholder="Past a link to shorten it"
          {...register('url')}
          inputSize={InputSizeEnum.lg}
          autoComplete="off"
        />
        <Button size={ButtonSizeEnum.lg} type="submit">
          Shorten
        </Button>
      </div>

      <Button type="button" variant={ButtonVariantEnum.ghost}>
        More Options
      </Button>
      <Input
        placeholder="Custom Alias"
        {...register('slug')}
        autoComplete="off"
      />
    </form>
  )
}

export default ShortenerForm
