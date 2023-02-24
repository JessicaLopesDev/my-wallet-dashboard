import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'

import * as S from './styles'

export const Dashboard = () => {
  const options = [
    { value: 'Jéssica', label: 'Jéssica' },
    { value: 'Aurora', label: 'Aurora' },
    { value: 'Jean', label: 'Jean' },
  ]

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  )
}
