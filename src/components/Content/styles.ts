import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CT;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  padding: 25px;
`
