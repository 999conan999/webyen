import React, { Component } from 'react';
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Category_body from './components/body-Category/Category_body';
// import Home_body from './components/body-Home/Home_body';
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
           {/* <Home_body/> */}
           <Category_body/>
           <Footer/>
      </React.Fragment>
    );
  }
}

