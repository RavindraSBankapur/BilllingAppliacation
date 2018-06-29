import React, { Component } from 'react';
import ProductList from "../containers/productlist";
import {Products} from './../resources/products';
import Header from "./header";
import Footer from "./footer";

class Dashboard extends Component{

    constructor(props){
        super(props)
        this.state= {
            suggestedProducts: []
        }
    }

    render(){
        return(
            <div className="root" >
                <div><Header/></div>
                <div><h3>Please Choose product & Enter The Required number of Quantities </h3></div>
                <div><ProductList prodList={Products}/></div>
                <div><Footer/></div>
            </div>
        );
    }

}
export default Dashboard;