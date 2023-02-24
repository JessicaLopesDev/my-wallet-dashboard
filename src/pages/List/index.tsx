import { ContentHeader } from '../../components/ContentHeader'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
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
      <S.Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="24/02/2023"
          amount="R$ 130,00"
        />
      </S.Content>
    </S.Container>
  )
}
