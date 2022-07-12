import React, { Component } from 'react';
import './Category_body.css'
import Slide from '../material/slide/Slide';
import Home_gt1 from "../../components/material/content_Home/Home_gt1";
import Card_slide from '../material/contents_category/card_slide';
import {get_icon} from "../../lib/fs"
export default class Category_body extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <main className='mainz'>
          <div>
            <Slide type="banner-slide-2"/>
            <Home_gt1/>
            <p className='headhome'><span></span> <b style={{margin:"0px 20px"}}>Các sản phẩm về tổ yến </b> <span></span></p>
          </div>
          <div className='container'>
            <div className='row'>
               <div className='col-10 test1'>
                 <Card_slide />
               </div>
               <div className='col-2 test2'>
                2222
               </div>
            </div>
          </div>
          {/* <div className='wrap-cate'>
            <div className='container title-cate'>
              <h1>Gia Lai Shop, chuyên sản xuất và phân phối sỉ, lẻ <strong>tổ Yến dinh dưỡng</strong></h1>
              <p><span>{get_icon("5star","white","150px")}</span></p>
            </div>
          </div> */}
      </main>
    );
  }
}

