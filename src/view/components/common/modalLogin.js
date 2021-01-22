// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import { faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide1 from "../../lib/pic/slide1.png";
import Slide2 from "../../lib/pic/slide2.png";
import Slide3 from "../../lib/pic/slide3.png";

export default class A extends Component {
    render() {
        return (
          // {/*login Modal*/}
          <div className="modal fade" id="modal_gr_login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;">
          //{/* <div class="modal fade show" id="detail_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;"="true" style="display: block;"> */}
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#login" role="tab" aria-controls="pills-home" aria-selected="true">ĐĂNG NHẬP</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#register" role="tab" aria-controls="pills-profile" aria-selected="false">ĐĂNG KÍ</a>
                  </li>
                </ul>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-style="display: none;">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="col-sm-12 tab-content">
                    <div className="tab-pane fade show active" id="login">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="col-sm-12">
                          <div className="row">
                            <label>Tên đăng nhập:</label>
                            <input type="text" placeholder="Nhập tên đăng nhập, email hoặc SĐT" className="form-control" />
                          </div>
                          <br />
                          <div className="row">
                            <label>Mật khẩu:</label>
                            <input type="password" className="form-control" />
                          </div>
                          <br />
                          <div className="row text-right modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-custom" href="#">Đăng nhập</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* --- */}
                    <div className="tab-pane fade" id="register">
                      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="col-sm-12">
                          <div className="row">
                            <label>Nhập điện thoại:</label>
                            <input type="text" placeholder="Nhập SĐT" className="form-control" />
                          </div>
                          <br />
                          <div className="row">
                            <label>Mật khẩu:</label>
                            <input type="password" className="form-control" />
                          </div>
                          <br />
                          <div className="row">
                            <label>Xác nhận mật khẩu:</label>
                            <input type="password" className="form-control" />
                          </div>
                          <br />
                          <div className="row text-right modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-custom" href="#">Đăng kí</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        )
    }
}