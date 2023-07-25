import { createContext, useState, ReactNode, useEffect } from 'react'
import { api } from '../lib/axios'

interface ProfileDataType {
  login: string
  name: string
  html_url: string
  bio: string
  avatar_url: string
  company?: string
  followers: number
}

export interface PostType {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
}

interface PostsType {
  total_count: number
  items: PostType[]
}

interface BlogContextType {
  profileData: ProfileDataType
  posts: PostsType
  fetchPosts: (q: string) => Promise<void>
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [profileData, setProfileData] = useState<ProfileDataType>(
    {} as ProfileDataType,
  )
  const [posts, setPosts] = useState<PostsType>({} as PostsType)

  async function fetchProfileData() {
    const response = await api.get('/users/lucasadsr')
    setProfileData(response.data)
  }

  async function fetchPosts(q?: string) {
    if (q) {
      const reponse = await api.get('/search/issues', {
        params: {
          q: `${q} repo:lucasadsr/github-blog`,
        },
      })

      setPosts(reponse.data)
    } else {
      const reponse = await api.get('/search/issues', {
        params: {
          q: `repo:lucasadsr/github-blog`,
        },
      })

      setPosts(reponse.data)
    }
  }

  useEffect(() => {
    fetchProfileData()
    fetchPosts()
  }, [])

  return (
    <BlogContext.Provider value={{ profileData, posts, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
