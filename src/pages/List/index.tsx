import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import * as S from './styles'

export const List = () => {
  const options = [
    { value: 'Jéssica', label: 'Jéssica' },
    { value: 'Aurora', label: 'Aurora' },
    { value: 'Jean', label: 'Jean' },
  ]

  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  )
}
