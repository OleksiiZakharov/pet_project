import { Col, Row } from 'react-bootstrap';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  return (
    <Row className="justify-content-center">
      <Col xxl={3} xl={4} lg={6} md={6}>
        <LoginForm />
      </Col>
    </Row>
  );
};
