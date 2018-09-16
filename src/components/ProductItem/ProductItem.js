import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    onDelete =(id) =>{//eslint-disable-next-line
        if(confirm("Bạn có chắc chắn muốn xóa sản phẩm này không ...? ")){
            this.props.onDelete(id);
        }
    }
    render() {
        var {index,product} = this.props;
        var StatusName = product.status? "Còn Hàng" : "Hết Hàng";
        var StatusClass = product.status? "warning" : "default";
        return (

            <tr>
                <td>{index+1}</td>
                <td>{product.id} </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${StatusClass}`}>{StatusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDelete(product.id)}>Xóa</button>
                </td>
            </tr>

        )
    }
}
export default ProductItem;