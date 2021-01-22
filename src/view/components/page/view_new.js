// create.component.js
import React, { Component } from 'react';
// get our fontawesome imports
import New1 from "../../lib/pic/new1.jpg";
import New2 from "../../lib/pic/new2.jpg";
import New3 from "../../lib/pic/new3.jpg";
import New4 from "../../lib/pic/new4.jpg";

export default class ViewNew extends Component {
    render() {
        return (
            // {/* content, post*/}
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
            {/* content, prduct sale of */}
            <div className="div_pr1 bg_div view_news">
                <div className="blog-post container">
                <h3 className="blog-post-title title">Làm sao để chăm sóc tốt cho chó vào mùa đông</h3>
                <p className="blog-post-meta">30/12/2020 <a href="#">Admin</a></p>
                <p>Thời tiết đã chuyển lạnh rồi, việc giữ cho thú cưng luôn được khỏe mạnh chắc chắn là vấn đề được các
                    chủ nuôi quan tâm. Bởi cũng giống con người, sức khỏe của cún cũng dễ bị ảnh hưởng bởi sự thay đổi
                    của thời tiết. Vậy làm sao để cún của
                    bạn luôn được hoạt bát, mạnh khỏe dưới môi trường khí hậu luôn thay đổi như ở Việt Nam?</p>
                <hr />
                <h3 className="blog-post-title">1. Sắp xếp chỗ ngủ ấm áp</h3>
                <p>Nếu không có không gian trong nhà cho cún, thì bạn cần sắp xếp cho cún một chỗ ngủ kín đáo, tránh
                    hướng gió. Chuồng của cún cần có vải, bạt bao xung quanh để giữ nhiệt. Bên trong sắp xếp chăn, đệm
                    đảm bảo giữ ấm nhất có thể.</p>
                <p>Chủ nuôi cũng có thể đặt mua các sản phẩm nhà, đệm cho cún cưng đang được bán rất phổ biến trên thị
                    trường. Nhìn chung các sản phẩm này đều có giá thành hợp lý, nhiều kích thước tùy chọn phù hợp cho
                    cún nhà bạn. Dù mua chuồng, đệm hay
                    tận dụng chăn nệm cũ tại nhà, các bạn cũng đừng quên thường xuyên giặt giũ vệ sinh để tránh các vi
                    khuẩn gây bệnh cho bé.</p>
                <div className="div_pic text-center">
                    <img style={{height: '30em'}} src={New1} alt="" />
                    <p> <small className><i>Hạn chế cho cún tiếp xúc trực tiếp với nền đất vào mùa đông</i></small></p>
                </div>
                <h3 className="blog-post-title">2. Hạn chế tắm</h3>
                <p>Khi môi trường ở nhiệt độ thấp, bạn không nhất thiết phải tắm cho cún quá thường xuyên. Nếu cần
                    thiết, bạn chỉ cần duy trì 2-3 tuần/lần với dầu tắm để loại bỏ vi bụi bẩn, gàu ngứa và giữ cho cún
                    cưng luôn sạch sẽ. Thời gian cho mỗi lần
                    tắm có thể thay đổi tùy thuộc vào tần suất vận động của từng bé.</p>
                <p>Bên cạnh đó, bạn cũng có thể sử dụng phấn tắm khô có thể làm sạch lông của cún trong thời gian nhanh
                    chóng, đặc biệt hữu dụng khi nhiệt độ xuống thấp.</p>
                <p>Lưu ý khi tắm cho cún vào mùa đông, bạn nên tắm trong nhà, tránh gió để cún không bị cảm lạnh. Nên sử
                    dụng nước ấm để tắm cho cún và không nên tắm quá lâu. Sau khi tắm, bạn hãy nhớ lau và sấy lông bé
                    thật khô nha.</p>
                <div className="div_pic text-center">
                    <img style={{height: '30em'}} src={New2} alt="" />
                    <p> <small className><i>Bạn không nhất thiết phải tắm cho cún quá thường xuyên khi thời tiết
                        lạnh</i></small></p>
                </div>
                <h3 className="blog-post-title">3. Mặc áo cho cún</h3>
                <p>Mỗi khi đưa chó ra ngoài, bạn hãy mặc thêm áo cho cún. Đây có thể coi là phương pháp giữ ấm đơn giản
                    nhất. Bạn có thể tận dụng quần áo cũ không sử dụng đến để mặc cho chúng, hoặc mua quần áo dành riêng
                    cho chó mèo với rất nhiều mẫu mã
                    hiện đang được bán phổ biến tại các cửa hàng đồ cho thú cưng.</p>
                <p>Bạn cũng có thể khảo các mẫu quần áo cho cún tại đây</p>
                <p>Bạn nên chọn các loại áo nỉ bông mềm mại, vừa có khả năng giữ ấm vừa có thể thấm hút mồ hôi khi cún
                    vận động nhiều, tránh trường hợp cún bị cảm lạnh.</p>
                <h3 className="blog-post-title">4. Hạn chế cho cún ra đường</h3>
                <p>Đừng hiểu lầm rằng hạn chế ra đường đồng nghĩa với việc bạn sẽ để cún nằm trong nhà 24/7. Điều này
                    rất dễ khiến chúng trở nên lười nhác và dẫn đến nguy cơ bị béo phì. Hãy dắt cún đi dạo trong khoảng
                    thời gian trưa – chiều khi mà nhiệt
                    độ trở nên ấm hơn. Sen có thể mặc thêm áo và sử dụng giày cho boss để giữ nhiệt nhé.</p>
                <div className="div_pic text-center">
                    <img style={{height: '30em'}} src={New3} alt="" />
                    <p> <small className><i>Hạn chế cho cún tiếp xúc trực tiếp với nền đất vào mùa đông</i></small></p>
                </div>
                <h3 className="blog-post-title">5. Vận động hợp lý</h3>
                <p>Bạn có biết rằng những chú cún được vận động sẽ khỏe mạnh hơn so với những chú cún nằm dài cả ngày
                    không? Chủ nuôi hãy dành chút thời gian mỗi ngày để chơi cùng cún cưng nhé. Nếu quá bận rộn, bạn
                    cũng có thể mua đồ chơi cho cún để bé tự
                    chơi đùa.</p>
                <div className="div_pic text-center">
                    <img style={{height: '30em'}} src={New4} alt="" />
                    <p> <small className><i>Chơi với cún cũng là một cách vận động giúp làm ấm người</i></small></p>
                </div>
                <h3 className="blog-post-title">6. Ăn uống khoa học</h3>
                <p>Trong mùa lạnh, cún cần được ăn thường xuyên để tích trữ năng lượng và thân nhiệt. Tùy vào độ tuổi và
                    cân nặng mà chế độ ăn của cún cũng thay đổi. Bạn nên chọn các loại thức ăn cho chó có chứa nhiều
                    protein, canxi và khoáng chất. Cách
                    tốt nhất là tự chế biến các món ăn tại nhà nhưng nếu không có thời gian, chủ nuôi cũng có thể đặt
                    mua thức ăn chế biến sẵn.</p>
                <p>Trên đây là một số gợi ý của PetCity giúp bạn có thể chăm sóc cún khi thời tiết thay đổi. Hy vọng
                    những chia sẻ này sẽ có ích cho các chủ nuôi.</p>
                <br />
                <p className="view_more"><span className="v1">&gt;&gt;&gt; Xem thêm: </span> <span className="v2">ĐỊA CHỈ TÌM CHÓ/MÈO LẠC TẠI
                    HÀ NỘI VÀ THÀNH PHỐ HỒ CHÍ MINH CHỦ NUÔI CẦN BIẾT</span></p>
                <br />
                <div className="text-right">
                    <button type="button" className="btn btn-primary btn-sm fas fa-thumbs-up"> Like</button> &nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-primary btn-sm fas fa-share"> Share</button>
                </div>
                <br />
                <div className="div_pr1 bg_div detail_category ">
                    <div className="container-fluid">
                    <h2 className="text-left d-inline title_chill">Bài viết liên quan</h2>
                    <div className="hr_title hr" />
                    </div>
                    <div className="gr_product row">
                    {/* list product */}
                    <div className="product col-lg-3 col-xs-3 col-sm-3 col-6">
                        <img style={{padding: 0}} src={New1} className alt="Cinque Terre" />
                        <p className="pr_name ">Vận dụng cần thiết cho người nuôi cuốn lần đầu</p>
                    </div>
                    <div className="product col-lg-3 col-xs-3 col-sm-3 col-6">
                        <img style={{padding: 0}} src={New2} className alt="Cinque Terre" />
                        <p className="pr_name ">Cách tắm cho cuốn con</p>
                    </div>
                    <div className="product col-lg-3 col-xs-3 col-sm-3 col-6">
                        <img style={{padding: 0}} src={New3} className alt="Cinque Terre" />
                        <p className="pr_name ">Mẹo tỉa lông thú cưng</p>
                    </div>
                    <div className="product col-lg-3 col-xs-3 col-sm-3 col-6">
                    <img style={{padding: 0}} src={New3} className alt="Cinque Terre" />
                        <p className="pr_name ">Mùa đông và cách giữ ấm cho thú cưng</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* content, prduct sale of */}
            </div>
            // {/*end content, post */}
        )
    }
}