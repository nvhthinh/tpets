import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page detail_category" style={{marginTop: '30px'}}>
                {/* content, prduct category */}
                <div className="div_pr1 bg_div">
                <div className="card shopping-cart">
                    <div className="jumbotron div_address">
                    <div className="container ">
                        <h2>Địa chỉ nhận hàng</h2>
                        <p className="wrap_address">
                        <span className="phone">Trang(+84)399411776</span>
                        <span>Số 15, đường Tùm lum, Hòa Hải, Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng</span>
                        </p>
                        <a className="change" data-toggle="modal" data-target="#detail_Modal">Thay đổi</a>
                    </div>
                    </div>
                    <hr />
                    <div className="card-body container" style={{background:'#fff'}}>
                    {/* PRODUCT */}
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src="./pic/pr1.jpg" alt="prewiew" width="auto" height={80} />
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>Tên sản phẩm</strong></h4>
                        <h4>
                            <small>Mô tả sản phẩm</small>
                        </h4>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-5 text-md-right" style={{paddingTop: '5px'}}>
                            <h6><strong>300.000đ <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-4 col-sm-4 col-md-5">
                            <div className="quantity">
                            <input type="button" defaultValue="+" className="plus" />
                            <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={4} />
                            <input type="button" defaultValue="-" className="minus" />
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" className="btn btn-outline-danger btn-xs">
                            <i className="fa fa-trash" aria-hidden="true" />
                            </button>
                        </div>
                        </div>
                    </div>
                    <hr />
                    {/* END PRODUCT */}
                    {/* PRODUCT */}
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src="./pic/prd1.png" alt="prewiew" width="auto" height={80} />
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>Tên sản phẩm 2</strong></h4>
                        <h4>
                            <small>Mô tả của sản phẩm</small>
                        </h4>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-5 text-md-right" style={{paddingTop: '5px'}}>
                            <h6><strong>200.000đ <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-4 col-sm-4 col-md-5">
                            <div className="quantity">
                            <input type="button" defaultValue="+" className="plus" />
                            <input type="number" step={1} max={99} min={1} defaultValue={1} title="Qty" className="qty" size={4} />
                            <input type="button" defaultValue="-" className="minus" />
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" className="btn btn-outline-danger btn-xs">
                            <i className="fa fa-trash" aria-hidden="true" />
                            </button>
                        </div>
                        </div>
                    </div>
                    <hr />
                    {/* END PRODUCT */}
                    </div>
                    <div className="card-footer text-right">
                    <div className="container">
                        <p>Tổng số tiền (2 sản phẩm): <span className="money">500.000đ</span></p>
                        <a href className="btn btn-custom pull-right">Đặt hàng</a>
                    </div>
                    </div>
                </div>
                </div>
                {/*detail Modal*/}
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