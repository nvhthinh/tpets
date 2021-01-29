import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="row div_title_slide">
                {/* header 2, menu*/}
                <div className="col-lg-2 head_3 bg_div">
                <nav id="nav_head_3" className="nav flex-column container">
                    <Link to="/shopcun" className="nav-item nav-link" href="#"><span className="txt">SHOP CHO CÚN</span><i className="ico fas fa-dog fa-2x mb" /></Link>
                    <Link to="/shopmeo" className="nav-item nav-link" href="#"><span className="txt">SHOP CHO MÈO</span><i className="ico fas fa-cat fa-2x mb" /></Link>
                    <Link to="/giamgia" className="nav-item nav-link" href="#"><span className="txt">KHUYẾN MẠI</span><i className="ico fas fa-percent fa-2x mb" /></Link>
                    <Link to="/tintuc" className="nav-item nav-link" href="#"><span className="txt">TIN TỨC</span><i className="ico fas fa-newspaper fa-2x mb" /></Link>
                    <a className="nav-item nav-link" href="#"><span className="txt">LIÊN HỆ</span><i className="ico fas fa-id-card-alt fa-2x mb" /></a>
                </nav>
                </div>
                {/*end header 2, menu*/}
                {/* header 2 carousel */}
                <div className="col-lg-10 head_4 bg_div">
                <div id="carousel_slide" className="carousel slide slide_main col-sm 8" data-ride="carousel">
                    <ol className="carousel-indicators">
                    <li data-target="#carousel_slide" data-slide-to={0} className="active" />
                    <li data-target="#carousel_slide" data-slide-to={1} />
                    <li data-target="#carousel_slide" data-slide-to={2} />
                    <li data-target="#carousel_slide" data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="./pic/slide4.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./pic/slide1.png" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./pic/slide2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="./pic/slide3.png" alt="Third slide" />
                    </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel_slide" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-style="display: none;" />
                    <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel_slide" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-style="display: none;" />
                    <span className="sr-only">Next</span>
                    </a>
                </div>
                </div>
                {/*end header 2, carousel */}
            </div>
        )
    }
}