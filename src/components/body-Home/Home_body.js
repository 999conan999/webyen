import React, { Component } from 'react';
import './Home_body.css'
import Slide from '../material/slide/Slide';
import Contents from '../material/content/Contents';
export default class Home_body extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <Slide/>
        <Contents/>
      </React.Fragment>
    );
  }
}

