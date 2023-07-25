import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BlogContextProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogContextProvider>
    </ThemeProvider>
  )
}
