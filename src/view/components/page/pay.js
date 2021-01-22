// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import '../../lib/shoppingCart.css';

import Pr1 from "../../lib/pic/pr1.jpg";
export default class Pay extends Component {
    render() {
        return (
            // {/* content, pay */}
            <div className="container-fluid body_page detail_category" style={{marginTop: '30px'}}>
            {/* content, prduct category */}
            <div className="div_pr1 bg_div">
                <div className="card shopping-cart">
                <div className="card-body">
                    {/* PRODUCT */}
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src={Pr1} alt="prewiew" width="auto" height={80} />
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>Tên sản phẩm</strong></h4>
                        <h4>
                        <small>Mô tả sản phẩm</small>
                        </h4>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                        <h6><strong>300.000đ <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
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
                        <img className="img-responsive" src={Pr1} alt="prewiew" width="auto" height={80} />
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>Tên sản phẩm 2</strong></h4>
                        <h4>
                        <small>Mô tả của sản phẩm</small>
                        </h4>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                        <h6><strong>200.000đ <span className="text-muted">x</span></strong></h6>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
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
                    <p>Tổng tiền hàng <span>500.000đ</span></p>
                    <a href className="btn btn-custom pull-right">Mua hàng</a>
                </div>
                </div>
            </div>
            {/* content, prduct category */}
            {/* END content, prduct category */}
            </div>
            // {/*end content, pay */}
        )
    }
}