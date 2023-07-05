import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Temperature = () => {
  const [temp, setTemp] = useState<any>([]);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await axios.get('http://localhost:3306/temperature');
        setTemp(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchValue();
  }, []);
  return (
    <WeatherCard
      title='Temperature'
      value={temp[0]?.temp}
      suffix='f'
      icon={faTemperatureThreeQuarters}
    />
  );
};

export default Temperature;
