import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

import { Layout } from './components/Layout'
import dark from './styles/themes/dark'

export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}
