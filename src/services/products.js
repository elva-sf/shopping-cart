export default () => {
  return fetch("https://elva-sf.github.io/shopping-cart/api/products.json")
    .then(response => response.json())
    .then(responseData => responseData.products);
};
