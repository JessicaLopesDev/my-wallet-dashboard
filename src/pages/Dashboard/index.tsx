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
import { Piechart } from '../../components/Piechart'
import HistoryBox from '../../components/HistoryBox'

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

  const relationExpensesVersusGains = useMemo(() => {
    const total = gainsTotal + expensesTotal;

    const percentGains = Number(((gainsTotal / total) * 100).toFixed(1));
    const percentExpenses = Number(((expensesTotal / total) * 100).toFixed(1));

    const data = [
      {
        name: "Entradas",
        percent: percentGains ? percentGains : 0,
        color: '#F7931B'
      },
      {
        name: "Saídas",
        percent: percentExpenses ? percentExpenses : 0,
        color: '#E44C4E'
      },
    ];

    return data;
  }, [gainsTotal, expensesTotal]);

  const historyData = useMemo(() => {
    return months.map((_, monthIndex) => {

      let entryAmount = 0;
      gains.forEach(gain => {
        const date = new Date(gain.date)
        const gainMonth = date.getMonth()
        const gainYear = date.getFullYear()

        if (gainMonth === monthIndex && gainYear === selectedYear) {
          try {
            entryAmount += Number(gain.amount)
          } catch {
            throw new Error('AmountEntry must be a valid number')
          }
        }
      })

      let outputAmount = 0;
      expenses.forEach(expense => {
        const date = new Date(expense.date)
        const expenseMonth = date.getMonth()
        const expenseYear = date.getFullYear()

        if (expenseMonth === monthIndex && expenseYear === selectedYear) {
          try {
            outputAmount += Number(expense.amount)
          } catch {
            throw new Error('OutputAmount must be a valid number')
          }
        }
      })

      return {
        monthNumber: monthIndex,
        month: months[monthIndex].substring(0, 3),
        entryAmount,
        outputAmount
      }
    }).filter(item => {
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()
      return (selectedYear === currentYear && item.monthNumber <= currentMonth) ||
      (selectedYear < currentYear)
    })
  },[selectedYear])


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
        <Piechart data={relationExpensesVersusGains}/>
        <HistoryBox 
          data={ historyData }
          entryColor="#F7931B"
          outputColor="#E44C4E"
        />
      </S.Content>
    </S.Container>
  )
}
