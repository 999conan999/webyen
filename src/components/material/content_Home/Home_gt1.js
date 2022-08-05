import React, { Component } from 'react';
import "./home_gt1.css"
import {get_icon} from"./../../../lib/fs";
import LazyImage from './../../../lib/lazy-image';
import hoder from '../slide/placeHolder.jpg'
export default class Home_gt1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='container gt1'>
          <div className='wrap-gt1'>
            <h1>Gia Lai Shop, Chuyên cung cấp các đặc sản làm quà tặng, chất lượng cao</h1>
            <p><span>{get_icon("5star","white","150px")}</span></p>
            <blockquote>
              <p><strong>Gia Lai Shop</strong>, cửa hàng chuyên cung cấp quà tặng, sản phẩm dưỡng chất, đặc sản miền trung như là Yến, mật ong rừng, cafe chồn, rượu nho...v.v. và gồm nhiều món quà tặng ý nghĩa khác đến với tận tay người tiêu dùng. <span style={{color:'green'}}>Chắc chắn đây sẽ là một món quà ý nghĩa mà bạn giành cho người thân và gia đình của mình đó nhé!</span>. Ngoài ra, hiện tại có rất nhiều chương trình khuyến mãi ưu đãi dành cho khách hàng, OK! chúng ta sẽ cùng nhau tìm hiểu ngay nào.</p>
            </blockquote>
          </div>
          <div className='row'>
            <div className='col-12 col-sm-6 mgb-8 bordz'>
              {/* <img width="100%" src="http://quatet.langsonweb.com/wp-content/uploads/2020/12/banner_1.png" alt=""/> */}
              <LazyImage
                srcset={"http://quatet.langsonweb.com/wp-content/uploads/2020/12/banner_1.png"}
                src={hoder}
                width="100%"
              />
            </div>
            <div className='col-12 col-sm-6 mgb-8 bordz'>
              {/* <img width="100%" src="http://quatet.langsonweb.com/wp-content/uploads/2020/12/banner_2.png" alt=""/> */}
              <LazyImage
                srcset={"http://quatet.langsonweb.com/wp-content/uploads/2020/12/banner_2.png"}
                src={hoder}
                width="100%"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

