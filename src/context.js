import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    handleDetail = () => {
        console.log('hello from details ')
    };

    addToCart = () => {
        console.log('hello from addToCart ')
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }} >{/*<button onClick={this.tester}>test me</button>*/}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductContext = React.createContext();

//Provider
//Consumer

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
