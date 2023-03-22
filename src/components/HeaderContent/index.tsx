import React from 'react'
import * as S from './styles'

interface IHeaderContentProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

export const HeaderContent = ({ title, lineColor, children }: IHeaderContentProps) => (
  <S.Container>
    <S.Title lineColor={lineColor}>
      <h1>{title}</h1>
    </S.Title>
    <S.Controllers>{children}</S.Controllers>
  </S.Container>
)
