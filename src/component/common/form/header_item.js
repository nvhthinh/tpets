import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="row div_title_slide">
                {/* header 2, menu*/}
                <div className="col-lg-12 head_3 bg_div">
                <nav id="nav_head" className="nav container nav-pills nav-fill">
                    <a className="nav-item nav-link" href="#">SHOP CHO CÚN</a>
                    <a className="nav-item nav-link" href="#">SHOP CHO MÈO</a>
                    <a className="nav-item nav-link" href="#">KHUYẾN MẠI</a>
                    <a className="nav-item nav-link" href="#">TIN TỨC</a>
                    <a className="nav-item nav-link" href="#">LIÊN HỆ</a>
                </nav>
                </div>
                {/*end header 2, menu*/}
            </div>    
        )
    }
}