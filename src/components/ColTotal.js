import React from "react";
import PropTypes from "prop-types";

function ColTotal(props) {
  const { currency, price, quantity } = props;
  return (
    <div className="col-total">
      <span className="product-price">{price * quantity}</span>
      <span className="product-currency currency">{currency}</span>
    </div>
  );
}

// propTypes
ColTotal.propTypes = {
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ColTotal;
