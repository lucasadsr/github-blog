import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: url('/assets/header-cover.png');
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