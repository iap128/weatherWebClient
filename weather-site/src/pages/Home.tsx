import { Col, Row } from 'antd';
import Temperature from './Temperature';
import WindSpeed from './WindSpeed';
import GustSpeed from './GustSpeed';
import Pressure from './Pressure';
import WindDirection from './WindDirection';
import GustDirection from './GustDirection';
import LastUpdate from '../components/LastUpdate';
import Humidity from './Humidity';
import Rain from './Rain';

const Home = () => {
  return (
    <div>
      <LastUpdate />
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Temperature />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WindSpeed />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <WindDirection />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Pressure />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <GustSpeed />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <GustDirection />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Humidity />
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Rain />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
