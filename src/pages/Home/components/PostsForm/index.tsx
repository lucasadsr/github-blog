import { FormContainer } from './styles'

interface PostsFormProps {
  postsNumber: number
}

export function PostsForm({ postsNumber }: PostsFormProps) {
  return (
    <FormContainer>
      <header>
        <h3>Publicações</h3>
        <span>{postsNumber} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainer>
  )
}
