import * as S from './styles'

export const Toggle = () => (
  <S.Container>
    <S.ToggleLabel>Light</S.ToggleLabel>
    <S.ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log('mudou')}
    />
    <S.ToggleLabel>Dark</S.ToggleLabel>
  </S.Container>
)
