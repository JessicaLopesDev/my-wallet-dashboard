import { Aside } from '../Aside'
import { Content } from '../Content'
import { MainHeader } from '../MainHeader'
import * as S from './styles'

export const Layout = () => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content />
    </S.Container>
  )
}
