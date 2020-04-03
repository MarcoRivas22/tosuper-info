import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Body from './components/BodyComponent';
import './App.css';

class App extends Component{

  render() {
    return ( 
      <>
      <Header />
      <Body />
      </>
    );
  }
}

export default App;
