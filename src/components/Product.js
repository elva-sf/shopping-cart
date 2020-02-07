import React from "react";

function Product(props) {
  const { name, code, image, currency, price } = props.products;

  return (
    <React.Fragment>
      <div className="col-product">
        <figure className="product-image">
          <img src={require(`../img/${image}`)} alt="Shirt" />
          <div className="product-description">
            <h1>{name}</h1>
            <p className="product-code">Product code {code}</p>
          </div>
        </figure>
      </div>
      <div className="col-quantity">
        <button className="count">-</button>
        <input type="text" className="product-quantity" value="3" />
        <button className="count">+</button>
      </div>
      <div className="col-price">
        <span className="product-price">{price}</span>
        <span className="product-currency currency">{currency}</span>
      </div>
      <div className="col-total">
        <span className="product-price">60</span>
        <span className="product-currency currency">{currency}</span>
      </div>
    </React.Fragment>
  );
}

export default Product;
