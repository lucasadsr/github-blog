import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { FormContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

interface PostsFormProps {
  postsNumber: number
}

const searchPostSchema = z.object({
  content: z.string(),
})

type searchPostInputs = z.infer<typeof searchPostSchema>

export function PostsForm({ postsNumber }: PostsFormProps) {
  const { fetchPosts } = useContext(BlogContext)

  const { register, handleSubmit } = useForm<searchPostInputs>({
    resolver: zodResolver(searchPostSchema),
  })

  async function handleSearchPost(data: searchPostInputs) {
    const { content } = data
    fetchPosts(content)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsNumber} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('content')}
      />
    </FormContainer>
  )
}
