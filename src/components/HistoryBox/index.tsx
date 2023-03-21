import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import * as S from './styles';


interface IHistoryBoxProps {
  data: {
    month: string;
    entryAmount: number;
    outputAmount: number;
  }[],
  entryColor: string;
  outputColor: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data, entryColor, outputColor
}) => (
  <S.Container>
    <S.Header>
      <h2>Histórico de saldo</h2>

      <S.LegendContainer>
        <S.Legend color={entryColor}>
          <div></div>
          <span>Entradas</span>
        </S.Legend>

        <S.Legend color={outputColor}>
          <div></div>
          <span>Saídas</span>
        </S.Legend>
      </S.LegendContainer>
    </S.Header>

    <S.ChartContainer>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
          <XAxis dataKey="month" stroke="#cecece" />
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Line
            type="monotone"
            dataKey="entryAmount"
            name="Entradas"
            stroke={entryColor}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="outputAmount"
            name="Saídas"
            stroke={outputColor}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  </S.Container>
)

export default HistoryBox;