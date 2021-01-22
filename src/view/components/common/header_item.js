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
          // {/*end header 2, menu and carousel */} 
        )
    }
}