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
                {/*detail Modal*/}
        {/* hủy đơn hàng */}
                <div className="modal fade" id="detail_Modal_cancel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* <div class="modal fade show" id="detail_Modal_cancel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;"> */}
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text" id="exampleModalLabel">Bạn có chắc muốn hủy đơn hàng này</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="col-sm-12">
                            <p className="text-danger">*Bạn có chắc chắn muốn hủy đơn hàng này?. Sẽ không thể đặt hàng trong vòng 7 ngày nếu hủy quá 3 lần liên tiếp!</p>
                            <div className="form-group">
                            <label>Chọn lý do muốn hủy</label>
                            <select className="form-control" id="sel1">
                                <option>Đã đặt rồi</option>
                                <option>Tôi muốn đổi sản phẩm khác</option>
                                <option>Không muốn mua nữa</option>
                                <option>Lý do khác (Bạn vui lòng nhập lý do bên dưới)</option>
                            </select> <br />
                            <textarea placeholder="Không bắt buộc... Hảy cho tôi biết lý do để Tpets phục vụ bạn tốt hơn." rows={3} className="form-control" defaultValue={""} />
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-custom" href="#">Xác nhận hủy</a>
                    </div>
                    </div>
                </div>
                </div>
                {/* ranting */}
                <div className="modal fade" id="detail_Modal_ranting" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/* <div class="modal fade show" id="detail_Modal_cancel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;"> */}
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text" id="exampleModalLabel">Đánh giá đơn hàng</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="col-sm-12">
                            <p className="text-info">Đánh giá để chúng tôi phục vụ bạn tốt hơn!</p>
                            <div className="form-group">
                            <label>Đánh giá cho đơn hàng</label>
                            <p><i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star checked" />
                                <i className="fas fa-star" /></p>
                            <textarea placeholder="Không bắt buộc... Nội dung đánh giá." rows={3} className="form-control" defaultValue={""} />
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a className="btn btn-custom" href="#">Xác nhận hủy</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}