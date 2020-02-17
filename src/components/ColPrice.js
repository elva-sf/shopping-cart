import React from "react";
import PropTypes from "prop-types";

function ColPrice(props) {
  const { price, currency } = props;
  return (
    <div className="col-price">
      <span className="product-price">{price}</span>
      <span className="product-currency currency">{currency}</span>
    </div>
  );
}

// propTypes
ColPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};

export default ColPrice;
