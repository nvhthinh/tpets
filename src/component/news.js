import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
                {/* content, prduct sale of */}
                <div className="div_pr1 bg_div news">
                <h2 className="text-center"># KHUYẾN MẠI HOT</h2>
                <div className="hr_title" /> <br />
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new1.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">CHÀO ĐÓN THÁNG 5 RỰC RỠ</Link>
                        </h3>
                        <div className="mb-1 text-muted">30/12/2020</div>
                        <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                    </div>
                </div>
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new2.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">CHÀO ĐÓN THÁNG 5 RỰC RỠ</Link>
                        </h3>
                        <div className="mb-1 text-muted">30/12/2020</div>
                        <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                    </div>
                </div>
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new3.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">CHÀO ĐÓN THÁNG 5 RỰC RỠ</Link>
                        </h3>
                        <div className="mb-1 text-muted">30/12/2020</div>
                        <p className="card-text mb-auto">Với hóa đơn thức ăn hạt có tổng trọng lượng từ 5kg tặng kèm voucher
                        50k áp dụng mua đồ dùng, đồ chơi,... thêm 30% tối đa 15k </p>
                    </div>
                    </div>
                </div>
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new4.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">CHÀO ĐÓN THÁNG 5 RỰC RỠ</Link>
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
        )
    }
}