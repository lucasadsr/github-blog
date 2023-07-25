import { useContext } from 'react'
import { PostsForm } from './components/PostsForm'
import { Profile } from './components/Profile'
import { Post, PostsContainer } from './styles'
import { formatDateDistance } from '../../utils/formatDate'
import { BlogContext } from '../../contexts/BlogContext'
import { Link } from 'react-router-dom'

export function Home() {
  const { posts } = useContext(BlogContext)

  return (
    <main className="container">
      <Profile />
      <PostsForm postsNumber={posts.total_count} />
      <PostsContainer>
        {posts.items &&
          posts.items.map((post) => (
            <Link to={`/post/${post.number}`} key={post.number}>
              <Post>
                <header>
                  <p>{post.title}</p>
                  <span>{formatDateDistance(new Date(post.created_at))}</span>
                </header>
                <p>{post.body}</p>
              </Post>
            </Link>
          ))}
      </PostsContainer>
    </main>
  )
}
