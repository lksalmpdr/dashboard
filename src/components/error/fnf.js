
import React from "react";
import { Row, Col, Card, Button } from 'react-materialize';

const Error_page = () => (
  <Row>
    <Col m={3} s={12}>
    </Col>
    <Col m={8} s={12}>
        <h5>Página não encontrada</h5>
        <Card>
          <Row>
          <p>Desculpe, não achamos sua busca</p>
            <Col s={12} m={12}>
              <Button waves='light' className="right grey darken-2" node='a' href='/'> Home</Button>
            </Col>
          </Row>
        </Card>
    </Col>
  </Row>
);

export default Error_page;