import React from "react";
import PropTypes from "prop-types";

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

// propTypes
ColProduct.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ColProduct;
