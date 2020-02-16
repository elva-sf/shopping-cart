import React from "react";
import Product from "./Product";

function Products(props) {
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
            <li key={product.id} className="product row">
              <Product
                product={product}
                handleRemove={props.handleRemove}
                handleAdd={props.handleAdd}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Products;
