import React from "react";
import "../stylesheet/index.css";
import Products from "./Products";
import Summary from "./Summary";
import ProductDetail from "./ProductDetail";
import apiProducts from "../services/products.js";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currency: "€"
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.renderProductDetail = this.renderProductDetail.bind(this);
  }

  componentDidMount() {
    apiProducts().then(products => {
      this.setState({
        products: products
      });
    });
  }

  // handle functions
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

  // renders
  renderProductDetail(props) {
    const routeId = props.match.params.id;
    const product = this.state.products.find(item => item.id === routeId);

    if (product === undefined) {
      return <h1 className="main">Producto no encontrado</h1>;
    } else {
      return (
        <ProductDetail
          product={product}
          handleAdd={this.handleAdd}
          quantity={product.quantity}
        />
      );
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/product/:id" render={this.renderProductDetail} />
      </Switch>
    );
  }
}

// propTypes
App.propTypes = {
  products: PropTypes.array,
  currency: PropTypes.string,
  handleRemove: PropTypes.func,
  handleAdd: PropTypes.func,
  renderProductDetail: PropTypes.func
};

export default App;
