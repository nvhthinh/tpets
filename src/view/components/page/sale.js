// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import Pr2 from "../../lib/pic/pr2.jpg";
import Pr1 from "../../lib/pic/pr1.jpg";

export default class Sale extends Component {
    render() {
        return (
            // {/* content, sale */}
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
            {/* content, prduct sale of */}
            <div className="div_pr1 bg_div">
                <h2 className="text-center">TRẢI NGHIỆM MÙA HÈ SÔI ĐỘNG CÙNG CÚN YÊU </h2>
                <div className="hr_title" />
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
            {/* content, prduct sale of */}
            </div>
            // {/*end content, sale */}
        )
    }
}