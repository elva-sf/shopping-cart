import React from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  console.log(props);
  const { name, price, code, image, currency, id } = props.product;

  function handleCart(id) {
    props.handleAdd(id);
  }

  return (
    <React.Fragment>
      <main className="summary-total wrapper">
        <section className="products">
          <ul className="products-list">
            <li className="product row">
              <img src={require(`../img/${image}`)} alt="Producto" />
            </li>
          </ul>
        </section>
        <aside className="summary">
          <ul className="summary-items wrapper border">
            <Link to="/">
              <p className="product-code">X</p>
            </Link>
            <br />
            <br />
            <li>
              <h1 className="summary-items-number">{name}</h1>
              <span className="summary-items-price">
                {price} <span className="currency">{currency}</span>
              </span>
            </li>
          </ul>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales
            semper elit sit amet interdum. Praesent volutpat sed elit vel
            consectetur. Nulla tempus tincidunt ex, sit amet semper ipsum
            imperdiet varius. In rutrum aliquam nisl, sagittis faucibus felis
            bibendum id.
          </p>
          <br />
          <br />
          <hr />
          <p className="product-code">Product code {code}</p>
          <br />
          <Link to="/">
            <button id={id} type="submit" onClick={handleCart}>
              Add to cart
            </button>
          </Link>
        </aside>
      </main>
    </React.Fragment>
  );
}

export default ProductDetail;
