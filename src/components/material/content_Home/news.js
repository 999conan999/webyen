import React, { Component } from 'react';
import './news.css'
import LazyImage from '../../../lib/lazy-image';
import hoder from '../slide/placeHolder.jpg'
export default class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>
        <div className='news-item col-12 col-sm-6 col-xl-4'>
            <div className='card-3 lkx'>
              <div className='img-news'>
                  <a href="#">
                      {/* <img src="https://nestart.vn/wp-content/uploads/2020/07/22-an-to-yen.jpg" width="100%"/> */}
                      <LazyImage
                        srcset={"https://nestart.vn/wp-content/uploads/2019/11/Platium-Box-To-Yen-An-Lien-Fucoida-324x229.png"}
                        src={hoder}
                        width="100%"
                      />
                  </a>
              </div>
              <div className='title-news'>
                <a href='#'>
                  <h3>Celsius bị nhân viên cũ tố cáo gian lận trong vụ kiện cộng hòa xã hội chủ nghĩa Việt Nam độc lập tư dọ hạnh phúc</h3>  
                </a> 
              </div>
            </div>
        </div>

      </React.Fragment>
    );
  }
}

