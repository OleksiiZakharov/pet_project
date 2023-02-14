import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RegistrationForm } from '../components/RegistrationForm';

export const Registration = () => {
  return (
    <Row className="justify-content-center">
      <Col xxl={3} xl={4} lg={6} md={6}>
        <RegistrationForm />
      </Col>
    </Row>
  );
};
