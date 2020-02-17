import React from "react";
import PropTypes from "prop-types";

function ColQuantity(props) {
  const { name, id, quantity } = props;

  return (
    <React.Fragment>
      <button
        id={id}
        className="count"
        disabled={quantity < 1}
        onClick={() => props.handleRemove(id)}
      >
        -
      </button>
      <input
        id={id}
        type="number"
        name={name}
        className="product-quantity"
        value={quantity}
        readOnly
      />
      <button id={id} className="count" onClick={() => props.handleAdd(id)}>
        +
      </button>
    </React.Fragment>
  );
}

// propTypes
ColQuantity.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired
};

export default ColQuantity;
