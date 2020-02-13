import React from "react";

function ColTotal(props) {
  const { currency, price, quantity } = props;
  return (
    <div className="col-total">
      <span className="product-price">{price * quantity}</span>
      <span className="product-currency currency">{currency}</span>
    </div>
  );
}

export default ColTotal;
