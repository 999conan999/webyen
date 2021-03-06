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
                                    <p style={{color:'rgb(244 235 191)',fontSize:'14px'}}><strong>?????a ch???</strong> : L???u 7, 40 Ph???m Ng???c Th???ch, Ph?????ng V?? Th??? S??u, Qu???n 3, Th??nh Ph??? H??? Ch?? Minh, Vi???t Nam.</p>

                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>V??? nest art</span>
                                    <ul className='listz'>
                                        <li><a href='#'>C??u chuy???n v??? Nest art</a></li>
                                        <li><a href='#'>Tri???t L?? S???n Ph???m V?? S??ng T???o</a></li>
                                        <li><a href='#'>Cam K???t Ch???t L?????ng V?? Gi?? Tr???</a></li>
                                        <li><a href='#'>????ng k?? C???ng t??c vi??n b??n h??ng</a></li>
                                        <li><a href='#'>????ng nh???p t??i kho???n Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>CH??NH S??CH</span>
                                    <ul className='listz'>
                                        <li><a href='#'>Ch??nh s??ch v???n chuy???n</a></li>
                                        <li><a href='#'>H??nh th???c thanh to??n</a></li>
                                        <li><a href='#'>Ch??nh s??ch b???o h??nh</a></li>
                                        <li><a href='#'>Ch??nh s??ch b???o m???t</a></li>
                                        <li><a href='#'>H?????ng d???n mua h??ng online</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3'>
                                <div className='aboutz'>
                                    <span className='titlez'>TUY???N D???NG</span>
                                    <ul className='listz'>
                                        <li><a href='#'>Th??ng tin tuy???n d???ng</a></li>
                                        <li><a href='#'>??i???n tho???i: (+84) 28 5447 7886</a></li>
                                        <li><a href='#'>Email: tuyendung@nestart.vn</a></li>
                                        <li><a href='#'>Ch??nh s??ch b???o m???t</a></li>
                                        <li><a href='#'>Danh s??ch c???a h??ng</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='container lk textz'>
                        <p>C??ng ty C??? ph???n Nest Art m?? s??? doanh nghi???p 1101826813 do S??? K??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p ng??y 25/07/2016</p>
                        <p><a href='#'><img width={200} src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"/></a></p>
                    </div>
                    <div className='sol textz'>
                        <p>Nest Art - Th??nh l???p n??m 2016. Thi???t K??? Web B???i EPAL Solution.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
  }
}