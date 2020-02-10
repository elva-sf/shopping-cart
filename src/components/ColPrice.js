import React from "react";

function ColPrice(props) {
  const { price, currency } = props;
  return (
    <div className="col-price">
      <span className="product-price">{price}</span>
      <span className="product-currency currency">{currency}</span>
    </div>
  );
}

export default ColPrice;
