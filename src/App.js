import React, { Component } from 'react';

import Header from './components/header/header';
import Rodape from './components/footer/footer';
import Main from './main';


class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Rodape />
      </div>
    );
  }
}

export default App;
