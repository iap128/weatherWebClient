import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

const WindDirection = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('windDirection');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Wind Direction'
      value={value[0]?.direction}
      suffix='degrees'
      icon={faCompass}
    />
  );
};

export default WindDirection;
