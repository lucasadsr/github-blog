import { useContext, useEffect, useState, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Info, InfosContainer, PostContent } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { BlogContext, PostType } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'
import { formatDateDistance } from '../../utils/formatDate'
import { MarkdownWithSyntaxHighlighting } from './components/MarkdownWithSyntaxHighlighting'

export function Post() {
  const [post, setPost] = useState<PostType>({} as PostType)
  const { profileData } = useContext(BlogContext)
  const { postId } = useParams()

  const fetchUniquePost = useCallback(async () => {
    const response = await api.get(
      `/repos/lucasadsr/github-blog/issues/${postId}`,
    )
    setPost(response.data)
  }, [postId])

  useEffect(() => {
    fetchUniquePost()
  }, [fetchUniquePost])

  const dateObject = post.created_at ? new Date(post.created_at) : new Date()
  const formattedDate = formatDateDistance(dateObject)

  console.log(formattedDate)

  return (
    <main className="container">
      <Header>
        <nav>
          <Link to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <a href={post.html_url} target="_blank" rel="noreferrer">
            Ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </nav>

        <h2>JavaScript data types and data structures</h2>

        <InfosContainer>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileData.login}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendar} />
            <span>{formattedDate}</span>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentários</span>
          </Info>
        </InfosContainer>
      </Header>
      <PostContent>
        <MarkdownWithSyntaxHighlighting body={post.body} />
      </PostContent>
    </main>
  )
}
