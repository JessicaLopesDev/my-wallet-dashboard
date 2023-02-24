import { ContentHeader } from '../../components/ContentHeader'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { SelectInput } from '../../components/SelectInput'
import * as S from './styles'

export const List = () => {
  const months = [
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
  ]

  const years = [
    { value: 2023, label: 2023 },
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
  ]

  return (
    <S.Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <S.Filters>
        <button type="button" className="filter-tag" id="recurrents">
          Recorrentes
        </button>
        <button type="button" className="filter-tag" id="eventuals">
          Eventuais
        </button>
      </S.Filters>
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
