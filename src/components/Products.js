import React from "react";
import Product from "./Product";

function Products(props) {
  /* console.log(props); */
  var products = props.products.map((product, index) => {
    return (
      <li key={product.id} className="product row">
        <Product
          index={index}
          product={product}
          quantity={props.quantity}
          handleRemove={props.handleRemove}
          handleAdd={props.handleAdd}
        />
      </li>
    );
  });
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
        {products}
        {/*    {props.products.map(product => {
          return (
            <li key={product.id} className="product row">
              <Product
                product={product}
                value={props.value}
                handleRemove={props.handleRemove}
                handleAdd={props.handleAdd}
              />
            </li>
          );
        })} */}
      </ul>
    </section>
  );
}

export default Products;
