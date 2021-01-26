import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid text-center head_2 bg_div" style={{marginBottom: 0}}>
                <div className="row search">
                <div className="col-lg-9 col-md-8 search_1">
                    <Link to="/">
                        <div className="logo">    
                            <img src="./pic/logo.png" alt="" />
                        </div>
                    </Link>
                    <div className="input-group mb-3 f_search">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn bg_it" type="submit"><i className="fas fa-search" /></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 search_2 desk">
                    <Link to="/donhang"><i className="fas fa-receipt fa-2x" /> <span>kiểm tra đơn hàng</span></Link>
                    <Link to="/giohang"><i className="fas fa-cart-arrow-down fa-2x" /> <span>Giỏ hàng</span></Link>
                </div>
                </div>
            </div>      
        )
    }
}