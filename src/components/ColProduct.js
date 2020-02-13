import React from "react";

function ColProduct(props) {
  const { name, code, image } = props;
  return (
    <div className="col-product">
      <figure className="product-image">
        <img src={require(`../img/${image}`)} alt="Producto" />
        <div className="product-description">
          <h1>{name}</h1>
          <p className="product-code">Product code {code}</p>
        </div>
      </figure>
    </div>
  );
}

export default ColProduct;
