// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import { faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pr2 from "../../lib/pic/pr2.jpg";
import Pr1 from "../../lib/pic/pr1.jpg";
import Pic_list_dog from "../../lib/pic/list_dog.png";

export default class Home extends Component {
    render() {
        return (
            // {/* content, include product and category */}
      <div className="container-fluid body_page" style={{marginTop: '30px'}}>
      {/* content, prduct sale of */}
      <div className="div_pr1 bg_div">
        <h2 className="text-center"># KHUYẾN MẠI HOT</h2>
        <div className="hr_title" />
        <div className="gr_product row">
          {/* list product */}
          <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
            <div className="sub_item text-right">
              <i className="fas fa-ticket-alt fa-2x" />
              <p>-50%</p>
            </div>
            <img src={Pr2} className alt="TPets Hình ảnh" />
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
            <img src={Pr1} className alt="TPets Hình ảnh" />
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
            <img src={Pr2} className alt="TPets Hình ảnh" />
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
            <img src={Pr1} className alt="TPets Hình ảnh" />
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
            <img src={Pr2} className alt="TPets Hình ảnh" />
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
            <img src={Pr1} className alt="TPets Hình ảnh" />
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
      {/* content, hot category */}
      <div className="div_pr2 bg_div">
        <h2 className="text-center"># DANH MỤC NỔI BẬT</h2>
        <div className="hr_title" />
        <div className="gr_category row">
          {/* list product */}
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
          <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
            <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
          </div>
        </div>
      </div>
      {/*end content, hot category */}
      {/* content, detail hot category :dog*/}
      <div className="div_pr3 row margin_div_top bg_div">
        {/* content, detail menu hot category :dog*/}
        <div className="col-sm-4 col-xl-2 detail_wrap">
          <div className="detail">
            <h2 className="text-center">SHOP CÚN CƯNG</h2>
            <div className="list_ct margin_div_top">
              <a href="#">Thức ăn cho cún</a>
              <a href="#">Pate cho cún</a>
              <a href="#">Thức ăn khô</a>
              <a href="#">Quần áo cho cún</a>
              <a href="#">Vòng cổ</a>
              <a href="#">Đồ chơi , phụ kiện</a>
              <a href="#">Vật dụng</a>
              <a href="#">Bình sữa</a>
            </div>
            <img src={Pic_list_dog} className="margin_div_top desk" alt="TPets Hình ảnh" style={{display: 'none'}} />
          </div>
        </div>
        {/* content, detail menu hot category :dog*/}
        {/* content, content hot category :dog*/}
        <div className="col-sm-8 col-xl-10">
          {/* content, carousel producer of hot category :dog*/}
          <div className="row d-flex align-items-center">
            <div className="col-12">
              <div id="carousel_producer" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div style={{backgroundImage: 'url("./pic/prd1.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd2.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd3.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd4.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd5.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd6.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div style={{backgroundImage: 'url("./pic/prd7.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd8.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd9.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd10.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd11.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                      <div style={{backgroundImage: 'url("./pic/prd12.jpg")'}} className="col d-flex align-items-center justify-content-center">
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev redirect_custom" href="#carousel_producer" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-style="display: none;"/>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next redirect_custom" href="#carousel_producer" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-style="display: none;"/>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {/*End carousel*/}
            </div>
          </div>
          {/*end content, carousel producer of hot category :dog*/}
          {/* content, product of hot category :dog*/}
          <div className="row gr_product">
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
            <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
              <img src={Pr1} className alt="TPets Hình ảnh" />
              <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
              <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
              </p>
              <div className=" text-center">
                <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
              </div>
            </div>
          </div>
          {/* content, product of hot category :dog*/}
        </div>
        {/* content, content hot category :dog*/}
      </div>
      {/* content, detail hot category :dog*/}
      {/* content, tips */}
      <div className="div_tip d-inline-flex flex-fill">
        <div className="tip flex-fill">
          <div className="wrap_part_tip_1">
            <img src={Pr1} className alt="TPets Hình ảnh" />
          </div>
          <div className="wrap_2_tip wrap_2_tip_1">
            <p className="pr_name text-center">DINH DƯỠNG</p>
            <div className=" text-center">
              <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
            </div>
          </div>
        </div>
        <div className="tip flex-fill">
          <div className="wrap_part_tip_2">
            <img src={Pr1} className alt="TPets Hình ảnh" />
          </div>
          <div className="wrap_2_tip wrap_2_tip_2">
            <p className="pr_name text-center">HUẤN LUYỆN</p>
            <div className=" text-center">
              <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
            </div>
          </div>
        </div>
        <div className="tip flex-fill">
          <div className="wrap_part_tip_3">
            <img src={Pr1} className alt="TPets Hình ảnh" />
          </div>
          <div className="wrap_2_tip wrap_2_tip_3">
            <p className="pr_name text-center">ĐỜI SỐNG</p>
            <div className=" text-center">
              <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
            </div>
          </div>
        </div>
        <div className="tip flex-fill">
          <div className="wrap_part_tip_4">
            <img src={Pr1} className alt="TPets Hình ảnh" />
          </div>
          <div className="wrap_2_tip wrap_2_tip_4">
            <p className="pr_name text-center">HỎI ĐÁP</p>
            <div className=" text-center">
              <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
            </div>
          </div>
        </div>
        {/*end content, tips */}
      </div>
      {/* content, prduct sale of */}
    </div>
    // {/*end content, include product and category */}
        )
    }
}