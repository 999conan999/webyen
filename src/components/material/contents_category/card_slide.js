import React, { Component } from 'react';
import './card_slide.css'
import Slide2 from './slide2';
 // import {get_icon} from "../../lib/fs"
export default class Card_slide extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-6'>
            <div className='card-sp'>
              <div className='title-sp'>
                {/* <span>1</span> */}
                <h3 className='tag'>Tổ yến thô - thu hoạch tại chỗ</h3>
              </div>
              <div className='slider-sp'>
                <Slide2/>
              </div>
              <div className='lien-he-sp'>
                lien he sp
              </div>
              <div className='mo-ta-sp-slide'>
                mo ta sp slide
              </div>
            </div>
        </div>
        <div className='col-6'>2222</div>
      </div>
    );
  }
  //

}

