import React from 'react'

import { Aside } from '../Aside'
import { Content } from '../Content'
import { MainHeader } from '../MainHeader'
import * as S from './styles'

interface ChildrenProps {
  children: React.ReactNode
}

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <S.Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </S.Container>
  )
}
