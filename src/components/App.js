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
      count: 0
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
  handleRemove(data) {
    console.log(data);
    let count = this.state.count;
    if (count > 0) {
      this.setState({ count: count - 1 });
    }
  }
  handleAdd(data) {
    console.log(data);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log(this.state);
    return (
      <main className="App">
        <Products
          products={this.state.products}
          count={this.state.count}
          handleRemove={this.handleRemove}
          handleAdd={this.handleAdd}
        />
        <Summary />
      </main>
    );
  }
}

export default App;
