import React from "react";
import Product from "./Product";

function Products(props) {
  console.log(props);
  return (
    <section className="products">
      <h1 className="main">Shopping cart</h1>
      <ul className="products-list tableHead">
        <li className="products-list-title row">
          <div className="col-product">Product details</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-price">Price</div>
          <div className="col-total">Total</div>
        </li>
      </ul>
      <ul className="products-list">
        {props.products.map(product => {
          return (
            <li className="product row">
              <Product key={product.id} products={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Products;
