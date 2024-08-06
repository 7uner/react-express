import React, { useState } from 'react';

function ProductCardCart({ image, name, description, link, removeItem, updateItemNumber }) {
  const [itemNumber, setItemNumber] = useState(1);

  const handleItemNumberChange = (event) => {
    const newItemNumber = parseInt(event.target.value);
    setItemNumber(newItemNumber);
    updateItemNumber(name, newItemNumber);
  };

  return (
    <div className="card mb-3">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div>
          <a href={link} className="btn btn-primary m-2">
            See More
          </a>
          <select
            value={itemNumber}
            onChange={handleItemNumberChange}
            className="form-select m-2"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button
            onClick={() => removeItem(name)}
            className="btn btn-danger m-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCart;
