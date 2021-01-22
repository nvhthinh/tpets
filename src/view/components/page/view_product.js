// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import './../../lib/view_product.css';

import Vp1 from "../../lib/pic/vp1.jpg";
import Vp2 from "../../lib/pic/vp2.jpg";
import Vp3 from "../../lib/pic/vp3.jpg";
import Vp4 from "../../lib/pic/vp4.jpg";
import Vp5 from "../../lib/pic/vp5.jpg";
import Pr1 from "../../lib/pic/pr1.jpg";
import Pr2 from "../../lib/pic/pr2.jpg";
import User from "../../lib/pic/user.png";

export default class ViewProduct extends Component {
    render() {
        return (
            // {/* content, include product and category */}
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
            {/* content, prduct sale of */}
            <div className="news">
                <div className="container">
                <div className="bg_div" style={{padding: '1em 0'}}>
                    <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1"><img src={Vp1} /></div>
                            <div className="tab-pane" id="pic-2"><img src={Vp2} /></div>
                            <div className="tab-pane" id="pic-3"><img src={Vp3} /></div>
                            <div className="tab-pane" id="pic-4"><img src={Vp4} /></div>
                            <div className="tab-pane" id="pic-5"><img src={Vp5} /></div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs">
                            <li className="active">
                            <a data-target="#pic-1" data-toggle="tab"><img src={Vp1} /></a>
                            </li>
                            <li>
                            <a data-target="#pic-2" data-toggle="tab"><img src={Vp2} /></a>
                            </li>
                            <li>
                            <a data-target="#pic-3" data-toggle="tab"><img src={Vp3} /></a>
                            </li>
                            <li>
                            <a data-target="#pic-4" data-toggle="tab"><img src={Vp4} /></a>
                            </li>
                            <li>
                            <a data-target="#pic-5" data-toggle="tab"><img src={Vp5} /></a>
                            </li>
                        </ul>
                        </div>
                        <div className="details col-md-6">
                        <h3 className="product-title">quần áo mèo thú cưng Áo Len Tai Thỏ Dễ Thương Cho Mèo Cưng</h3>
                        <div className="rating">
                            <div className="stars">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star" />
                            </div>
                            <span className="review-no">41 reviews</span>
                        </div>
                        <p className="product-description"> Màu sắc: Xám tai dài / Hồng tai dài. Không phải hàng nhập khẩu. <br /> XS：ngực：30cm chiều dài lưng：20<br /> S：ngực：34 chiều dài lưng：24<br /> M：ngực：39 chiều dài lưng：26<br /> L：ngực：44 chiều dài lưng：29<br /> XL：ngực：49 chiều dài
                            lưng：32
                            <br /> XXL：ngực：55 chiều dài lưng：36<br /> Dành cho: Mọi thú cưng<br /> Chất liệu: Nylon<br /> Phong cách: Trẻ trung<br /> Phân loại: Trang phục</p>
                        <h4 className="price">Giá hiện tại: <span>150.000đ</span></h4>
                        <h5 className="sizes">
                            <span>sizes:</span>
                            <select name="cars" className="custom-select mb-3" style={{width: 'auto', verticalAlign: 'middle'}}>
                            <option selected>Nhấn lựa chọn mẫu</option>
                            <option value={0}>XS (Còn 23 SP)</option>
                            <option value={0}>S (Còn 23 SP)</option>
                            <option value={0}>M (Còn 2 SP)</option>
                            <option value={0} disabled>L (Đã hết)</option>
                            <option value={0}>XL (Còn 23 SP)</option>
                            <option value={0} disabled>XXL (Đã hết)</option>
                            </select>
                        </h5>
                        <div className="action">
                            <button className="add-to-cart btn btn-default" type="button"> <i className="fas fa-cart-plus" /> Thêm vào giỏ hàng</button> &nbsp; &nbsp; &nbsp; &nbsp;
                            <button className="pay btn btn-default" type="button"><i className=" fas fa-cart-plus" /> Mua ngay</button>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className>
                        <div className="my-3 p-3 bg-white rounded box-shadow">
                        <h4 className="border-bottom border-gray pb-2 mb-0" style={{textTransform: 'uppercase'}}>Đánh giá sản phẩm</h4>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star" /></span> <br />
                            <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star" /></span> <br />
                            <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star " />
                                <i className="fas fa-star" /></span> <br />
                            <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" /> <br />
                                <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </span></p>
                        </div>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star " />
                                <i className="fas fa-star" /></span> <br />
                            <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </p>
                        </div>
                        <div className="media text-muted pt-3">
                            <img data-src alt="32x32" className="mr-2 rounded" style={{width: '32px', height: '32px'}} src={User} data-holder-rendered="true" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong className="d-block text-gray-dark">@username</strong>
                            <span><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" /> <br />
                                <small>Sản phẩm khá đẹp, chất lắm nha nha :&gt;&gt;</small>
                            </span></p>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">Xem thêm đánh giá</a>
                        </small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <br />
                <div className="container-fluid body_page detail_category">
                {/* content, prduct category */}
                <div className="div_pr1 bg_div">
                    <div className="container-fluid">
                    <h2 className="text-left d-inline title_chill">Các sản phẩm tương tự</h2>
                    <div className="hr_title hr" />
                    </div>
                    <div className="gr_product row">
                    {/* list product */}
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                        </div>
                        <img src={Pr2} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Đĩa bay 20cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                        </div>
                        <img src={Pr1} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                        </div>
                        <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                        </div>
                        <img src={Pr2} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Đĩa bay 20cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                        </div>
                        <img src={Pr1} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                        </div>
                        <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                        </div>
                        <img src={Pr2} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Đĩa bay 20cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                        <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                        </div>
                        <img src={Pr1} className alt="Cinque Terre" />
                        <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                        <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                        <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                        </div>
                        <div />
                    </div>
                    </div>
                </div>
                {/* content, prduct category */}
                </div>
                <br />
            </div>
            {/* content, prduct sale of */}
            </div>
            // {/*end content, include product and category */}
        )
    }
}