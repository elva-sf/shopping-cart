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
  handleRemove(id) {
    this.setState({
      quantity: this.state.quantity - 1
    });
    /*     const pos = this.state.products.find(product => product.id === id);
    if (pos === 1) {
      this.state.products[0].this.setState({
        quantity: this.state.products.quantity - 1
      });
    } else if (pos === 2) {
      this.state.products[1].this.setState({
        quantity: this.state.products.quantity - 1
      });
    } else if (pos === 3) {
      this.state.products[2].this.setState({
        quantity: this.state.products.quantity - 1
      });
    } */
  }
  handleAdd(id) {
    this.setState({
      quantity: this.state.quantity + 1
    });
    /*  const pos = this.state.products.find(product => product.id === id);
    if (pos === 1) {
      this.state.products[0].this.setState({
        quantity: this.state.products.quantity + 1
      });
    } else if (pos === 2) {
      this.state.products[1].this.setState({
        quantity: this.state.products.quantity + 1
      });
    } else if (pos === 3) {
      this.state.products[2].this.setState({
        quantity: this.state.products.quantity + 1
      });
    } */
  }

  render() {
    console.log(this.state.products);
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
