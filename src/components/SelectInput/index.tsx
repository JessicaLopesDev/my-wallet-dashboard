import * as S from './styles'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
}

export const SelectInput = ({ options }: ISelectInputProps) => {
  return (
    <S.Container>
      <select>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.Container>
  )
}
