import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Cart_manager extends Component {
    render() {
        return (
            <div className="container-fluid body_page detail_category" style={{marginTop: '30px'}}>
                {/* content, prduct category */}
                <div className="div_pr1 div_manager bg_div">
                <div className="container">
                    <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#tab_all">Tất cả</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_process">Đang giao</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_success">Đã giao</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tab_cancel">Đã hủy</a>
                    </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                    <div className="tab-pane container tab_cart active" id="tab_all">
                        {/* don hang dang giao */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-warning status">Đang giao hàng</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" data-toggle="modal" data-target="#detail_Modal_cancel" className="btn btn-danger bt_cancel">Hủy đơn hàng</button>
                        </p>
                        </div>
                        {/* don hang da giao */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-success status">Đã giao</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" data-toggle="modal" data-target="#detail_Modal_ranting" style={{marginLeft: '5em'}} className="btn btn-custom">Đánh giá</button>
                        </p></div>
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-success status">Đã giao</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" style={{marginLeft: '5em'}} className="btn btn-success">Xem lại đánh giá</button>
                        </p></div>
                        {/* don hang da huy */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-danger status">Đã hủy</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                        </p>
                        </div>
                    </div>
                    <div className="tab-pane container tab_cart fade" id="tab_process">
                        {/* don hang dang giao */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-warning status">Đang giao hàng</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" data-toggle="modal" data-target="#detail_Modal_cancel" className="btn btn-danger bt_cancel">Hủy đơn hàng</button>
                        </p>
                        </div>
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-warning status">Đang giao hàng</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" data-toggle="modal" data-target="#detail_Modal_cancel" className="btn btn-danger bt_cancel">Hủy đơn hàng</button>
                        </p>
                        </div>
                    </div>
                    <div className="tab-pane container tab_cart fade" id="tab_success">
                        {/* don hang da giao */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-success status">Đã giao</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" data-toggle="modal" data-target="#detail_Modal_ranting" style={{marginLeft: '5em'}} className="btn btn-custom">Đánh giá</button>
                        </p></div>
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-success status">Đã giao</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                            <button type="button" style={{marginLeft: '5em'}} className="btn btn-success">Xem lại đánh giá</button>
                        </p></div>
                    </div>
                    <div className="tab-pane container tab_cart fade" id="tab_cancel">
                        {/* don hang da huy */}
                        <div className="cart">
                        <p className="text-right">
                            <span className="tl_status">Tình trạng: </span>
                            <span className="text-danger status">Đã hủy</span>
                        </p>
                        <hr />
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="col-12 col-sm-12 col-md-2 text-center">
                            <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                            </div>
                            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-7">
                            <h5>Tên sản phẩm</h5>
                            <p>Mô tả sản phẩm</p>
                            <p>X 1</p>
                            </div>
                            <div className="col-12 col-sm-12 text-sm-center col-md-3 text-md-right row">
                            <h5>300.000đ</h5>
                            </div>
                        </div>
                        <p className="text-right">
                            <span className="tl_status">Tổng số tiền: </span>
                            <span className="status">600.000đ</span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*detail Modal*/}
                {/* <a class="change" data-toggle="modal" data-target="#detail_Modal">Thay đổi</a> */}
                <div className="modal fade" id="detail_Modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* <div class="modal fade show" id="detail_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;"> */}
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Thông tin địa chỉ giao hàng</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="col-sm-12">
                            <div className="row">
                            <div className="col-sm-6 form-group">
                                <label>Tên người nhận:</label>
                                <input type="text" placeholder="Enter Name Here.." className="form-control" defaultValue="Trang Trang" />
                            </div>
                            <div className="col-sm-6 form-group">
                                <label>Số điện thoại người nhận:</label>
                                <input type="text" placeholder="Enter Number Phone Here.." className="form-control" defaultValue="(+84)399411776" />
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Địa chỉ: (Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Tòa nhà, tên đường...)</label>
                            <textarea placeholder="Enter address detail Here.." rows={3} className="form-control" defaultValue={"Số 15, đường Tùm lum, Hòa Hải, Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng"} />
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-custom" href="#">Lưu</a>
                    </div>
                    </div>
                </div>
                </div>
                {/* content, prduct category */}
                {/* END content, prduct category */}
            </div>
        )
    }
}