import React from "react";
import "../stylesheet/App.css";
import Products from "./Products";
import Summary from "./Summary";
import ProductDetail from "./ProductDetail";
import apiProducts from "../services/products.js";
import { Route, Switch } from "react-router-dom";

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
    this.renderProductDetail = this.renderProductDetail.bind(this);
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

  // render
  renderProductDetail(props) {
    console.log(props.match.params.id);
    const routeId = props.match.params.id;
    const product = this.state.products.find(item => item.id === routeId);
    console.log(product);

    if (product === undefined) {
      return <h1 className="main">Producto no encontrado</h1>;
    } else {
      return <ProductDetail product={product} />;
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

export default App;
