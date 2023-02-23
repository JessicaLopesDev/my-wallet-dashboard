import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`
export const Header = styled.div`
  display: flex;
  align-items: center;

  height: 70px;
`

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`
export const Title = styled.h3`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.white};
`
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`
export const MenuItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.info};

  display: flex;
  align-items: center;
  margin: 7px 0;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 4px;
  }
`
