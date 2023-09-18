import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
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
  return <WeatherCard title='Rain' value={value[0]?.rain} suffix='in' icon={faCloudRain} />;
};

export default Rain;
