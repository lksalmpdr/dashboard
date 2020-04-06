import React from 'react';

import { Row, Col, Card } from 'react-materialize';

const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img" />
                { props.nome }
            </Col>

            <Col s={10} m={10}>
                <p><b> { props.titulo } em <span className="grey darken-2 white-text"> { props.empresa } </span> </b></p>
                <p> { props.descricao } </p>
            </Col>
        </Row>
    </Card>
);

export default Experience;