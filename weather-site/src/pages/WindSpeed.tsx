import { faWind } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';
import { mphToKnots } from '../constants/Helpers';

const WindSpeed = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('windSpeed');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Wind Speed'
      value={String(mphToKnots(value[0]?.speed))}
      suffix='knots'
      icon={faWind}
      tooltip={value[0]?.speed + ' mph'}
    />
  );
};

export default WindSpeed;
