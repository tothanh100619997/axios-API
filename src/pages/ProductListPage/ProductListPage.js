import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {  actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';  


class ProductListPage extends Component {
   
    componentDidMount() {     
        this.props.fetchAllProduct();     
    }
    onDelete = (id) => {
        this.props.onDeleteProduct(id);

    }
    

    render() {

        var { products } = this.props;
      
        return (


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to="/product/add" className="btn btn-info">
                    Thêm sản phẩm
                </Link>
                <ProductList  >
                    {this.ShowProductList(products)}
                </ProductList>
            </div>


        )
    }
    ShowProductList = (products) => {
        var result = null;
        if (products.length > 0) {

            result = products.map((product, index) => {

                return (
                    <ProductItem
                        index={index}
                        key={index}
                        product={product}
                        onDelete={this.onDelete}
                    ></ProductItem>
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        fetchAllProduct: () =>{
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id)=>{
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);