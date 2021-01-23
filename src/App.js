import React, { Component } from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Menu_header from './component/common/header_top';
import Search from './component/common/header_search';
// unlogin
import Menu_header_non from './component/common/header_top_nonlog';
import Search_non from './component/common/header_search_nonelog';

import Item_slide from './component/common/form/header_item_slide';
import Item from './component/common/form/header_item';
import Footer from './component/common/footer';

import Home from './component/index';
import View_product from './component/view_product';
import View_new from './component/view_new';
import Shopping_cart from './component/shopping_cart';
import Shop_cat from './component/shop_cat';
import Shop_dog from './component/shop_dog';
import Sale from './component/sale';
import News from './component/news';
import Cart_manager from './component/cart_manager';



//import page
// import Home from './view/components/page/home';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/khach">
                    <Menu_header_non/>
                    <Search_non/>
                    <Item_slide/>
                    <Home/>
                </Route>
                <Route path="/sanpham">
                    <Menu_header />
                    <Search/>
                    <Item/>
                    <View_product/>
                </Route>
                <Route path="/doctin">
                    <Menu_header />
                    <Search/>
                    <Item/>
                    <View_new/>
                </Route>
                <Route path="/giohang">
                    <Menu_header />
                    <Search/>
                    <Shopping_cart/>
                </Route>
                <Route path="/shopmeo">
                    <Menu_header />
                    <Search/>
                    <Item/>
                    <Shop_cat/>
                </Route>
                <Route path="/shopcun">
                    <Menu_header />
                    <Search/>
                    <Item/>
                    <Shop_dog/>
                </Route>
                <Route path="/giamgia">
                    <Menu_header />
                    <Search/>
                    <Item_slide/>
                    <Sale/>
                </Route>
                <Route path="/tintuc">
                    <Menu_header />
                    <Search/>
                    <Item/>
                    <News/>
                </Route>
                <Route path="/donhang">
                    <Menu_header />
                    <Search/>
                    <Cart_manager/>
                </Route>
                <Route path="/">
                    <Menu_header />
                    <Search/>
                    <Item_slide/>
                    <Home/>
                </Route>
            </Switch>
            
            {/* <Item_slide/> */}
            {/* <Home/> */}
            {/* <View_product/> */}
            {/* <View_new/> */}
            {/* <Shopping_cart/> */}
            {/* <Shop_cat/> */}
            {/* <Sale/> */}
            {/* <News/> */}
            <Footer/>
        </Router>
    );
}

export default App;