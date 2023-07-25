import { styled } from 'styled-components'

export const Header = styled.header`
  border-radius: 6px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 700;
      border-bottom: 1px solid ${(props) => props.theme['base-profile']};

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;

  img {
    max-width: 100%;
  }
`
