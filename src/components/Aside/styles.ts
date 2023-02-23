import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`
