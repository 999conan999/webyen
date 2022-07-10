import React, { Component } from 'react';
import './cart_sp.css'
import {get_star} from "../../../lib/fs"
import LazyImage from '../../../lib/lazy-image';
import hoder from '../slide/placeHolder.jpg'
export default class Cart_sp extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <ul className='cart-w row'>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span>
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      {/* <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span> */}
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      {/* <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span> */}
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span>
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span>
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      <span className='mtn'>Hộp táo đỏ + hộp đường phèn</span>
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>
            <li className='lza col-6 col-md-4 col-xl-3'>
                <a className='card-3' href='#'>
                    <div className='imgz-cart'>
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                      <span className='mtn'>Hộp táo đỏ + hộp đường phèn + giảm giá ưu đãi khi mua yến kèm theo ngủ cốc giá rẻ</span>
                    </div>
                    <h3>Tổ yến ăn liền Fucoidan 16g cộng hòa xã hội chủ nghãi việt anm</h3>
                    <div>
                      <del className='del-cost costz'>570.000 đ</del>
                      <ins className='ins-cost costz'>170.000 đ</ins>
                    </div>
                    <div className='rating'>
                      {get_star(5)}
                    </div>
                </a>
            </li>


       
        </ul>
      </React.Fragment>
    );
  }
}

