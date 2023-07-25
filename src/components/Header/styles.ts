import { styled } from 'styled-components'
import bg from '../../assets/header-cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 18.5rem;

  img {
    width: 9.25rem;
    height: fit-content;
    margin-top: 4rem;
  }
`
