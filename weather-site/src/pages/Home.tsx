import { Col, Row } from 'antd';
import Temperature from './Temperature';
import WindSpeed from './WindSpeed';
import GustSpeed from './GustSpeed';
import Pressure from './Pressure';
import WindDirection from './WindDirection';
import GustDirection from './GustDirection';

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
          <WindDirection />
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
          <GustDirection />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
