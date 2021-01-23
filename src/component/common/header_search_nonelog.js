import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid text-center head_2 bg_div" style={{marginBottom: 0}}>
                <div className="row search">
                <div className="col-lg-9 col-md-8 search_1">
                    <a href="./khach">
                        <div className="logo">    
                            <img src="./pic/logo.png" alt="" />
                        </div>
                    </a>
                    <div className="input-group mb-3 f_search">
                    <input type="text" className="form-control" placeholder="Search" />
                    <div className="input-group-append">
                        <button className="btn bg_it" type="submit"><i className="fas fa-search" /></button>
                    </div>
                    </div>
                </div>
                </div>
            </div>      
        )
    }
}