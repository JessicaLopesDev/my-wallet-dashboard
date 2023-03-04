import dollarImg from '../../assets/dollarImg.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'

import * as S from './styles'
import { useMemo } from 'react'
import CountUp from 'react-countup'

interface IWalletBoxProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dollar' | 'arrowUp' | 'arrowDown'
  color: string
}

export const WalletBox = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}: IWalletBoxProps) => {

  const selectedIcon = useMemo(() => {
    switch (icon) {
      case 'dollar':
        return dollarImg
      case 'arrowUp':
        return arrowUpImg
      case 'arrowDown':
        return arrowDownImg
      default:
        return undefined
    }
  }, [])

  return (
    <S.Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$</strong>
        <CountUp
          end={amount}
          separator='.'
          decimal=','
          decimals={2}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={selectedIcon} alt={title} />
    </S.Container>
  )
}
