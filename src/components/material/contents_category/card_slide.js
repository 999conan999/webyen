import React, { Component } from 'react';
import './card_slide.css'
import Slide2 from './slide2';
import {get_star} from "../../../lib/fs"
export default class Card_slide extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className='row blz'>
        <div className='col-12 col-lg-6 card-z1 '>
            <div className='card-sp'>
              <div className='title-sp'>
                  <h3 className='tag'>Tổ yến thô - thu hoạch tại chỗ</h3>
              </div>
              <div className='w-card'>
                <div className='slider-sp'>
                  <Slide2/>
                </div>
                <div className='wrap-content-slide'>
                  <div className='price'>
                    <div>Giá bán: <span className='insz'><ins>1.250.000</ins> ₫</span> / 100g</div>
                    <div className='gtt'>
                      Giá thị trường: <span className='delz'><del>2.250.000 ₫</del></span> / 100g
                    </div>
                    <div className='reviewz'>
                      <div className='rvz'>
                        Đánh giá :<span> 4.5/5</span>
                      </div>
                      <div>
                        { get_star(3.5,18)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mo-ta-sp-slide'>
                  <div className='short-des'>
                  cửa hàng chuyên cung cấp quà tặng, sản phẩm dưỡng chất, đặc sản miền trung như là Yến, mật ong rừng, cafe chồn, rượu nho...v.v. và gồm nhiều món quà tặng ý nghĩa khác đến với tận tay người tiêu dùng. Chắc chắn đây sẽ là một món quà ý nghĩa mà bạn giành cho người thân và gia đình của mình đó nhé!. Ngoài ra, hiện tại có rất nhiều chương trình khuyến mãi ưu đãi dành cho khách hàng, OK! chúng ta sẽ cùng nhau tìm hiểu ngay nào
                  </div>
                </div>
                <div class="frame mgb-20">
                  <button class="custom-btn btn-5">Mua ngay</button>
                </div>
              </div>
            </div>
        </div>
        <div className='col-12 col-lg-6 card-z1 '>
            <div className='card-sp'>
              <div className='title-sp'>
                  <h3 className='tag'>Tổ yến thô - thu hoạch tại chỗ</h3>
              </div>
              <div className='w-card'>
                <div className='slider-sp'>
                  <Slide2/>
                </div>
                <div className='wrap-content-slide'>
                  <div className='price'>
                    <div>Giá bán: <span className='insz'><ins>1.250.000</ins> ₫</span> / 100g</div>
                    <div className='gtt'>
                      Giá thị trường: <span className='delz'><del>2.250.000 ₫</del></span> / 100g
                    </div>
                    <div className='reviewz'>
                      <div className='rvz'>
                        Đánh giá :<span> 4.5/5</span>
                      </div>
                      <div>
                        { get_star(3.5,18)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mo-ta-sp-slide'>
                  <div className='short-des'>
                  cửa hàng chuyên cung cấp quà tặng, sản phẩm dưỡng chất, đặc sản miền trung như là Yến, mật ong rừng, cafe chồn, rượu nho...v.v. và gồm nhiều món quà tặng ý nghĩa khác đến với tận tay người tiêu dùng. Chắc chắn đây sẽ là một món quà ý nghĩa mà bạn giành cho người thân và gia đình của mình đó nhé!. Ngoài ra, hiện tại có rất nhiều chương trình khuyến mãi ưu đãi dành cho khách hàng, OK! chúng ta sẽ cùng nhau tìm hiểu ngay nào
                  </div>
                </div>
                <div class="frame mgb-20">
                  <button class="custom-btn btn-5">Mua ngay</button>
                </div>
              </div>
            </div>
        </div>
        <div className='col-12 col-lg-6 card-z1 '>
            <div className='card-sp'>
              <div className='title-sp'>
                  <h3 className='tag'>Tổ yến thô - thu hoạch tại chỗ</h3>
              </div>
              <div className='w-card'>
                <div className='slider-sp'>
                  <Slide2/>
                </div>
                <div className='wrap-content-slide'>
                  <div className='price'>
                    <div>Giá bán: <span className='insz'><ins>1.250.000</ins> ₫</span> / 100g</div>
                    <div className='gtt'>
                      Giá thị trường: <span className='delz'><del>2.250.000 ₫</del></span> / 100g
                    </div>
                    <div className='reviewz'>
                      <div className='rvz'>
                        Đánh giá :<span> 4.5/5</span>
                      </div>
                      <div>
                        { get_star(3.5,18)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mo-ta-sp-slide'>
                  <div className='short-des'>
                  cửa hàng chuyên cung cấp quà tặng, sản phẩm dưỡng chất, đặc sản miền trung như là Yến, mật ong rừng, cafe chồn, rượu nho...v.v. và gồm nhiều món quà tặng ý nghĩa khác đến với tận tay người tiêu dùng. Chắc chắn đây sẽ là một món quà ý nghĩa mà bạn giành cho người thân và gia đình của mình đó nhé!. Ngoài ra, hiện tại có rất nhiều chương trình khuyến mãi ưu đãi dành cho khách hàng, OK! chúng ta sẽ cùng nhau tìm hiểu ngay nào
                  </div>
                </div>
                <div class="frame mgb-20">
                  <button class="custom-btn btn-5">Mua ngay</button>
                </div>
              </div>
            </div>
        </div>
        <div className='col-12 col-lg-6 card-z1 '>
            <div className='card-sp'>
              <div className='title-sp'>
                  <h3 className='tag'>Tổ yến thô - thu hoạch tại chỗ</h3>
              </div>
              <div className='w-card'>
                <div className='slider-sp'>
                  <Slide2/>
                </div>
                <div className='wrap-content-slide'>
                  <div className='price'>
                    <div>Giá bán: <span className='insz'><ins>1.250.000</ins> ₫</span> / 100g</div>
                    <div className='gtt'>
                      Giá thị trường: <span className='delz'><del>2.250.000 ₫</del></span> / 100g
                    </div>
                    <div className='reviewz'>
                      <div className='rvz'>
                        Đánh giá :<span> 4.5/5</span>
                      </div>
                      <div>
                        { get_star(3.5,18)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mo-ta-sp-slide'>
                  <div className='short-des'>
                  cửa hàng chuyên cung cấp quà tặng, sản phẩm dưỡng chất, đặc sản miền trung như là Yến, mật ong rừng, cafe chồn, rượu nho...v.v. và gồm nhiều món quà tặng ý nghĩa khác đến với tận tay người tiêu dùng. Chắc chắn đây sẽ là một món quà ý nghĩa mà bạn giành cho người thân và gia đình của mình đó nhé!. Ngoài ra, hiện tại có rất nhiều chương trình khuyến mãi ưu đãi dành cho khách hàng, OK! chúng ta sẽ cùng nhau tìm hiểu ngay nào
                  </div>
                </div>
                <div class="frame mgb-20">
                  <button class="custom-btn btn-5">Mua ngay</button>
                </div>
              </div>
            </div>
        </div>

      </div>
    );
  }
  //

}

