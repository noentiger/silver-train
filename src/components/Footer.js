import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './Footer.css';

const Footer = () => (
  <Row className="footer" bottom="xs" center="xs">
    <Col xs={10}>
      <small>© {new Date().getFullYear()} Forever Studio</small>
    </Col>
  </Row>
);

export default Footer;
