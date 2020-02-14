import React from "react";
import ColProduct from "./ColProduct";
import ColQuantity from "./ColQuantity";
import ColPrice from "./ColPrice";
import ColTotal from "./ColTotal";
import { Link } from "react-router-dom";

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
        handleCart={props.handleAdd}
      />
      <ColPrice price={price} currency={currency} />
      <ColTotal currency={currency} price={price} quantity={quantity} />
    </React.Fragment>
  );
}

export default Product;
