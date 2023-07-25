import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  margin-top: -5.3rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-title']};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      height: fit-content;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }
`

export const ProfileInfoContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme['base-subtitle']};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`

export const Description = styled.p`
  margin: 0.5rem 0 1.5rem;
`
