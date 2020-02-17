import React from "react";
import PropTypes from "prop-types";

class ColQuantity extends React.Component {
  constructor(props) {
    super(props);
  }
  // handle functions
  handleRemove(id) {
    this.props.handleRemove(id);
  }
  handleAdd(id) {
    this.props.handleAdd(id);
  }

  render() {
    const { name, id, quantity } = this.props;
    return (
      <React.Fragment>
        <button
          id={id}
          className="count"
          disabled={quantity < 1}
          onClick={this.handleRemove.bind(this, id)}
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
        <button
          id={id}
          className="count"
          onClick={this.handleAdd.bind(this, id)}
        >
          +
        </button>
      </React.Fragment>
    );
  }
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
