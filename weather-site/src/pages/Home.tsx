import { Col, Row } from 'antd';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <WeatherCard title='Temperature' value='86' />
      </Col>
      <Col span={8}>
        <WeatherCard title='Temperature' value='86' />
      </Col>
      <Col span={8}>
        <WeatherCard title='Temperature' value='86' />
      </Col>
    </Row>
  );
};

export default Home;
