import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
                {/* content, prduct sale of */}
                <div className="div_pr1 bg_div">
                <h2 className="text-center">TRẢI NGHIỆM MÙA HÈ SÔI ĐỘNG CÙNG CÚN YÊU </h2>
                <div className="hr_title" />
                <div className="gr_product row">
                    {/* list product */}
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                </div>
                </div>
                {/* content, prduct sale of */}
            </div>  
        )
    }
}