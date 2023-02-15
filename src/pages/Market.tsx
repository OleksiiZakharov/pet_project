import { Col, Row } from 'react-bootstrap';
import { Filters } from '../components/Filters';
import { Items } from '../components/Items';

export const Market = () => {
  return (
    <Row>
      <Col md={4} lg={3} xxl={2}>
        <Filters />
      </Col>
      <Col md={8} lg={9} xxl={10}>
        <Items />
      </Col>
    </Row>
  );
};
