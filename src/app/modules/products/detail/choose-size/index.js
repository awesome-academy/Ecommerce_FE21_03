import React from 'react';
import { Input } from 'reactstrap';

const ProductsDetailChooseSize = () => {
  return (
    <div className="choose-size">
      <p className="title-label">Kích cỡ</p>
      <Input type="select" name="select" id="exampleSelect" className="custom-select my-1 mr-sm-2">
        <option>Loại nhỏ</option>
        <option>Loại to</option>
      </Input>
    </div>
  )
}

export default ProductsDetailChooseSize;
