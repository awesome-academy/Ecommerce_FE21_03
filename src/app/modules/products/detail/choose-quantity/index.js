import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const ProductsDetailChooseQuantity = ({ decrement, increment, value, onChange }) => {

  return (
    <div className="choose-quantity">
      <p className="title-label">Số lượng</p>
      <div className="d-flex">
        <div className="input-group">
          <div className="input-group-prepend">
            <button onClick={decrement} className="btn btn-sm" id="minus-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <input value={value} onChange={e => onChange(+e.target.value)} className="form-control form-control-sm" id="qty_input" type="number" min={1} />
          <div className="input-group-prepend">
            <button onClick={increment} className="btn btn-sm" id="plus-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <button className="btn btn-primary btn-wine">Add to card</button>
      </div>
    </div>
  )
}

export default ProductsDetailChooseQuantity;
