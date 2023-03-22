import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import * as S from './styles';

interface IBarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string
  }[],
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => (
  <S.Container>
    <S.LeftSide>
      <h2>{title}</h2>

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
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {
              data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  fill={indicator.color}
                  cursor="pointer"
                />
              ))
            }
          </Bar>
          <Tooltip
            cursor={{ fill: 'none' }}
            formatter={(value) => formatCurrency(Number(value))}
          />
        </BarChart>
      </ResponsiveContainer>
    </S.RightSide>
  </S.Container>
);

export default BarChartBox;