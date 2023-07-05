import { faCompass } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const GustDirection = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('gustDirection');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Gust Direction'
      value={value[0]?.direction}
      suffix='degrees'
      icon={faCompass}
    />
  );
};

export default GustDirection;
