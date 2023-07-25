import { styled } from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
