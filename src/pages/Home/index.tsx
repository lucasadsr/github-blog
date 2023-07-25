import { useEffect, useState } from 'react'
import { PostsForm } from './components/PostsForm'
import { Profile } from './components/Profile'
import { api } from '../../lib/axios'
import { Post, PostsContainer } from './styles'
import { formatDateDistance } from '../../utils/formatDate'

interface PostType {
  id: number
  title: string
  body: string
  created_at: string
}

interface PostsType {
  total_count: number
  items: PostType[]
}

export function Home() {
  const [posts, setPosts] = useState<PostsType>({} as PostsType)

  async function fetchPosts() {
    const reponse = await api.get('/search/issues', {
      params: {
        q: 'repo:lucasadsr/github-blog',
      },
    })

    setPosts(reponse.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(posts.items)

  return (
    <main className="container">
      <Profile />
      <PostsForm postsNumber={posts.total_count} />
      <PostsContainer>
        {posts.items &&
          posts.items.map((post) => (
            <Post key={post.id}>
              <header>
                <p>{post.title}</p>
                <span>{formatDateDistance(post.created_at)}</span>
              </header>
              <p>{post.body}</p>
            </Post>
          ))}
      </PostsContainer>
    </main>
  )
}
