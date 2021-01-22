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
            //  {/* header 2, menu and carousel */}
    <div className="row div_title_slide">
      {/* header 2, menu*/}
      <div className="col-lg-2 head_3 bg_div">
        <nav id="nav_head_3" className="nav flex-column container">
          <a className="nav-item nav-link" href="#"><span className="desk" style={{display: 'none'}}>SHOP CHO CÚN</span><i className="fas fa-dog fa-2x mb" /></a>
          <a className="nav-item nav-link" href="#"><span className="desk" style={{display: 'none'}}>SHOP CHO MÈO</span><i className="fas fa-cat fa-2x mb" /></a>
          <a className="nav-item nav-link" href="#"><span className="desk" style={{display: 'none'}}>KHUYẾN MẠI</span><i className="fas fa-percent fa-2x mb" /></a>
          <a className="nav-item nav-link" href="#"><span className="desk" style={{display: 'none'}}>TIN TỨC</span><i className="fas fa-newspaper fa-2x mb" /></a>
          <a className="nav-item nav-link" href="#"><span className="desk" style={{display: 'none'}}>LIÊN HỆ</span><i className="fas fa-id-card-alt fa-2x mb" /></a>
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
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Slide1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slide2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Slide3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel_slide" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-style="display: none;"/>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel_slide" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-style="display: none;"/>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/*end header 2, carousel */}
    </div>
    // {/*end header 2, menu and carousel */}
        )
    }
}