import { FC } from 'react';
import { CardProps } from '../constants/Interfaces';
import { Button, Card, Statistic, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InfoCircleOutlined } from '@ant-design/icons';

const WeatherCard: FC<CardProps> = ({ title, value, suffix, icon, tooltip }) => {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Statistic
          title={title}
          value={value}
          prefix={<FontAwesomeIcon icon={icon} />}
          suffix={suffix}
          precision={2}
        />
        {tooltip && (
          <Tooltip title={tooltip}>
            <Button icon={<InfoCircleOutlined />} type='text' />
          </Tooltip>
        )}
      </div>
    </Card>
  );
};

export default WeatherCard;
