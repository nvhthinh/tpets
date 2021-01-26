import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid body_page" style={{marginTop: '30px'}}>
                {/* content, prduct sale of */}
                <div className="div_pr1 bg_div">
                    <Link  to="/giamgia" style={{textDecoration: 'none'}}><h2 className="text-center cl_it"># KHUYẾN MẠI HOT</h2></Link>
                <div className="hr_title" />
                <div className="gr_product row">
                    {/* list product */}
                    
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">17.000đ</span></p>
                    <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">235.000</span> &nbsp; <span className="new">130.000đ</span></p>
                    <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Balo màu vàng</p></Link>
                    <p className="gr_price text-center"><span className="old">55.000</span> &nbsp; <span className="new">10.000đ</span></p>
                    <div className=" text-center">
                        
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">210.000đ</span></p>
                    <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    <div />
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-ticket-alt fa-2x" />
                        <p>-50%</p>
                    </div>
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đĩa bay 20cm</p></Link>
                    <p className="gr_price text-center"><span className="old">35.000</span> &nbsp; <span className="new">20.000đ</span></p>
                    <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                    <div className="sub_item text-right">
                        <i className="fas fa-gifts fa-2x" />
                        <p>&nbsp;</p>
                    </div>
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">290.000đ</span></p>
                    <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                    </div>
                    <div />
                    </div>
                </div>
                </div>
                {/* content, prduct sale of */}
                {/* content, hot category */}
                <div className="div_pr2 bg_div">
                <h2 className="text-center"># DANH MỤC NỔI BẬT</h2>
                <div className="hr_title" />
                <div className="gr_category row">
                    {/* list product */}
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Thức ăn tăng trưởng</p>
                    </div>
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Hạt khô</p>
                    </div>
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr17.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Kem trị ve rận</p>
                    </div>
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr14.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Đồ chơi</p>
                    </div>
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Royal cabin</p>
                    </div>
                    <div className="category  col-lg-2 col-xs-2 col-sm-3 col-6">
                    <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                    <p className="ct_name text-center">Lồng vận chuyển</p>
                    </div>
                </div>
                </div>
                {/*end content, hot category */}
                {/* content, detail hot category :dog*/}
                <div className="div_pr3 row margin_div_top bg_div">
                {/* content, detail menu hot category :dog*/}
                <div className="col-sm-12 col-xl-2 detail_wrap">
                    <div className="detail">
                    <Link to='shopcun' style={{textDecoration: 'none'}}><h2 className="text-center">SHOP CÚN CƯNG</h2></Link>
                    
                    <div className="list_ct margin_div_top">
                        <a href="#">Thức ăn cho cún</a>
                        <a href="#">Pate cho cún</a>
                        <a href="#">Thức ăn khô</a>
                        <a href="#">Quần áo cho cún</a>
                        <a href="#">Vòng cổ</a>
                        <a href="#">Đồ chơi , phụ kiện</a>
                        <a href="#">Vật dụng</a>
                        <a href="#">Bình sữa</a>
                    </div>
                    <img src="./pic/list_dog.png" className="margin_div_top rs" alt="Cinque Terre"/>
                    </div>
                </div>
                {/* content, detail menu hot category :dog*/}
                {/* content, content hot category :dog*/}
                <div className="col-sm-12 col-xl-10">
                    {/* content, carousel producer of hot category :dog*/}
                    <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <div id="carousel_producer" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="row">
                                <div style={{backgroundImage: 'url("./pic/prd1.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd2.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd3.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd4.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd5.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd6.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div style={{backgroundImage: 'url("./pic/prd7.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd8.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd9.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd10.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd11.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd12.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                            </div>
                            <a className="carousel-control-prev redirect_custom" href="#carousel_producer" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-style="display: none;" />
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next redirect_custom" href="#carousel_producer" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-style="display: none;" />
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                        {/*End carousel*/}
                    </div>
                    </div>
                    {/*end content, carousel producer of hot category :dog*/}
                    {/* content, product of hot category :dog*/}
                    <div className="row gr_product">
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Castrang</p></Link>
                        <p className="gr_price text-center"> <span className="new">56.000đ</span>
                        </p>
                        <div className=" text-center">
                            <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Lồng vận chuyển</p></Link>
                        <p className="gr_price text-center"> <span className="new">290.000đ</span>
                        </p>
                        <div className=" text-center">
                            <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr6.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đồ chơi trêu cún</p></Link>
                        <p className="gr_price text-center"> <span className="new">220.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr13.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Hạt khô</p></Link>
                        <p className="gr_price text-center">&nbsp; <span className="new">440.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr16.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Thuốc nhoz</p></Link>
                        <p className="gr_price text-center"> <span className="new">123.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">111.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">10.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr17.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"><span className="new">227.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">200.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">110.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">220.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">330.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    </div>
                    {/* content, product of hot category :dog*/}
                </div>
                {/* content, content hot category :dog*/}
                </div>

                <div className="div_pr3 row margin_div_top bg_div">
                {/* content, detail menu hot category :dog*/}
                <div className="col-sm-12 col-xl-2 detail_wrap detail_wrap2"style={{backgroundColor: '#fbdcf3 !important'}}>
                    <div className="detail">
                    <Link to='shopcun' style={{textDecoration: 'none'}}><h2 style={{backgroundColor: '#cc75a1 !important'}} className="text-center">SHOP MÈO CƯNG</h2></Link>
                    
                    <div className="list_ct margin_div_top">
                        <a href="#">Thức ăn cho mèo</a>
                        <a href="#">Pate cho mèo</a>
                        <a href="#">Thức ăn khô</a>
                        <a href="#">Quần áo cho mèo</a>
                        <a href="#">Vòng cổ</a>
                        <a href="#">Đồ chơi , phụ kiện</a>
                        <a href="#">Vật dụng</a>
                        <a href="#">Bình sữa</a>
                    </div>
                    <img src="./pic/list_dog.png" className="margin_div_top rs" alt="Cinque Terre"/>
                    </div>
                </div>
                {/* content, detail menu hot category :dog*/}
                {/* content, content hot category :dog*/}
                <div className="col-sm-12 col-xl-10">
                    {/* content, carousel producer of hot category :dog*/}
                    <div className="row d-flex align-items-center">
                    <div className="col-12">
                        <div id="carousel_producer" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="row">
                                <div style={{backgroundImage: 'url("./pic/prd1.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd2.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd3.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd4.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd5.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd6.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <div className="row">
                                <div style={{backgroundImage: 'url("./pic/prd7.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd8.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd9.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd10.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd11.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                                <div style={{backgroundImage: 'url("./pic/prd12.jpg")'}} className="col d-flex align-items-center justify-content-center">
                                </div>
                            </div>
                            </div>
                            <a className="carousel-control-prev redirect_custom" href="#carousel_producer" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-style="display: none;" />
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next redirect_custom" href="#carousel_producer" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-style="display: none;" />
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                        {/*End carousel*/}
                    </div>
                    </div>
                    {/*end content, carousel producer of hot category :dog*/}
                    {/* content, product of hot category :dog*/}
                    <div className="row gr_product">
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Castrang</p></Link>
                        <p className="gr_price text-center"> <span className="new">56.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr5.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Lồng vận chuyển</p></Link>
                        <p className="gr_price text-center"> <span className="new">290.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr6.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Đồ chơi trêu mèo</p></Link>
                        <p className="gr_price text-center"> <span className="new">220.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr13.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Hạt khô</p></Link>
                        <p className="gr_price text-center">&nbsp; <span className="new">440.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr16.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Thuốc nhoz</p></Link>
                        <p className="gr_price text-center"> <span className="new">123.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">111.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">10.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr17.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"><span className="new">227.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">200.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr22.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">110.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">220.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    <div className="product col-lg-2 col-xs-2 col-sm-4 col-6">
                        <img src="./pic/pr24.jpg" className alt="Cinque Terre" />
                        <Link to="sanpham" style={{textDecoration: 'none', color: '#000'}} ><p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p></Link>
                        <p className="gr_price text-center"> <span className="new">330.000đ</span>
                        </p>
                        <div className=" text-center">
                        <Link to ="/sanpham"><button type="button" className="btn bt_product btn-xs">Chọn mua</button></Link>
                        </div>
                    </div>
                    </div>
                    {/* content, product of hot category :dog*/}
                </div>
                {/* content, content hot category :dog*/}
                </div>
                
                {/* content, detail hot category :dog*/}
                {/* content, tips */}
                <div className="div_tip d-inline-flex flex-fill">
                <div className="inline">
                    <div className="tip flex-fill">
                        <div className="wrap_part_tip_1">
                        <img src="./pic/pr25.png" className alt="Cinque Terre" />
                        </div>
                        <div className="wrap_2_tip wrap_2_tip_1">
                        <p className="pr_name text-center">DINH DƯỠNG</p>
                        <div className=" text-center">
                            <Link to ="./tintuc"><button type="button" className="btn bt_product btn-xs">Tìm hiểu</button></Link>
                            
                        </div>
                        </div>
                    </div>
                    <div className="tip flex-fill">
                        <div className="wrap_part_tip_2">
                        <img src="./pic/pr26.png" className alt="Cinque Terre" />
                        </div>
                        <div className="wrap_2_tip wrap_2_tip_2">
                        <p className="pr_name text-center">HUẤN LUYỆN</p>
                        <div className=" text-center">
                        <Link to ="./tintuc"><button type="button" className="btn bt_product btn-xs">Tìm hiểu</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="inline">
                <div className="tip flex-fill">
                    <div className="wrap_part_tip_3">
                    <img src="./pic/pr27.png" className alt="Cinque Terre" />
                    </div>
                    <div className="wrap_2_tip wrap_2_tip_3">
                    <p className="pr_name text-center">ĐỜI SỐNG</p>
                    <div className=" text-center">
                    <Link to ="./tintuc"><button type="button" className="btn bt_product btn-xs">Tìm hiểu</button></Link>
                    </div>
                    </div>
                </div>
                <div className="tip flex-fill">
                    <div className="wrap_part_tip_4">
                    <img src="./pic/pr28.png" className alt="Cinque Terre" />
                    </div>
                    <div className="wrap_2_tip wrap_2_tip_4">
                    <p className="pr_name text-center">HỎI ĐÁP</p>
                    <div className=" text-center">
                    <Link to ="./tintuc"><button type="button" className="btn bt_product btn-xs">Tìm hiểu</button></Link>
                    </div>
                    </div>
                </div>
                </div>
                
                {/*end content, tips */}
                </div>
                {/* content, prduct sale of */}
            </div>      
        )
    }
}