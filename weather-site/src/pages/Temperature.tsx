import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';

const Temperature = () => {
  const [value, setValue] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCardData('temperature');
      setValue(data);
    };

    getData();
  }, []);
  return (
    <WeatherCard
      title='Temperature'
      value={value[0]?.temp}
      suffix='f'
      icon={faTemperatureThreeQuarters}
      hasGraph={{
        dataKey: 'temp',
        type1Hr: 'temperature1hr',
        type12Hr: 'temperature12hr',
        type24Hr: 'temperature24hr',
      }}
    />
  );
};

export default Temperature;
