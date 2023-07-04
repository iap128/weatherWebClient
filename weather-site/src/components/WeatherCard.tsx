import { FC } from 'react';
import { CardProps } from '../constants/Interfaces';
import { Card, Statistic } from 'antd';
import { CloudOutlined } from '@ant-design/icons';

const WeatherCard: FC<CardProps> = ({ title, value }) => {
  return (
    <Card>
      <Statistic title={title} value={value} prefix={<CloudOutlined />} />
    </Card>
  );
};

export default WeatherCard;
