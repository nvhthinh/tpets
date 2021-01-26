import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="row div_title_slide">
                {/* header 2, menu*/}
                <div className="col-lg-12 head_3 bg_div">
                <nav id="nav_head" className="nav container nav-pills nav-fill">
                <Link to="/shopcun" className="nav-item nav-link" href="#"><span className="txt">SHOP CHO CÚN</span><i className="ico fas fa-dog fa-2x mb" /></Link>
                    <Link to="/shopmeo" className="nav-item nav-link" href="#"><span className="txt">SHOP CHO MÈO</span><i className="ico fas fa-cat fa-2x mb" /></Link>
                    <Link to="/giamgia" className="nav-item nav-link" href="#"><span className="txt">KHUYẾN MẠI</span><i className="ico fas fa-percent fa-2x mb" /></Link>
                    <Link to="/tintuc" className="nav-item nav-link" href="#"><span className="txt">TIN TỨC</span><i className="ico fas fa-newspaper fa-2x mb" /></Link>
                    <a className="nav-item nav-link" href="#"><span className="txt">LIÊN HỆ</span><i className="ico fas fa-id-card-alt fa-2x mb" /></a>
                </nav>
                </div>
                {/*end header 2, menu*/}
            </div>    
        )
    }
}