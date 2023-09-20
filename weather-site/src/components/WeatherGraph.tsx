import { Radio } from 'antd';
import { FC, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import type { RadioChangeEvent } from 'antd';
import { GraphProps } from '../constants/Interfaces';
import { fetchCardData } from '../constants/CardProvider';
import { useEffectOnce } from 'usehooks-ts';

const radioOptions = [
  { label: '1 Hour', value: 1 },
  { label: '12 Hours', value: 12 },
  { label: '24 Hours', value: 24 },
];

const WeatherGraph: FC<GraphProps> = ({ dataKey, type1Hr, type12Hr, type24Hr }) => {
  const [radioValue, setRadioValue] = useState(1);
  const [value, setValue] = useState<any>([]);

  const onRadioChange = ({ target: { value } }: RadioChangeEvent) => {
    setRadioValue(value);
    getData(value);
  };

  const valueToQuery = (value: number): string => {
    switch (value) {
      case 1:
        return type1Hr;
      case 12:
        return type12Hr;
      case 24:
        return type24Hr;
      default:
        return '';
    }
  };

  const getData = async (value: number) => {
    const queryType = valueToQuery(value);
    const data = await fetchCardData(queryType);
    setValue(data);
  };

  useEffectOnce(() => {
    getData(1);
  });

  return (
    <div>
      <Radio.Group
        buttonStyle='solid'
        optionType='button'
        options={radioOptions}
        value={radioValue}
        onChange={onRadioChange}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      />
      <AreaChart
        width={500}
        height={400}
        data={value}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey={dataKey} stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
    </div>
  );
};

export default WeatherGraph;
