import React, { Component } from 'react';
import Slider from "react-slick";
import './slide2.css'
import LazyImage from '../../../lib/lazy-image';
import hoder from '../../material/slide/placeHolder.jpg'
 // import {get_icon} from "../../lib/fs"
 const slider_data=[
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-cao-cap-mau-trang-dep-nhat.jpg",
    html_mess:'<div style="text-align: center; margin-bottom:12px"><button class="custom-btn btn-15"><span>Read More</span></button></div>',
    is_text:false
  },
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-don-Hoang-Gia-mau-HG02.jpg",
    html_mess:'Hộp táo đỏ + hộp đường phèn + giảm giá ưu đãi khi mua yến kèm theo ngủ cốc giá rẻ',
    is_text:true
  },
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-sat-don-Hoang-Gia-mau-HG02-h2.jpg",
    html_mess:'',
    is_text:false
  },
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-hoang-gia-hcm-noi-that-an-binh-1.jpg",
    html_mess:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>',
    is_text:false
  },
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2022/06/giuong-sat-my-thuat-hg01.jpg",
    html_mess:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>',
    is_text:false
  },
  {
    img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-gia-go-an-binh-1.jpg",
    html_mess:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>',
    is_text:false
  },
  // {
  //   img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-nam-tinh-mau-den-An-Binh-300x300.jpg",
  //   html_mess:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p><a hre"#"><div class="frame"><button class="custom-btn btn-5">Read More</button></div></a></div>'
  // },
  // {
  //   img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-1m8x2m-trang-den-300x300.jpg",
  //   html_mess:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p><a hre"#"><div class="frame"><button class="custom-btn btn-5">Read More</button></div></a></div>'
  // },

]
export default class Slide2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
        nav1: null,
        nav2: null
    }
  }
  componentDidMount(){
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    })
    try{
     this.widthz=this.container.offsetWidth
    }catch(e){}
  }
  //
  show_img_large=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        let title=e;
        //
        let show_mess='';
        if(title.html_mess!=""&&title.html_mess!=undefined){
          if(title.is_text){
            show_mess=<div className='messz' >
              <p className='nonehtml' >*{title.html_mess}</p>
            </div>  
          }else{
            show_mess=<div className='messz' >
              <div style={{position:"relative"}}  dangerouslySetInnerHTML={{__html: e.html_mess}} >

              </div>
          </div>  
          }
        }
        //
        rs.push(
          <div className='handle'  key={i}  ref={el => (this.container = el)}>
            <a>
              {/* <img src={e.img_url} width={'100%'}/> */}
              <LazyImage
                srcset={e.img_url}
                src={hoder}
                width="100%"
                height={this.widthz}
              />
            </a>
            {show_mess}
          </div>
        )
      });
      return rs;
    }
  }
  //
  show_img_small=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        rs.push(
          <div className='handle-1' key={i}>
            <LazyImage
                srcset={e.img_url}
                src={hoder}
                width="63"
                height="63"
              />

          </div>
        )
      });
      return rs;
    }
  }
  //
  render() {
    let img_list=slider_data;//[todo]
    let slidesToShow=5;
    if(img_list!=undefined){
      if(img_list.length<5) slidesToShow=img_list.length; 
    }
    const settings={
      lazyLoad: false,
      // autoplay: true,
      // speed: 1000,
      // autoplaySpeed: 5000,
    }
    return (
        <React.Fragment>  
            <div className='slider-z2'>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}
                    infinite={false}
                    {...settings}
                >
                    {this.show_img_large(img_list)}
                </Slider>
                {/*  */}
                <div className='wrap-img-small'>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={slidesToShow}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        variableWidth={true}
                        infinite={false}
                        arrows={false}
                        {...settings}
                    >
                        {this.show_img_small(img_list)}
                    </Slider>
                </div>
            </div>
    </React.Fragment>
    );
  }
}

