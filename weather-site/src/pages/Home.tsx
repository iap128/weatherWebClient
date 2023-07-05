import { Col, Row } from 'antd';
import WeatherCard from '../components/WeatherCard';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import Temperature from './Temperature';
import WindSpeed from './WindSpeed';
import GustSpeed from './GustSpeed';
import Pressure from './Pressure';

const Home = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Temperature />
        </Col>
        <Col span={8}>
          <WindSpeed />
        </Col>
        <Col span={8}>
          <WeatherCard title='Wind Direction' value='86' suffix='degrees' icon={faCompass} />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Pressure />
        </Col>
        <Col span={8}>
          <GustSpeed />
        </Col>
        <Col span={8}>
          <WeatherCard title='Gust Direction' value='86' suffix='degrees' icon={faCompass} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
