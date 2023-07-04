import { Col, Row } from 'antd';
import WeatherCard from '../components/WeatherCard';
import { faCompass, faGauge, faWind } from '@fortawesome/free-solid-svg-icons';
import Temperature from './Temperature';

const Home = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Temperature />
        </Col>
        <Col span={8}>
          <WeatherCard title='Wind Speed' value='86' suffix='mph' icon={faWind} />
        </Col>
        <Col span={8}>
          <WeatherCard title='Wind Direction' value='86' suffix='degrees' icon={faCompass} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <WeatherCard title='Pressure' value='86' suffix='inHg' icon={faGauge} />
        </Col>
        <Col span={8}>
          <WeatherCard title='Gust Speed' value='86' suffix='mph' icon={faWind} />
        </Col>
        <Col span={8}>
          <WeatherCard title='Gust Direction' value='86' suffix='degrees' icon={faCompass} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
