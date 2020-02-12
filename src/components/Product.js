import React from "react";
import ColProduct from "./ColProduct";
import ColQuantity from "./ColQuantity";
import ColPrice from "./ColPrice";
import ColTotal from "./ColTotal";

function Product(props) {
  const { id, name, code, image, currency, price } = props.product;
  return (
    <React.Fragment>
      <ColProduct image={image} name={name} code={code} />
      <ColQuantity
        id={id}
        index={props.index}
        product={props.product}
        name={name}
        quantity={props.quantity}
        handleRemove={props.handleRemove}
        handleAdd={props.handleAdd}
      />
      <ColPrice price={price} currency={currency} />
      <ColTotal currency={currency} />
    </React.Fragment>
  );
}

export default Product;
