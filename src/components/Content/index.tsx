import React from 'react'
import * as S from './styles'

interface ChildrenProps {
  children: React.ReactNode
}

export const Content: React.FC<ChildrenProps> = ({ children }) => (
  <S.Container>
    {children}
  </S.Container>
)

