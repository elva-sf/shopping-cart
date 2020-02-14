import React from "react";

class ColQuantity extends React.Component {
  constructor(props) {
    super(props);
  }
  // button functions
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

export default ColQuantity;
