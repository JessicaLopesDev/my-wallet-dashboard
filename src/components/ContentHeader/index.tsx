import { SelectInput } from '../SelectInput'
import * as S from './styles'

export const ContentHeader = () => {
  const options = [
    { value: 'Jéssica', label: 'Jéssica' },
    { value: 'Aurora', label: 'Aurora' },
    { value: 'Jean', label: 'Jean' },
  ]
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Título</h1>
      </S.TitleContainer>
      <S.Controllers>
        <SelectInput options={options} />
      </S.Controllers>
    </S.Container>
  )
}
