import * as Types from './../constants/ActionType';
import apiCaller from './../utils/apiCaller';
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return apiCaller("products", "GET", null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return apiCaller(`products/${id}`, "DELETE", null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        return apiCaller('products', 'POST', product).then(res => {
            dispatch(actAddProduct(product));
        });
    }

}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
export const actGetProductRequest =(id)=>{
    return dispatch =>{
        return apiCaller(`products/${id}`,'GET',null).then(res=>{
            
            dispatch(actGetProduct(res.data))

        })
    }
}
export const actGetProduct =(product) =>{
    
    return{
        
        type:Types.EDIT_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product)=>{
    return dispatch =>{
        return apiCaller(`products/${product.id}`, 'PUT',product).then(res=>{
            dispatch(actUpdateProduct(res.data))
        });
    }
}
export const actUpdateProduct =(product) =>{
    return{
        type:Types.UPDADE_PRODUCT,
        product
    }
}