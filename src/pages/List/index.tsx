import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContentHeader } from '../../components/ContentHeader'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { SelectInput } from '../../components/SelectInput'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import * as S from './styles'

interface IData {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

export const List = () => {
  const [data, setData] = useState<IData[]>([])

  const { type } = useParams()

  const title = useMemo(() => {
    return type === 'entry-balance'
      ? {
          name: 'Entradas',
          lineColor: '#F7931B',
        }
      : {
          name: 'Saidas',
          lineColor: '#E44C4E',
        }
  }, [type])

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses
  }, [type])

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

  useEffect(() => {
    const response = listData.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })
    setData(response)
  }, [])

  return (
    <S.Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}
