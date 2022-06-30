import React, { Component } from 'react';
import './App.css'
// import './components/header/header.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
           <Header/>
          <div style={{height:"500px"}}></div>
           <Footer/>
      </React.Fragment>
    );
  }
}

