import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

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

// propTypes
Products.propTypes = {
  products: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default Products;
