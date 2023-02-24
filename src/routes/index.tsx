import { AppRoutes } from './app.routes'
import { BrowserRouter } from 'react-router-dom'

export const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
