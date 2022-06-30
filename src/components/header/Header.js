import React, { Component } from 'react';
import './header.css'
import {get_icon} from '../../lib/fs';
export default class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu_mb:false
    }
  }
  render() {
    let {menu_mb}=this.state;
    return (
      <React.Fragment>
          <header id="header" className="header header-wrapper" >
              <div className='colorz header-top'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-lg-6 pd8'>

                      <p className="zxs">
                        {/* {get_icon("volume","#f1d800")} */}
                        Chào mừng bạn đến với nội thất An Bình
                        <a href="https://nestart.vn/qua-tet-yen-sao-2021/" className="text-bold">Xem ngay</a> 
                      </p>

                    </div>
                    <div className='col-lg-3 hd992 pd8'>
                      <p className="zxs tal-r">
                        {get_icon("phone","white","16px",{marginRight:"5px",transform:' rotate(-45deg)',marginBottom:"5px"})}
                        Hotline: 0963 226 771
                      </p>
                    </div>
                    <div className='col-lg-3 hd992 pd8'>
                       <p className="zxs cshv tal-r">
                       {get_icon("user","white","16px",{marginRight:"5px",marginBottom:"5px"})}
                        Đăng nhập/Đăng ký
                       </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='header-main' style={{backgroundImage:"url(http://quatet.langsonweb.com/wp-content/uploads/2020/12/bg-header.jpg)"}}>
              {/* <div className='header-main' style={{backgroundImage:"url(https://yensaominhquang.com/styles/website/images/bg-header.jpg)"}}> */}
                <div className='icon-menu' onClick={()=>this.setState({menu_mb:!menu_mb})}>
                  {get_icon("menu","rgb(249 211 211)","32px",{marginRight:"5px",marginBottom:"5px"})}
                </div>

                <div className='icon-cart'>
                  <a href='#' style={{textDecoration:"none"}}>
                    <div className='wrap-icon-cart'>
                      {get_icon("cart","#ffd41b","32px",{marginRight:"5px",marginBottom:"5px"})}<span className='gh'>Giỏ hàng</span><span className='nuvbe'>(0)</span>
                    </div>
                  </a>
                </div>
                <div className='container setz'>
                  <div className='row'>
                    <div className='col-12 col-lg-3 brz'>
                      <div className='logo'>
                        <a href="#">
                          <img src="http://quatet.langsonweb.com/wp-content/uploads/2020/12/logo.png" className="header-logo-dark" alt="alt logo here"/>
                        </a>
                      </div>
                    </div>
                    <div className='col-12 col-lg-6 seah'>
                      <form>
                        <div className="input-group">
                          <input type="search" name="s" placeholder="Tìm kiếm..." aria-describedby="button-addon5" className="form-control" autoComplete="off"/>
                          <div className="input-group-append">
                            <button id="button-addon5" type="submit" className="btn brs" style={{background:"#ff9800"}}>
                            {get_icon("search","white","16px")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className='colorz header-bottom colorz'>
                <div className='container wr-menu '>
                  <div className={menu_mb?'set-menu':'set-menu menu-mb'}>
                      <div className='menu'>
                        <ul>
                          <li>
                            <a onClick={()=>console.log("a")}>Trang chủ</a>
                          </li>
                          <li>
                            <a>Tài khoản
                              <span className='newz'>
                                {get_icon("new","white","39px",{marginLeft:"12px",marginBottom:"4px"})}
                              </span>
                            </a>
                          </li>
                          <li>
                              <a>Về Nest ART 
                              </a>
                              <ul>
                                <li><a>Web cuồi</a></li>
                              </ul>
                          </li>
                          <li>
                            <a>Bộ quà tặng</a>
                          </li>
                          <li>
                            <a>Danh mục sản phẩm</a>
                            <ul>
                              <li><a>Danh mục 1 toi muốn nó dài thêm 
                              <span className='newz'>
                                {get_icon("gift","white","20px",{marginLeft:"12px",marginBottom:"4px"})}
                              </span>
                              </a></li>
                              <li><a>Danh mục 2</a></li>
                              <li><a>Danh mục 3</a></li>
                              <li><a>Danh mục 4 ngắn hơn</a></li>
                            </ul>
                          </li>
                         
                        </ul>
                      </div>
                      <div className='dimmer'  onClick={()=>this.setState({menu_mb:!menu_mb})}><span>x</span></div>
                  </div>
                </div>
              </div>
          </header>
          <div style={{height:"1000px"}}></div>
      </React.Fragment>
    );
  }
}

