import React, {Component} from 'react';

import './App.css';

import {Home} from './pages/home';
import {User} from './pages/user';
import {Admin} from './pages/admin';
import {Cart} from './pages/cart';

export class App extends Component {
    constructor() {
        super();

        this.state = {
            activePage: 'homePage',
            products: [
                {status: false, name: 'MacBook pro 2018'},
                {status: false, name: 'Dell xs'},
                {status: false, name: 'Microsoft Surface'}
            ],
            orderedProducts: [],
        }

    }

    changePageToAdmin = () => {
        this.setState({
            activePage: 'adminPage'
        });
    }

    changePageToUser = () => {
        this.setState({
            activePage: 'userPage'
        });
    }

    changePageToHome = () => {
        this.setState({
            activePage: 'homePage'
        });
    }

    changePageToCart = () => {

        this.setState({
            activePage: 'cartPage'
        });

    }

    addProduct = (props) => {

        this.state.products.push({status: false, name: props});
        this.setState({
            products: this.state.products
        });
    }


    addProductToCart = (props) => {

        this.state.products[(this.state.products.indexOf(props))].status = true;
        this.state.orderedProducts.push(props.name);
        this.setState({
            orderedProducts: this.state.orderedProducts,
            products: this.state.products
        });
    }

    render() {
        const {
            activePage,
        } = this.state;

        if (activePage === 'homePage') {
            return (<Home
                changePageToAdmin={this.changePageToAdmin}
                changePageToUser={this.changePageToUser}
            />)
        }

        if (activePage === 'adminPage') {
            return <Admin
                changePageToHome={this.changePageToHome}
                products={this.state.products}
                addProduct={this.addProduct}
            />
        }

        if (activePage === 'userPage') {
            return <User
                changePageToHome={this.changePageToHome}
                changePageToCart={this.changePageToCart}
                addProductToCart={this.addProductToCart}
                products={this.state.products}
            />
        }

        if (activePage === 'cartPage') {
            return <Cart
                changePageToHome={this.changePageToHome}
                orderedProducts={this.state.orderedProducts}
            />
        }
    }
}
