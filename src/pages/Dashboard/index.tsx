import { useMemo, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { MessageBox } from '../../components/MessageBox'
import { SelectInput } from '../../components/SelectInput'
import { WalletBox } from '../../components/WalletBox'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import months from '../../utils/months'

import happyImg from '../../assets/happy.svg';

import * as S from './styles'

export const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      }
    })
  }, [])

  const listOfMonths = useMemo(() => {
    return months.map((item, index) => ({ value: index + 1, label: item }))
  }, [])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setSelectedMonth(parseMonth)
    } catch {
      throw new Error('invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setSelectedYear(parseYear)
    } catch {
      throw new Error('invalid year value. Is accept integer numbers.')
    }
  }

  return (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={listOfMonths}
          onChange={(event) => handleMonthSelected(event.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(event) => handleYearSelected(event.target.value)}
          defaultValue={selectedYear}
        />
      </ContentHeader>

      <S.Content>
        <WalletBox
          title='saldo'
          amount={150.00}
          color="#4E41F0"
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
        />
        <WalletBox
          title="entradas"
          color="#F7931B"
          amount={5000.00}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
        />

        <WalletBox
          title="saídas"
          color="#E44C4E"
          amount={4850.00}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
        />
        <MessageBox
          title="Muito bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo."
          icon={happyImg}
        />
      </S.Content>
    </S.Container>
  )
}
