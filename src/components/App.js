import React from "react";
import "../stylesheet/App.css";
import Products from "./Products";
import Summary from "./Summary";
import apiProducts from "../services/products.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      quantity: 0
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    apiProducts().then(products => {
      this.setState({
        products: products
      });
    });
  }
  //helpers
  handleRemove() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  }
  handleAdd() {
    /* let value = this.state.value;
    this.setState({ [value]: value + 1 }); */
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  render() {
    console.log(this.state);
    return (
      <main className="App">
        <Products
          products={this.state.products}
          quantity={this.state.quantity}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
        />
        <Summary />
      </main>
    );
  }
}

export default App;
