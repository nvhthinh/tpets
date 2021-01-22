// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import { faHome, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class A extends Component {
    render() {
        return (
                //   {/* footer */}
      <div className="footer bg_div div_tip row">
        <div className="col-lg-6 d-inline-flex flex-fill">
          <hr />
          <div className="item flex-fill">
            <p className="title">Thông tin PetCity</p> <br />
            <a href="#">Về Petcity.vn</a>
            <a href="#">Tin tức Petcity</a>
            <a href="#">Ưu thế của Petcity</a>
            <a href="#">Petcity tuyển dụng</a>
            <a href="#">Liên hệ với Petcity</a>
            <a href="#">Sitemap</a>
          </div>
          <hr />
          <div className="item flex-fill">
            <p className="title">Thông tin PetCity</p> <br />
            <a href="#">Về Petcity.vn</a>
            <a href="#">Tin tức Petcity</a>
            <a href="#">Ưu thế của Petcity</a>
            <a href="#">Petcity tuyển dụng</a>
            <a href="#">Liên hệ với Petcity</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="item flex-fill">
            <p className="title">Thông tin PetCity</p> <br />
            <a href="#">Về Petcity.vn</a>
            <a href="#">Tin tức Petcity</a>
            <a href="#">Ưu thế của Petcity</a>
            <a href="#">Petcity tuyển dụng</a>
            <a href="#">Liên hệ với Petcity</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        <div className="col-lg-6 d-inline-flex flex-fill">
          <div className="item flex-fill">
            <p>Địa chỉ: 121. Trần Nguyên Hãn</p> <br />
            <p>Vietcombank Đà Nẵng</p>
            <p>STK: 0911000007721</p>
            <p>CTK: Kiều Thu Trang</p> <br />
            <p>Email: Tpest@maket.pet.com.vn</p> <br />
            <p>Phone: 035 888 888</p>
          </div>
          <div className="item flex-fill text-center">
            <p className="title">Kết nối với chúng tôi</p> <br />
            <div className="gr_contact">
              <a className="yt" href="#"><i className="fab fa-youtube-square fa-2x" /></a>
              <a className="fb" href="#"><i className="fab fa-facebook fa-2x" /></a>
              <a className="tw" href="#"><i className="fab fa-twitter fa-2x" /></a>
              <a className="is" href="#"><i className="fab fa-instagram fa-2x" /></a>
            </div>
            <br />
            <a className="call" href="#"><i className="fas fa-phone-alt" /> <span>19006969</span></a>
          </div>
        </div>
      </div>
        )
    }
}