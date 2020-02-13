import React from "react";

function Summary(props) {
  const { quantity, currency, id, price } = props;
  const total = props.products.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const mugProduct =
    props.products[1] !== undefined ? props.products[1] : false;
  console.log(mugProduct.quantity);
  let mugDiscount =
    mugProduct.quantity % 2 === 0 && mugProduct.quantity !== 0
      ? Math.round(mugProduct.price * mugProduct.quantity * -0.5)
      : null;

  return (
    <aside className="summary">
      <h1 className="main">Order Summary</h1>
      <ul className="summary-items wrapper border">
        <li>
          <span className="summary-items-number">{quantity} Items</span>
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
            <span>-3{currency}</span>
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
              {total}
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
