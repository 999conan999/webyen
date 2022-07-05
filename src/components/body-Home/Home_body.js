import React, { Component } from 'react';
import './Home_body.css'
import Slide from '../material/slide/Slide';
import Home_gt1 from '../material/content_Home/Home_gt1';
export default class Home_body extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <Slide type="banner-slide-1"/>
        <Home_gt1/>
        <div className='container gt1 wrapcontentHome'>
          <h2>Các sản phẩm của chúng tôi</h2>
          <Slide type="text-slide"/>
          
        </div>
      </React.Fragment>
    );
  }
}

