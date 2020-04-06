import React from 'react';

import Home from './components/home/home';
import Admissao from './components/admissao/admissao';
import ErrorPage from './components/error/fnf';

import { Container } from 'react-materialize';

import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Container>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/admissao' component={ Admissao }></Route>
            <Route component={ErrorPage}/>
        </Switch>
    </Container>
);

export default Main;