const allProducts = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Martelo",
  },
  {
    id: 3,
    name: "Martelo de ferro",
  },
];

const singleProduct = {
  id: 3,
  name: "Martelo de ferro",
}

const newProduct = {
  name: 'playstation 2'
}

const newProductWithId = {
  id: 4,
  name: 'playstation 2'
}

const saleProductsDb = [
  {
    product_id: 1,
    quantity: 2,
  },
  {
    product_id: 2,
    quantity: 10,
  },
];

const saleProducts = [
  {
    productId: 1,
    quantity: 2,
  },
  {
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  allProducts,
  singleProduct,
  newProduct,
  newProductWithId,
  saleProductsDb,
  saleProducts,
};