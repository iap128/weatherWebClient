import { FC } from 'react';
import { CardProps } from '../constants/Interfaces';
import { Card, Statistic } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherCard: FC<CardProps> = ({ title, value, suffix, icon }) => {
  return (
    <Card>
      <Statistic
        title={title}
        value={value}
        prefix={<FontAwesomeIcon icon={icon} />}
        suffix={suffix}
      />
    </Card>
  );
};

export default WeatherCard;
