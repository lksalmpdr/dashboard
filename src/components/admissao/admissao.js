// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, TextInput, Button } from 'react-materialize';


const Contact = () => (
  <Row>
    <Col m={3} s={12}>
    </Col>
    <Col m={8} s={12}>
      <h5>Contato</h5>
      <Card>
        <Row>
        <TextInput placeholder="email@servidor.com" email validate label="E-mail"  s={12} />
        <TextInput placeholder="Sua mensagem aqui..." validade label="Mensagem"  s={12} />
        <Col s={12} m={12}>
          <Button waves='light' className="right grey darken-2">Enviar</Button>
        </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

export default Contact;