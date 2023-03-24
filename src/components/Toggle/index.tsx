import * as S from './styles'

interface IToggleProps {
  leftLabel: string;
  rightLabel: string;
  checked: boolean;
  onChange(): void;
}

export const Toggle = ({
  leftLabel,
  rightLabel,
  checked,
  onChange
}: IToggleProps) => (
  <S.Container>
    <S.ToggleLabel>{leftLabel}</S.ToggleLabel>
    <S.ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <S.ToggleLabel>{rightLabel}</S.ToggleLabel>
  </S.Container>
)
