import React from 'react'

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                <li className="breadcrumb-item"><a href="/">Sản phẩm</a></li>
                <li className="breadcrumb-item active" aria-current="page">Rượu vang đỏ</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb
