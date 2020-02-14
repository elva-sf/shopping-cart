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
      quantity: 0,
      currency: "€"
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

  // button functions
  handleRemove(id) {
    let tempProduct = [...this.state.products];
    const selectedProduct = tempProduct.find(item => item.id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];
    product.quantity = product.quantity - 1;
    this.setState({
      quantity: product.quantity
    });
  }
  handleAdd(id) {
    let tempProduct = [...this.state.products];
    const selectedProduct = tempProduct.find(item => item.id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];
    product.quantity = product.quantity + 1;
    this.setState({
      quantity: product.quantity
    });
  }

  render() {
    return (
      <main className="App">
        <Products
          products={this.state.products}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
        />
        <Summary
          products={this.state.products}
          quantity={this.state.quantity}
          currency={this.state.currency}
        />
      </main>
    );
  }
}

export default App;
