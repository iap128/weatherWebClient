import { FC, useEffect, useState } from 'react';
import { CardProps } from '../constants/Interfaces';
import WeatherCard from '../components/WeatherCard';
import axios from 'axios';

interface Props {
  dataType: string;
  cardInfo: CardProps;
}

const CardProvider: FC<Props> = ({ dataType, cardInfo }) => {
  const [value, setValue] = useState<any>([]);

  const parseData = (data: [any]): string => {
    console.log(data);
    const singleItemData = data[0];

    switch (dataType) {
      case 'temperature':
        return singleItemData.temp;
      case 'pressure':
        return singleItemData.pressure;
    }

    return '';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3306/${dataType}`);
        setValue(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <WeatherCard
      title={cardInfo.title}
      value={parseData(value)}
      suffix={cardInfo.suffix}
      icon={cardInfo.icon}
    />
  );
};

export default CardProvider;
