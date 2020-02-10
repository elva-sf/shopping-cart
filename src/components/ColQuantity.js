import React from "react";
import ReactDOM from "react-dom";

class ColQuantity extends React.Component {
  constructor(props) {
    console.log(props.params);
    super(props);
    this.numberInput = React.createRef();
  }

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
          className="count"
          disabled={quantity < 1}
          onClick={() => {
            this.handleRemove(id);
          }}
        >
          -
        </button>
        <input
          id={id}
          type="text"
          name={name}
          ref={input => {
            this.title = input;
          }}
          /* ref={this.numberInput} */
          className="product-quantity"
          value={quantity}
        />
        <button
          className="count"
          onClick={() => {
            this.handleAdd(id);
          }}
        >
          +
        </button>
      </React.Fragment>
    );
  }
}
/* 
  renderDetails(id, name) {
if (this.props[id]) {
      return (
        <React.Fragment>
          <button className="count" onClick={this.handleRemove.bind(this)}>
            -
          </button>
          <input
            type="number"
            name={name}
            className="product-quantity"
            value={this.props.count}
          />
          <button className="count" onClick={this.handleAdd.bind(this)}>
            +
          </button>
        </React.Fragment>
      );
    }
  } */

/*     
render() {return (
      <div className="col-quantity">
        {this.renderDetails("01", "Shirt")}
    {this.renderDetails("02", "Mug")}
        {this.renderDetails("03", "Cap:")} 
      </div>
    ); 
  }*/

export default ColQuantity;
