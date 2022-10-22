import { useMutation } from '@tanstack/react-query'
import { CreateShortUrl } from '../../../domain/use-cases/create-short-url'

export const useCreateShortUrl = (createShortUrl: CreateShortUrl) => {
  const mutation = useMutation(
    ({ url, slug }: { url: string; slug?: string }) =>
      createShortUrl.invoke(url, slug),
  )

  return mutation
}
