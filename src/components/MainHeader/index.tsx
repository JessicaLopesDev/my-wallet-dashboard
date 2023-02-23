import * as S from './styles'

export const MainHeader = () => {
  return (
    <S.Container>
      <h1>Toggle</h1>
      <S.Profile>
        <S.Welcome>Olá, </S.Welcome>
        <S.UserName>Jéssica</S.UserName>
      </S.Profile>
    </S.Container>
  )
}
