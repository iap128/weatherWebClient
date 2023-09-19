import { faWind } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';
import { mphToKnots } from '../constants/Helpers';

const GustSpeed = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('gustSpeed');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Gust Speed'
      value={String(mphToKnots(value[0]?.speed))}
      suffix='knots'
      icon={faWind}
      tooltip={value[0]?.speed + ' mph'}
      hasGraph={{
        dataKey: 'speed',
        type1Hr: 'gustSpeed1hr',
        type12Hr: 'gustSpeed12hr',
        type24Hr: '',
      }}
    />
  );
};

export default GustSpeed;
