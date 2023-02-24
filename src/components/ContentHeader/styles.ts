import styled from 'styled-components'

interface ITitleContainerProps {
  lineColor: string
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;

  display: flex;
  justify-content: space-between;
`

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${({ theme }) => theme.colors.white};
    &::after {
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(props) => props.lineColor};
    }
  }
`
export const Controllers = styled.div`
  display: flex;
`
