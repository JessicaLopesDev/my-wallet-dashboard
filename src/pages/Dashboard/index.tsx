import { useMemo, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { MessageBox } from '../../components/MessageBox'
import { SelectInput } from '../../components/SelectInput'
import { WalletBox } from '../../components/WalletBox'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import months from '../../utils/months'

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';

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

  const expensesTotal = useMemo(() => {
    let total: number = 0

    expenses.forEach(element => {
      const date = new Date(element.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(element.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be a number')
        }
      }
    });

    return total
  }, [selectedMonth, selectedYear])

  const gainsTotal = useMemo(() => {
    let total: number = 0

    gains.forEach(element => {
      const date = new Date(element.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === selectedMonth && year === selectedYear) {
        try {
          total += Number(element.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be a number')
        }
      }
    });

    return total
  }, [selectedMonth, selectedYear])

  const totalBalance = useMemo(() => {
    return gainsTotal - expensesTotal
  }, [selectedMonth, selectedYear])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: sadImg
      }
    }
    else if (gainsTotal === 0 && expensesTotal === 0) {
      return {
        title: "Op's!",
        description: "Neste mês, não há registros de entradas ou saídas.",
        footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
        icon: opsImg
      }
    }
    else if (totalBalance === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
        icon: grinningImg
      }
    }
    else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: happyImg
      }
    }
  }, [totalBalance, gainsTotal, expensesTotal]);


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
          amount={totalBalance}
          color="#4E41F0"
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
        />
        <WalletBox
          title="entradas"
          color="#F7931B"
          amount={gainsTotal}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
        />

        <WalletBox
          title="saídas"
          color="#E44C4E"
          amount={expensesTotal}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
      </S.Content>
    </S.Container>
  )
}
