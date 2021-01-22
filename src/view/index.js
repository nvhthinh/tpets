var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Bootstrap 4 Website Example</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
          {/* font awesome */}
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
          <style dangerouslySetInnerHTML={{__html: "\n        .fakeimg {\n            height: 200px;\n            background: #aaa;\n        }\n    " }} />
          <link rel="stylesheet" href="./css.css" />
          {/* header 1 */}
          <div className="bg_it co_it head_1">
            <nav className="container navbar navbar-expand-sm navbar-light">
              <a className="navbar-brand co_it" href="#">HOTLINE: 1900 6969</a>
              <div className="mb">
                <a className="ico" href="#"><i className="fas fa-receipt" /></a>
                <a className="ico" href="#"><i className="fas fa-cart-arrow-down" /></a>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown no-arrow  user_dis" style={{display: 'none'}}>
                    <img src="./pic/user.png" alt="" />
                    <a className="nav-link co_it nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tên khách hàng</a>
                    {/* Dropdown - User Information */}
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" /> Logout
                      </a>
                    </div>
                  </li>
                  <li className="nav-item" data-toggle="modal" data-target="#modal_gr_login">
                    <a className="nav-link co_it" href="#"><i className="fas fa-sign-in-alt" /> Đăng nhập</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* end header 1 */}
          {/* header 2, logo */}
          <div className="container-fluid text-center head_2 bg_div" style={{marginBottom: 0}}>
            <div className="row search">
              <div className="col-lg-9 col-md-8 search_1">
                <div className="logo">
                  <img src="./pic/logo.png" alt="" />
                </div>
                <div className="input-group mb-3 f_search">
                  <input type="text" className="form-control" placeholder="Search" />
                  <div className="input-group-append">
                    <button className="btn bg_it" type="submit"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 search_2 desk" style={{display: 'none'}}>
                <a href="#"><i className="fas fa-receipt fa-2x" /> <span>kiểm tra đơn hàng</span></a>
                <a href="#"><i className="fas fa-cart-arrow-down fa-2x" /> <span>Giỏ hàng</span></a>
              </div>
            </div>
          </div>
          {/*end header 2, logo */}
          {/* header 2, menu and carousel */}
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
                  <span className="carousel-control-prev-icon" aria-style="display: none;" ="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel_slide" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-style="display: none;" ="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            {/*end header 2, carousel */}
          </div>
          {/*end header 2, menu and carousel */}
          {/* content, include product and category */}
          <div className="container-fluid body_page" style={{marginTop: '30px'}}>
            {/* content, prduct sale of */}
            <div className="div_pr1 bg_div">
              <h2 className="text-center"># KHUYẾN MẠI HOT</h2>
              <div className="hr_title" />
              <div className="gr_product row">
                {/* list product */}
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-ticket-alt fa-2x" />
                    <p>-50%</p>
                  </div>
                  <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Đĩa bay 20cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                  </div>
                </div>
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-gifts fa-2x" />
                    <p>&nbsp;</p>
                  </div>
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product">Chọn mua</button>
                  </div>
                  <div />
                </div>
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-ticket-alt fa-2x" />
                    <p>-50%</p>
                  </div>
                  <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Đĩa bay 20cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                  </div>
                </div>
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-gifts fa-2x" />
                    <p>&nbsp;</p>
                  </div>
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product">Chọn mua</button>
                  </div>
                  <div />
                </div>
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-ticket-alt fa-2x" />
                    <p>-50%</p>
                  </div>
                  <img src="./pic/pr2.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Đĩa bay 20cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                  </div>
                </div>
                <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                  <div className="sub_item text-right">
                    <i className="fas fa-gifts fa-2x" />
                    <p>&nbsp;</p>
                  </div>
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                  <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span></p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product">Chọn mua</button>
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
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
                <div className="category  col-lg-2 col-xs-2 col-sm-3 col-4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                  <p className="ct_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                </div>
              </div>
            </div>
            {/*end content, hot category */}
            {/* content, detail hot category :dog*/}
            <div className="div_pr3 row margin_div_top bg_div">
              {/* content, detail menu hot category :dog*/}
              <div className="col-sm-4 col-xl-2 detail_wrap">
                <div className="detail">
                  <h2 className="text-center">SHOP CÚN CƯNG</h2>
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
                  <img src="./pic/list_dog.png" className="margin_div_top desk" alt="Cinque Terre" style={{display: 'none'}} />
                </div>
              </div>
              {/* content, detail menu hot category :dog*/}
              {/* content, content hot category :dog*/}
              <div className="col-sm-8 col-xl-10">
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
                          <span className="carousel-control-prev-icon" aria-style="display: none;" ="true" />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next redirect_custom" href="#carousel_producer" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-style="display: none;" ="true" />
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
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
                    </div>
                  </div>
                  <div className="product col-lg-2 col-xs-2 col-sm-4 col-4">
                    <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                    <p className="pr_name text-center">Nhà Quả Dâu 38 x 45 x 38cm</p>
                    <p className="gr_price text-center"><span className="old">305.000</span> &nbsp; <span className="new">200.000đ</span>
                    </p>
                    <div className=" text-center">
                      <button type="button" className="btn bt_product btn-xs">Chọn mua</button>
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
              <div className="tip flex-fill">
                <div className="wrap_part_tip_1">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                </div>
                <div className="wrap_2_tip wrap_2_tip_1">
                  <p className="pr_name text-center">DINH DƯỠNG</p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
                  </div>
                </div>
              </div>
              <div className="tip flex-fill">
                <div className="wrap_part_tip_2">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                </div>
                <div className="wrap_2_tip wrap_2_tip_2">
                  <p className="pr_name text-center">HUẤN LUYỆN</p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
                  </div>
                </div>
              </div>
              <div className="tip flex-fill">
                <div className="wrap_part_tip_3">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                </div>
                <div className="wrap_2_tip wrap_2_tip_3">
                  <p className="pr_name text-center">ĐỜI SỐNG</p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
                  </div>
                </div>
              </div>
              <div className="tip flex-fill">
                <div className="wrap_part_tip_4">
                  <img src="./pic/pr1.jpg" className alt="Cinque Terre" />
                </div>
                <div className="wrap_2_tip wrap_2_tip_4">
                  <p className="pr_name text-center">HỎI ĐÁP</p>
                  <div className=" text-center">
                    <button type="button" className="btn bt_product btn-xs">Tìm hiểu</button>
                  </div>
                </div>
              </div>
              {/*end content, tips */}
            </div>
            {/* content, prduct sale of */}
          </div>
          {/*end content, include product and category */}
          {/* footer */}
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
          {/*login Modal*/}
          <div className="modal fade" id="modal_gr_login" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;" ="true">
            {/* <div class="modal fade show" id="detail_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-style="display: none;"="true" style="display: block;"> */}
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#login" role="tab" aria-controls="pills-home" aria-selected="true">ĐĂNG NHẬP</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#register" role="tab" aria-controls="pills-profile" aria-selected="false">ĐĂNG KÍ</a>
                    </li>
                  </ul>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-style="display: none;" ="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="col-sm-12 tab-content">
                      <div className="tab-pane fade show active" id="login">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <div className="col-sm-12">
                            <div className="row">
                              <label>Tên đăng nhập:</label>
                              <input type="text" placeholder="Nhập tên đăng nhập, email hoặc SĐT" className="form-control" />
                            </div>
                            <br />
                            <div className="row">
                              <label>Mật khẩu:</label>
                              <input type="password" className="form-control" />
                            </div>
                            <br />
                            <div className="row text-right modal-footer">
                              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                              <a className="btn btn-custom" href="#">Đăng nhập</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* --- */}
                      <div className="tab-pane fade" id="register">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <div className="col-sm-12">
                            <div className="row">
                              <label>Nhập điện thoại:</label>
                              <input type="text" placeholder="Nhập SĐT" className="form-control" />
                            </div>
                            <br />
                            <div className="row">
                              <label>Mật khẩu:</label>
                              <input type="password" className="form-control" />
                            </div>
                            <br />
                            <div className="row">
                              <label>Xác nhận mật khẩu:</label>
                              <input type="password" className="form-control" />
                            </div>
                            <br />
                            <div className="row text-right modal-footer">
                              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                              <a className="btn btn-custom" href="#">Đăng kí</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });