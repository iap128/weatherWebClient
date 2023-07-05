import { faGauge } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const Pressure = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('pressure');
      setValue(data);
    };

    getData();
  }, []);
  return <WeatherCard title='Pressure' value={value[0]?.pressure} suffix='inHg' icon={faGauge} />;
};

export default Pressure;
