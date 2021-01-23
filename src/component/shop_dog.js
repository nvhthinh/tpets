import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page detail_category" style={{marginTop: '30px'}}>
                {/* content, prduct category */}
                <div className="div_pr1c bg_div">
                <div className="container-fluid">
                    <h2 className="text-left d-inline title_chill">Thức ăn cho cún</h2>
                    <div className="hr_title hr" />
                </div>
                <div className="gr_product row">
                    {/* list product */}
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
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
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
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
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                </div>
                </div>
                {/* content, prduct category */}
                {/* content, prduct category */}
                <div className="div_pr1c bg_div">
                <div className="container-fluid">
                    <h2 className="text-left d-inline title_chill">Trang phục cho cún</h2>
                    <div className="hr_title hr" />
                </div>
                <div className="gr_product row">
                    {/* list product */}
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
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
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
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
                    <img src="./pic/pr2c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1c.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                    <div className=" text-center">
                        <button type="button" className="btn bt_product">Chọn mua</button>
                    </div>
                    <div />
                    </div>
                </div>
                <br/>
                </div>
                <br/>
                {/* content, prduct category */}
            </div>
        )
    }
}