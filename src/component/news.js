import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
                {/* content, prduct sale of */}
                <div className="div_pr1 bg_div news">
                <h2 className="text-center">#TRẢI NGHIỆM MÙA HÈ SÔI ĐỘNG CÙNG CÚN YÊU</h2>
                <div className="hr_title" /> <br />
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new1.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">TẠI SAO TẮM VÀ SPA CHO THÚ CƯNG</Link>
                        </h3>
                        <div className="mb-1 text-muted">10/11/2020</div>
                        <p className="card-text mb-auto">Mỗi khi đến mùa hè oi bức, da của chó trở nên khô ráp. Đồng thời lông của chúng mất đi sự bóng bẩy. Nhiều chủ nhân cảm thấy bất lực khi chú chó rụng lông quá nhiều. Mà nếu không chăm sóc, chú chó của bạn sẽ trở nên xấu xí.

Những chú chó cũng giống như con người với lớp da có cấu tạo nhiều tầng. Kết cấu da sẽ bị ảnh hưởng dưới tác động của các chất hóa học và vật lý. Gây ra nhiều ảnh hưởng như khô da, bong tróc vảy…</p>
                    </div>
                    </div>
                </div>
                <div className="gr_product container">
                    <div className="card flex-md-row mb-4 box-shadow h-md-250">
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/new2.jpg" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">Tuần lễ sale: Be mine - Người tình Valentine</Link>
                        </h3>
                        <div className="mb-1 text-muted">30/12/2020</div>
                        <p className="card-text mb-auto">💘 Thế rồi Valentine đã đến, 14/2 - Một ngày Lễ tình nhân ngọt ngào lọt thỏm giữa mùa Xuân đang rực rỡ.

🎉 Để tăng thêm dư vị cho ngày đặc biệt này, Petcity dành tặng Quý khách hàng Tuần lễ SALE " Be mine - Người tình Valentine" với hàng trăm sản phẩm vô cùng hấp dẫn.</p>
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
                    <img className="card-img-right flex-auto d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style={{width: 'auto', height: '250px'}} src="./pic/TIN1.png" data-holder-rendered="true" />
                    <div className="card-body d-flex flex-column align-items-start">
                        <h3 className="mb-0">
                        <Link to="doctin" style={{textDecoration: 'none', color: '#000'}} className="text-dark">GIẢI ĐÁP 5 CÂU HỎI VỀ SỨC KHỎE CỦA MÈO KHÔNG PHẢI AI CŨNG BIẾT</Link>
                        </h3>
                        <div className="mb-1 text-muted">30/12/2020</div>
                        <p className="card-text mb-auto">Tác dụng của vacxin đó là giúp cơ thể miễn dịch với sự xâm nhập của các virus gây bệnh. VÌ vậy, việc tiêm chủng vacxin có ý nghĩa rất quan trọng trong việc chăm sóc cho mèo, giúp chúng luôn khỏe mạnh.</p>
                    </div>
                    </div>
                </div>
                </div>
                {/* content, prduct sale of */}
            </div>   
        )
    }
}