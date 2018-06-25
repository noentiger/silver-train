import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Nav from './Nav';
import Brand from './Brand';
import './Header.css';

const Header = () => (
  <Row className="header" center="xs">
    <Col xs={10}>
      <Row middle="xs">
        <Col xs={12} sm={6}>
          <Brand />
        </Col>
        <Col xs={12} sm={6} className="text-right">
          <Row middle="xs" end="sm" start="xs">
            <Col>
              <Nav />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Header;
