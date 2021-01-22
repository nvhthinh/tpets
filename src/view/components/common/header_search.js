// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import { faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../lib/pic/logo.png";

export default class A extends Component {
    render() {
        return (
    // {/* header 2, logo */}
    <div className="container-fluid text-center head_2 bg_div" style={{marginBottom: 0}}>
      <div className="row search">
        <div className="col-lg-9 col-md-8 search_1">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="input-group mb-3 f_search">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn bg_it" type="submit"><i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 search_2 desk" style={{display: 'none'}}>
          <a href="#"><i className="fas fa-receipt fa-2x" /> <span>kiểm tra đơn hàng</span></a>
          <a href="#"><i className="fas fa-cart-arrow-down fa-2x" /> <span>Giỏ hàng</span></a>
        </div>
      </div>
    </div>
    // {/*end header 2, logo */}
        )
    }
}