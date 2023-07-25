import { styled } from 'styled-components'

export const PostsContainer = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  a {
    text-decoration: none;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }
  }
`

export const Post = styled.div`
  flex: 1;
  max-width: 26rem;
  max-height: 16.25rem;
  border-radius: 6px;
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: border 100ms;
  cursor: pointer;

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    p {
      max-width: 70%;
      font-size: 1.25rem;
      font-weight: 700;
      max-height: 4rem;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${(props) => props.theme['base-title']};
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    text-transform: capitalize;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
