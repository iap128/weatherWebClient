import { faWind } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const WindSpeed = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('windSpeed');
      setValue(data);
    };

    getData();
  }, []);
  return <WeatherCard title='Wind Speed' value={value[0]?.speed} suffix='mph' icon={faWind} />;
};

export default WindSpeed;
