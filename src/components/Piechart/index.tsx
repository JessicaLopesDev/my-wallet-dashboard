
import * as S from './styles'

export const Piechart = () => {
  return (
    <S.Container>
      <S.LeftSide>
            <h2>Relação</h2>
            <S.LegendContainer>
                <S.Legend color='#F7931B'>
                  <div>5%</div>
                  <span>Entradas</span>
                </S.Legend>

                <S.Legend color='#E44C4E'>
                  <div>95%</div>
                  <span>Saídas</span>
                </S.Legend> 
            </S.LegendContainer>
        </S.LeftSide>

    </S.Container>
  )
}
