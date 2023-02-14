import { Col, Row } from 'react-bootstrap';
import { Filters } from '../components/Filters';
import { Items } from '../components/Items';

export const Market = () => {
  return (
    <Row>
      <Col xxl={2} xl={3} md={3}>
        <Filters />
      </Col>
      <Col xxl={10} xl={9} md={9}>
        <Items />
      </Col>
    </Row>
  );
};
