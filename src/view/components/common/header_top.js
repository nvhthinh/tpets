// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import { faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class A extends Component {
    render() {
        return (
            //header 1
        <div className="bg_it co_it head_1">
        <nav className="container navbar navbar-expand-sm navbar-light">
          <a className="navbar-brand co_it" href="#">HOTLINE: 1900 6969</a>
          <div className="mb">
            <a className="ico" href="#"><i className="fas fa-receipt" /></a>
            <a className="ico" href="#"><i className="fas fa-cart-arrow-down" /></a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown no-arrow  user_dis" style={{display: 'none'}}>
                <img src="./pic/user.png" alt="" />
                <a className="nav-link co_it nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tên khách hàng</a>
                 {/* Dropdown - User Information  */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" /> Logout
                  </a>
                </div>
              </li>
              <li className="nav-item" data-toggle="modal" data-target="#modal_gr_login">
                <a className="nav-link co_it" href="#"><i className="fas fa-sign-in-alt" /> Đăng nhập</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      // {/* end header 1 */}
        )
    }
}