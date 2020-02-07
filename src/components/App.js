import React from "react";
import "../stylesheet/App.css";
import Products from "./Products";
import Summary from "./Summary";
import apiProducts from "../services/products.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    apiProducts().then(products => {
      this.setState({
        products: products
      });
    });
  }

  render() {
    console.log(this.state);

    return (
      <main className="App">
        <Products products={this.state.products} />
        <Summary />
      </main>
    );
  }
}

export default App;
