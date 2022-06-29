import React, { Component } from 'react';
import './App.css'
import Header from './components/header/Header';
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
      </React.Fragment>
    );
  }
}

