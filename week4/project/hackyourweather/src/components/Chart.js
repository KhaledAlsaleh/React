import { Link } from 'react-router-dom';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const Chart = ({ chartData }) => {
  return (
    <>
      <ResponsiveContainer width='80%' height={500} className='chart'>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#245187' stopOpacity={0.4}></stop>
              <stop offset='75%' stopColor='#245187' stopOpacity={0.05}></stop>
            </linearGradient>
          </defs>
          <Area dataKey='temp' stroke='#245187' fill='url(#color)' />
          <XAxis dataKey='date' axisLine={false} tickLine={false} />
          <YAxis
            dataKey='temp'
            axisLine={false}
            tickLine={false}
            tickCount={6}
            tickFormatter={(number) => `${number.toFixed(2)}`}
          />
          <Tooltip />
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
      <Link className='backHome' to='/'>
        Back Home
      </Link>
    </>
  );
};

export default Chart;
