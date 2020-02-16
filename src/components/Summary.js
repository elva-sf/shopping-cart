import React from "react";

function Summary(props) {
  const { currency } = props;

  // products with discount
  const shirtProduct =
    props.products[0] !== undefined ? props.products[0] : false;
  const mugProduct =
    props.products[1] !== undefined ? props.products[1] : false;

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
  const total = props.products.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const items = props.products.reduce(
    (prev, current) => prev + current.quantity,
    0
  );
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

export default Summary;
