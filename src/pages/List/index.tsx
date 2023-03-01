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
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual'])

  const { type } = useParams()

  const pageData = useMemo(() => {
    return type === 'entry-balance'
      ? {
          name: 'Entradas',
          lineColor: '#F7931B',
          data: gains,
        }
      : {
          name: 'Saidas',
          lineColor: '#E44C4E',
          data: expenses,
        }
  }, [type])

  const listOfMonths = useMemo(() => {
    return months.map((item, index) => ({ value: index + 1, label: item }))
  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    const { data } = pageData

    data.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((item) => ({ value: item, label: item }))
  }, [pageData.data])

  const handleFrequencyClick = (frenquency: string) => {
    const selected = frequencyFilterSelected.findIndex((item) => item === frenquency)

    if (selected >= 0) {
      const filtered = frequencyFilterSelected.filter((item) => item !== frenquency)
      setFrequencyFilterSelected(filtered)
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frenquency])
    }
  }

  useEffect(() => {
    const { data } = pageData

    const filteredDate = data.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return (
        month === selectedMonth &&
        year === selectedYear &&
        frequencyFilterSelected.includes(item.frequency)
      )
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
  }, [pageData, selectedMonth, selectedYear, data.length, frequencyFilterSelected])

  return (
    <S.Container>
      <ContentHeader title={pageData.name} lineColor={pageData.lineColor}>
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
        <button
          type="button"
          className={`filter-tag
          ${frequencyFilterSelected.includes('recorrente') && 'actived'}`}
          id="recurrents"
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`filter-tag
          ${frequencyFilterSelected.includes('eventual') && 'actived'}`}
          id="eventuals"
          onClick={() => handleFrequencyClick('eventual')}
        >
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
