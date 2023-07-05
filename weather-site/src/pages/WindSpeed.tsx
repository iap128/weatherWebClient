import { faWind } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WindSpeed = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await axios.get('http://localhost:3306/windSpeed');
        setValue(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchValue();
  }, []);
  return <WeatherCard title='Wind Speed' value={value[0]?.speed} suffix='mph' icon={faWind} />;
};

export default WindSpeed;
