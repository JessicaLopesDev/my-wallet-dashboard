import styled from 'styled-components'

export const Container = styled.div`
  grid-area: MH;
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`
export const Profile = styled.div`
  color: ${({ theme }) => theme.colors.white};
`

export const Welcome = styled.h3``

export const UserName = styled.span``
