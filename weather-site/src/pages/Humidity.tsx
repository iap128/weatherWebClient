import { faPercent } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const Humidity = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('humidity');
      setValue(data);
    };

    getData();
  }, []);
  return <WeatherCard title='Humidity' value={value[0]?.humidity} suffix='%' icon={faPercent} />;
};

export default Humidity;
