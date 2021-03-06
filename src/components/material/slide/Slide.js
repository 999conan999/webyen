import React, { Component } from 'react';
import Slider from "react-slick";
import './slide.css'
import LazyImage from './../../../lib/lazy-image'
import hoder from './placeHolder.jpg'
const slider_data=[
    {
      img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-gia-go-1m2-300x300.jpg",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    {
      img_url:"https://nestart.vn/wp-content/uploads/2020/08/doi-tac-2.png",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    {
      img_url:"https://nestart.vn/wp-content/uploads/2020/08/doi-tac-3.png",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    {
      img_url:"https://nestart.vn/wp-content/uploads/2020/08/doi-tac-4.png",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    {
      img_url:"https://nestart.vn/wp-content/uploads/2020/08/doi-tac-6.jpg",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    {
      img_url:"https://nestart.vn/wp-content/uploads/2020/08/doi-tac-9.png",
      html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p></div>'
    },
    // {
    //   img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-nam-tinh-mau-den-An-Binh-300x300.jpg",
    //   html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p><a hre"#"><div class="frame"><button class="custom-btn btn-5">Read More</button></div></a></div>'
    // },
    // {
    //   img_url:"https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-1m8x2m-trang-den-300x300.jpg",
    //   html:'<div style=" top: 0px; left: 0px; "><p><strong>Hỗ trợ giảm giá nếu khách hàng mua yến thô:</strong></p><a hre"#"><div class="frame"><button class="custom-btn btn-5">Read More</button></div></a></div>'
    // },

  ]
export default class Slide extends Component {
  constructor (props) {
    super(props)
    this.state = {
        type:"banner-slide-1",// banner-slide-1,banner-slide-2, text-slide , product,  ,....v.v.
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
      if(this.container!=undefined)  this.widthz=this.container.offsetWidth
      if(this.container2!=undefined) this.heightz=this.container2.offsetWidth/3.5
    }catch(e){console.log("zz")}
  }
  show_img_large_product=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
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
            <div   dangerouslySetInnerHTML={{__html: e.html}}/>
          </div>
        )
      });
      return rs;
    }
  }
  show_img_small_product=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        rs.push(
          <div className='handle-1' key={i}>
            {/* <img src={e.img_url} width={'63px'}/> */}
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
  show_img_slide_full_width=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        //
        rs.push(
          <div className='handle' key={i}>
            <a>
              {/* <img src={e.img_url} width={'100%'}/> */}
              <LazyImage
                srcset={e.img_url}
                src={hoder}
                width="100%"
              />
            </a>
            <div dangerouslySetInnerHTML={{__html: e.html}}/>
          </div>
        )
      });
      return rs;
    }
  }
  show_img_slide_midle_width=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        //
        rs.push(
          <div className='handle' key={i}>
            <a>
              <LazyImage
                srcset={e.img_url}
                src={hoder}
                width="100%"
              />
            </a>
            <div   dangerouslySetInnerHTML={{__html: e.html}}/>
          </div>
        )
      });
      return rs;
    }
  }
  show_img_text_slide=(items)=>{
    if(items!=undefined){
      let rs=[];
      items.forEach((e,i) => {
        //
        rs.push(
          <div className='handle slide-text'  key={i}>
            <div className='card-3'>
              <a>
                <img src={e.img_url} width={'100%'} height={"auto"}/>
              </a>
            <div className='add-text'   dangerouslySetInnerHTML={{__html: e.html}}/>
            </div>
          </div>
        )
      });
      return rs;
    }
  }

  set_up_slide=(list_img,type)=>{
    let img_list=list_img;
    if(type==="product") {
      let slidesToShow=5;
      if(img_list!=undefined){
        if(img_list.length<5) slidesToShow=img_list.length; 
      }
      const settings_product={
        lazyLoad: false,
      }
      return  (
      <div className='slider-z'>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            arrows={false}
            infinite={false}
            // dots={true}
            {...settings_product}
          >
            {this.show_img_large_product(img_list)}
        </Slider>
        <div className='wrap-img-small'>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={slidesToShow}
            swipeToSlide={true}
            focusOnSelect={true}
            variableWidth={true}
            infinite={false}
            {...settings_product}
          >
            {this.show_img_small_product(img_list)}
          </Slider>
          </div>
      </div>)
    }else if(type==="banner-slide-1"){
      const settings_slide_full_width={
        lazyLoad: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        fade: true,
      }
      return  (
        <div className='slider-z'  ref={el => (this.container2 = el)} style={{height:this.heightz}}>
          {/* {slider_data.title!=""&&<div className='wraptt'><span className='title3z'>{slider_data.title}</span></div>} */}
          <Slider
              arrows={false}
              infinite={true}
              dots={true}
              {...settings_slide_full_width}
            >
              {this.show_img_slide_full_width(img_list)}
          </Slider>
        </div>)
    }else if(type==="banner-slide-2"){
      const settings_slide_midle_width={
        lazyLoad: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
      }
      return  (
        <div className='slider-z'  ref={el => (this.container2 = el)} style={{height:this.heightz}}>
          {/* {slider_data.title!=""&&<div className='wraptt'><span className='title3z'>{slider_data.title}</span></div>} */}
          <Slider
              arrows={false}
              infinite={true}
              dots={true}
              {...settings_slide_midle_width}
            >
              {this.show_img_slide_midle_width(img_list)}
          </Slider>
        </div>)
    }else if(type==="text-slide"){
      const settings_text_slide={
        lazyLoad: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: img_list.length>=5?5:img_list.length,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: img_list.length>=3?3:img_list.length,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: img_list.length>=2?2:img_list.length,
            }
          },
          {
            breakpoint: 572,
            settings: {
              slidesToShow: img_list.length>=1?1:img_list.length,
            }
          },
        ]
      }
      return  (
        <div className='slider-z'>
          {/* {slider_data.title!=""&&<div className='wraptt'><span className='title3z'>{slider_data.title}</span></div>} */}
          <Slider
              arrows={false}
              infinite={true}
              dots={false}
              {...settings_text_slide}
            >
              {this.show_img_text_slide(img_list)}
          </Slider>
        </div>)
    }
  }
  render() {
    let data=slider_data//[todo]
    let {type}=this.props;//[todo]
    
    //
    let html='<div style=" position: absolute; top: 0px; left: 0px; "><a hre"#"><div class="frame"><button class="custom-btn btn-11">Read More</button></div></a></div>'
    if(type==="banner-slide-1" ||type==="banner-slide-2") data=[  
    {
      img_url:"http://quatet.langsonweb.com/wp-content/uploads/2020/12/slider_1a.jpg",
      html:html
    },
    {
      img_url:"http://quatet.langsonweb.com/wp-content/uploads/2020/12/slider_1a.jpg",
      html:html
    },
    {
      img_url:"http://quatet.langsonweb.com/wp-content/uploads/2020/12/slider_1a.jpg",
      html:html
    },
    // {
    //   img_url:"https://nestart.vn/wp-content/uploads/2020/09/59-tac-dung-to-yen-an-lien.jpg",
    //   html:html
    // },
    // {
    //   img_url:"https://nestart.vn/wp-content/uploads/2021/03/78-mat-na-yen-vang-nest-art.jpg",
    //   html:html
    // },
    ]
    
    return (
      <React.Fragment>
        {this.set_up_slide(data,type)}
      </React.Fragment>
    );
  }
}

