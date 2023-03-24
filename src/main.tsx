import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProviderHook } from './hooks/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProviderHook>
    <App />
  </ThemeProviderHook>
)
