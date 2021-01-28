import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
                {/* content, prduct sale of */}
                <div className="div_pr1 bg_div">
                <h2 className="text-center">#KHUYẾN MÃI</h2>
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
                    <img src="./pic/d1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đồ chơi hình thú</p></Link>
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
                    <img src="./pic/pr17.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/d10.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Túi vận chuy</p></Link>
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
                    <img src="./pic/c12.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Thuốc trị ve rận</p></Link>
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
                    <img src="./pic/c1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Sữa 1 tháng tuổi</p></Link>
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
                    <img src="./pic/d3.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/d8.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c10.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/d2.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c6.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/pr16.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c8.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c6.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/d5.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/pr16.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c7.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c5.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c2.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/d6.jpg" className alt="Cinque Terre" />
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
                    <img src="./pic/c2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    
                    
                    <div />
                    </div>
                </div>
                </div>
                {/* content, prduct sale of */}
            </div>  
        )
    }
}