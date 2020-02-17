import React from "react";
import ColProduct from "./ColProduct";
import ColQuantity from "./ColQuantity";
import ColPrice from "./ColPrice";
import ColTotal from "./ColTotal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Product(props) {
  const { id, name, code, image, quantity, currency, price } = props.product;
  const route = `/product/${id}`;
  return (
    <React.Fragment>
      <Link to={route}>
        <ColProduct image={image} name={name} code={code} />
      </Link>
      <ColQuantity
        id={id}
        product={props.product}
        name={name}
        quantity={quantity}
        handleRemove={props.handleRemove}
        handleAdd={props.handleAdd}
      />
      <ColPrice price={price} currency={currency} />
      <ColTotal currency={currency} price={price} quantity={quantity} />
    </React.Fragment>
  );
}

// propTypes
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default Product;
