import React, { Component } from "react";
import logo from './logo.svg';
import './view/lib/css.css';
// <!-- custom on page shoppingCart -->
// import './view/lib/shoppingCart.css';

import $ from 'jquery';
// import './view/lib/js.js';

// https://pro.fontawesome.com/releases/v5.10.0/css/all.css

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

// import common
import Menu_header from './view/components/common/header_top';
import Menu_search from './view/components/common/header_search';
import Menu_item_slide from './view/components/common/header_item_slide';
import Menu_item from './view/components/common/header_item';
import Footer from './view/components/common/footer';

//import page
import Home from './view/components/page/home';
import News from './view/components/page/news';
import Pay from './view/components/page/pay';
import Sale from './view/components/page/sale';
import ShopCat from './view/components/page/shop_cat';
import ShoppingCat from './view/components/page/shopping_cat';
import ViewNew from './view/components/page/view_new';
import ViewProduct from './view/components/page/view_product';
function App() {
    return (
    <Router>
        <div className = "App">
            <Menu_header/>
            <Menu_search/>
            <Menu_item_slide/>
           
            <Switch>
                <Route path="/tintuc">
                    <News />
                </Route>

                <Route path="/hoadon">
                    <Pay />
                </Route>
                <Route path="/khuyenmai">
                    <Sale />
                </Route>
                <Route path="/shopmeo">
                    <ShopCat />
                </Route>
                <Route path="/giohang">
                    <ShoppingCat />
                </Route>
                <Route path="/lamsao">
                    <ViewNew />
                </Route>
                <Route path="/chitietsanpham">
                    <ViewProduct />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            
            <Footer/>
        </div>
    </Router>
    );
}

export default App;