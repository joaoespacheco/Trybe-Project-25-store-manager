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

const allSales = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

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

const saleById = [
  {
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

const updateResult = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 0  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 0
}

const deleteResult = {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: "",
  serverStatus: 2,
  warningStatus: 0,
};

module.exports = {
  allProducts,
  singleProduct,
  newProduct,
  newProductWithId,
  allSales,
  saleProductsDb,
  saleProducts,
  saleById,
  updateResult,
  deleteResult,
};