import React, { Component } from 'react';
import './footer.css'
import {get_icon} from '../../lib/fs';
export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
        <React.Fragment>
            <footer id="footerz">
                <div className='bg1'>{get_icon("bg1","white","100%",{transform: 'rotate(180deg)'})}</div>
                
                <div className='content-footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='logoz'>
                                    <div className='icon-contact'>
                                        <img src="http://quatet.langsonweb.com/wp-content/uploads/2020/12/logo.png" alt="alt logo here"/>
                                        <ul className='ulicon'>
                                            <li className="bnb">
                                                <a href='#'>
                                                    {get_icon("facebook","#a81411","15px",{marginRight:"1px"})}
                                                </a>
                                            </li>
                                            <li className="bnb">
                                                <a href='#'>
                                                    {get_icon("instagram","#a81411","15px",{marginRight:"1px"})}
                                                </a>
                                            </li>
                                            <li className="bnb">
                                                <a href='#'>
                                                    {get_icon("youtube","#a81411","15px",{marginRight:"1px"})}
                                                </a>
                                            </li>
                                            <li className="bnb">
                                                <a href='#'>
                                                    {get_icon("ping","#a81411","15px",{marginRight:"1px"})}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <p style={{color:'rgb(244 235 191)',fontSize:'14px'}}><strong>Địa chỉ</strong> : Lầu 7, 40 Phạm Ngọc Thạch, Phường Võ Thị Sáu, Quận 3, Thành Phố Hồ Chí Minh, Việt Nam.</p>

                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>Về nest art</span>
                                    <ul className='listz'>
                                        <li><a href='#'>Câu chuyện về Nest art</a></li>
                                        <li><a href='#'>Triết Lý Sản Phẩm Và Sáng Tạo</a></li>
                                        <li><a href='#'>Cam Kết Chất Lượng Và Giá Trị</a></li>
                                        <li><a href='#'>Đăng ký Cộng tác viên bán hàng</a></li>
                                        <li><a href='#'>Đăng nhập tài khoản Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>CHÍNH SÁCH</span>
                                    <ul className='listz'>
                                        <li><a href='#'>Chính sách vận chuyển</a></li>
                                        <li><a href='#'>Hình thức thanh toán</a></li>
                                        <li><a href='#'>Chính sách bảo hành</a></li>
                                        <li><a href='#'>Chính sách bảo mật</a></li>
                                        <li><a href='#'>Hướng dẫn mua hàng online</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>TUYỂN DỤNG</span>
                                    <ul className='listz'>
                                        <li><a href='#'>Thông tin tuyển dụng</a></li>
                                        <li><a href='#'>Điện thoại: (+84) 28 5447 7886</a></li>
                                        <li><a href='#'>Email: tuyendung@nestart.vn</a></li>
                                        <li><a href='#'>Chính sách bảo mật</a></li>
                                        <li><a href='#'>Danh sách cửa hàng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='container lk textz'>
                        <p>Công ty Cổ phần Nest Art mã số doanh nghiệp 1101826813 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 25/07/2016</p>
                        <p><a href='#'><img width={200} src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"/></a></p>
                    </div>
                    <div className='sol textz'>
                        <p>Nest Art - Thành lập năm 2016. Thiết Kế Web Bởi EPAL Solution.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
  }
}