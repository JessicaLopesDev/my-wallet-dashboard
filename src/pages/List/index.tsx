import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ContentHeader } from '../../components/ContentHeader'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { SelectInput } from '../../components/SelectInput'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import months from '../../utils/months'
import * as S from './styles'

interface IData {
  id: string
  description: string
  amount: string
  frequency: string
  date: string
  tagColor: string
}

export const List = () => {
  const [data, setData] = useState<IData[]>([])
  const [selectedMonth, setSelectedMonth] = useState<string>(String(new Date().getMonth() + 1))
  const [selectedYear, setSelectedYear] = useState<string>(String(new Date().getFullYear()))

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

  const listOfMonths = useMemo(() => {
    return months.map((item, index) => ({ value: index + 1, label: item }))
  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    listData.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((item) => ({ value: item, label: item }))
  }, [listData])

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === selectedMonth && year === selectedYear
    })

    const formattedDate = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amount: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        date: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
      }
    })
    setData(formattedDate)
  }, [listData, selectedMonth, selectedYear, data.length])

  return (
    <S.Container>
      <ContentHeader title={title.name} lineColor={title.lineColor}>
        <SelectInput
          options={listOfMonths}
          onChange={(event) => setSelectedMonth(event.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(event) => setSelectedYear(event.target.value)}
          defaultValue={selectedYear}
        />
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
            subtitle={item.date}
            amount={item.amount}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}
