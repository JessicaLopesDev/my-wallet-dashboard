import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts';
import * as S from './styles'

interface IPieChartProps {
  data: {
    name: string;
    percent: number;
    color: string;
  }[];
}

export const Piechart = ({ data }: IPieChartProps) => {
  return (
    <S.Container>
      <S.LeftSide>
            <h2>Relação</h2>
            <S.LegendContainer>
              {
                data.map((indicator) => (
                  <S.Legend key={indicator.name} color={indicator.color}>
                    <div>{indicator.percent}%</div>
                    <span>{indicator.name}</span>
                  </S.Legend>
                ))
              }
            </S.LegendContainer>
        </S.LeftSide>

        <S.RightSide>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent">
                        {
                            data.map((indicator) => (
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </S.RightSide>

    </S.Container>
  )
}
