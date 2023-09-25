import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const Rain = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('rain');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Rain'
      value={value[0]?.quantity}
      suffix='in'
      icon={faDroplet}
      tooltip='Accumulated rainfall in the past 60 min'
    />
  );
};

export default Rain;
