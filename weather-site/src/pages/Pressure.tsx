import { faGauge } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pressure = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await axios.get('http://localhost:3306/pressure');
        setValue(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchValue();
  }, []);
  return <WeatherCard title='Pressure' value={value[0]?.pressure} suffix='inHg' icon={faGauge} />;
};

export default Pressure;
