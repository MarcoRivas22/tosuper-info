import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Body from './components/BodyComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component{

  render() {
    return ( 
      <div className="centrado">
      <Header />
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;
