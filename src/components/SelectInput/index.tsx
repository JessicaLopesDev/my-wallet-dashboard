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
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </select>
    </S.Container>
  )
}
