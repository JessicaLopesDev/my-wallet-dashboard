import React, { useMemo } from 'react'
import emojis from '../../utils/emojis'
import { Toggle } from '../Toggle'

import * as S from './styles'

export const MainHeader = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Jéssica</S.UserName>
      </S.Profile>
    </S.Container>
  )
}
