import React from "react";
import PropTypes from "prop-types";

function Summary(props) {
  const { products, currency } = props;

  // products with discount
  const shirtProduct = products[0] !== undefined ? products[0] : false;
  const mugProduct = products[1] !== undefined ? products[1] : false;

  // discounts
  const mugDiscount =
    mugProduct.quantity % 2 === 0
      ? Math.round(mugProduct.price * mugProduct.quantity * -0.5)
      : mugProduct.price * (mugProduct.quantity - 1) * -0.5;
  const shirtDiscount =
    shirtProduct.quantity >= 3
      ? ((shirtProduct.price * -5) / 100) * shirtProduct.quantity
      : 0;

  // sumatories
  const total = products.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const items = products.reduce((prev, current) => prev + current.quantity, 0);
  const totalWithDiscounts = total + mugDiscount + shirtDiscount;

  return (
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">{items} Items</span>
          <span className="summary-items-price">
            {total}
            <span className="currency">{currency}</span>
          </span>
        </li>
      </ul>
      <div className="summary-discounts wrapper-half border">
        <h2>Discounts</h2>
        <ul>
          <li>
            <span>2x1 Mug offer</span>
            <span>
              {mugDiscount}
              {currency}
            </span>
          </li>
          <li>
            <span>x3 Shirt offer</span>
            <span>
              {shirtDiscount}
              {currency}
            </span>
          </li>
          <li>
            <span>Promo code</span>
            <span>0{currency}</span>
          </li>
        </ul>
      </div>
      <div className="summary-total wrapper">
        <ul>
          <li>
            <span className="summary-total-cost">Total cost</span>
            <span className="summary-total-price">
              {totalWithDiscounts}
              {currency}
            </span>
          </li>
        </ul>
        <button type="submit">Checkout</button>
      </div>
    </aside>
  );
}

// propTypes
Summary.propTypes = {
  products: PropTypes.array.isRequired,
  currency: PropTypes.string.isRequired
};

export default Summary;
