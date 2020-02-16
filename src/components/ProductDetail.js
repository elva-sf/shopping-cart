import React from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  console.log(props);
  const {
    name,
    price,
    code,
    imageDet,
    currency,
    id,
    description
  } = props.product;

  return (
    <React.Fragment>
      <main
        className="main"
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <section
          className="summary"
          style={{
            flex: "none",
            padding: "40px 0px ",
            backgroundColor: "unset"
          }}
        >
          <img
            style={{ width: "351px" }}
            src={require(`../img/${imageDet}`)}
            alt="Producto"
          />
        </section>
        <aside
          className="summary
        "
          style={{ margin: "auto 10px" }}
        >
          <ul
            className="summary-items wrapper border"
            style={{ padding: "32px 0" }}
          >
            <Link to="/">
              <p className="product-code" style={{ textAlign: "end" }}>
                X
              </p>
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
          <p>{description}</p>
          <br />
          <br />
          <hr />
          <p className="product-code">Product code {code}</p>
          <br />
          <Link to="/">
            <button id={id} type="submit" onClick={() => props.handleAdd(id)}>
              Add to cart
            </button>
          </Link>
        </aside>
      </main>
    </React.Fragment>
  );
}

export default ProductDetail;
