// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports

import PicTin from "../../lib/pic/chicago.jpg";

export default class A extends Component {
    render() {
        return (
            // {/* content, news */}
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
            {/* content, prduct sale of */}
            <div className="div_pr1 bg_div news">
                <h2 className="text-center"># KHUYẾN MẠI HOT</h2>
                <div className="hr_title" /> <br />
                <div className="gr_product container">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src={PicTin} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">CHÀO ĐÓN THÁNG 5 RỰC RỠ</a>
                    </h3>
                    <div className="mb-1 text-muted">30/12/2020</div>
                    <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                </div>
                </div>
                <div className="gr_product container">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src={PicTin} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">CHÀO ĐÓN THÁNG 5 RỰC RỠ</a>
                    </h3>
                    <div className="mb-1 text-muted">30/12/2020</div>
                    <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                </div>
                </div>
                <div className="gr_product container">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src={PicTin} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">CHÀO ĐÓN THÁNG 5 RỰC RỠ</a>
                    </h3>
                    <div className="mb-1 text-muted">30/12/2020</div>
                    <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                </div>
                </div>
                <div className="gr_product container">
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src={PicTin} data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">CHÀO ĐÓN THÁNG 5 RỰC RỠ</a>
                    </h3>
                    <div className="mb-1 text-muted">30/12/2020</div>
                    <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                </div>
                </div>
            </div>
            {/* content, prduct sale of */}
            </div>
            // {/*end content, news */}
        )
    }
}