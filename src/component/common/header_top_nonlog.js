import React, { Component } from 'react';



export default class Login extends Component {
    render() {
        return (
            <div className="bg_it co_it head_1">
                <nav className="container navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand co_it" href="#">HOTLINE: 1900 6969</a>
               
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
                        {/* Dropdown - User Information */}
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
                
                <div className="modal fade" id="modal_gr_login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;">
                {/* <div class="modal fade show" id="detail_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;"="true" style="display: block;"> */}
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
                            <span aria-style="display: none;" >×</span>
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
                                    <a className="btn btn-custom" href="/">Đăng nhập</a>
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
                                    <input type="number" placeholder="Nhập SĐT" className="form-control" />
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
            </div> 
        )
    }
}