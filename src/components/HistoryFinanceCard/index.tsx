import * as S from './styles'

interface IHistoryFinanceCardProps {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

export const HistoryFinanceCard = ({
  tagColor,
  title,
  subtitle,
  amount,
}: IHistoryFinanceCardProps) => (
  <S.Container>
    <S.Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subtitle}</small>
    </div>
    <h3>{amount}</h3>
  </S.Container>
)
