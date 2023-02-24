import React from 'react'
import * as S from './styles'

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

export const ContentHeader = ({ title, lineColor, children }: IContentHeaderProps) => {
  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </S.TitleContainer>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  )
}
