import React, { Component } from 'react';
import './Home_body.css'
import Slide from '../material/slide/Slide';
import Home_gt1 from '../material/content_Home/Home_gt1';
import Cart_sp from '../material/content_Home/cart_sp';
import News from '../material/content_Home/news';
import {get_icon} from "../../lib/fs"
export default class Home_body extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <main className='mainz'>
        <Slide type="banner-slide-1"/>
        <Home_gt1/>
        <div className='container gt1 wrapcontentHome'>
          <div>
            <h2 className='headhome'><span></span> <b style={{margin:"0px 20px"}}>Sản phẩm nổi bật </b> <span></span></h2>
            <div className='wrap-list'>
              <div className='lis-category'>
                <div className='wraptt'>
                  <span className='title3z'>Tổ yến dinh dưỡng </span>
                </div>
                <div  className='wza'>
                  <Slide type="text-slide"/>
                  <Cart_sp/>
                  <div class="frame">
                    <button class="custom-btn btn-5">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='wrap-list'>
              <div className='lis-category'>
                <div className='wraptt'>
                  <span className='title3z'>Mật ong rừng thiên nhiên</span>
                </div>
                <div  className='wza'>
                  <Slide type="text-slide"/>
                  <Cart_sp/>
                  <div class="frame">
                    <button class="custom-btn btn-5">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className='headhome'><span></span> <b style={{margin:"0px 20px"}}>{get_icon("1star","white","30px")} Kiến thức thú vị {get_icon("1star","white","30px")}</b> <span></span></h2>
            <div className='lis-news row'>
              <News/>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

