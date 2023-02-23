import logo from '../../assets/logo.svg'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from 'react-icons/md'

import * as S from './styles'

export const Aside = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="Logo Minha Carteira" />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  )
}
