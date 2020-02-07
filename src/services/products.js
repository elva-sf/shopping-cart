export default () => {
  return fetch("http://localhost:3000/api/products.json")
    .then(response => response.json())
    .then(responseData => responseData.products);
};
