const camelize = require('camelize');
const connection = require('./connection');

const findById = async (saleId, [...columns]) => {
  const [result] = await connection.execute(
    `SELECT ${columns} FROM sales_products WHERE sale_id = ?`,
    [saleId],
  );
  return camelize(result);
};

const insert = async (productId, quantity, saleId) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);`,
    [saleId, productId, quantity],
  );

  return insertId;
};

module.exports = {
  findById,
  insert,
};
