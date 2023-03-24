import { useMemo, useState } from 'react'
import emojis from '../../utils/emojis'
import { Toggle } from '../Toggle'

import { useTheme } from '../../hooks/theme';

import * as S from './styles'

export const MainHeader = () => {
  const { toggleTheme, theme } = useTheme();
  
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleChangeTheme = () => {
      setDarkTheme(!darkTheme);
      toggleTheme();
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <S.Container>
      <Toggle 
        leftLabel="Light"
        rightLabel="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Jéssica</S.UserName>
      </S.Profile>
    </S.Container>
  )
}
