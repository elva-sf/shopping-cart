import React from "react";

function ColTotal(props) {
  const { currency } = props;
  return (
    <div className="col-total">
      <span className="product-price">60</span>
      <span className="product-currency currency">{currency}</span>
    </div>
  );
}

export default ColTotal;
