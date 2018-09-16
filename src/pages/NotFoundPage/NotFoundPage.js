import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (                         
            
            
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Trang không tồn tại</strong> Xin Vui Lòng Kiểm Tra Địa Chỉ
            </div>
            

        )
    }
}
export default NotFoundPage;