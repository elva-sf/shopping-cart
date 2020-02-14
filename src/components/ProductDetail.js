import React from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { name, code, imageDet } = props.product;
  return (
    <React.Fragment>
      <main className="summary-total wrapper">
        <section className="products">
          <ul className="products-list">
            <li className="product row">
              <img src={require(`../img/${imageDet}`)} alt="Producto" />
            </li>
          </ul>
        </section>
        <aside className="summary">
          <h1>{name}</h1>
          <p className="product-code">Product code {code}</p>
        </aside>
        <Link to="/">
          <button type="button" className="btn btn-outline-info">
            <i className="far fa-hand-point-left"></i> Volver al listado
          </button>
        </Link>
      </main>
    </React.Fragment>
  );
}

export default ProductDetail;
