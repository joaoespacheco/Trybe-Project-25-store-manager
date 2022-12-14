const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity 
    FROM StoreManager.sales AS S INNER JOIN StoreManager.sales_products AS SP
    ON SP.sale_id = S.id`,
  );
  return camelize(result);
};

const findByIdAndColumns = async (saleId, [...columns]) => {
  const [result] = await connection.execute(
    `SELECT ${columns} FROM sales_products WHERE sale_id = ?`,
    [saleId],
  );
  return camelize(result);
};

const findByIdWithDate = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT S.date, SP.product_id, SP.quantity 
    FROM StoreManager.sales AS S INNER JOIN StoreManager.sales_products AS SP
    ON SP.sale_id = S.id
    WHERE S.id = ?`,
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

const remove = async (id) => {
  const [result] = await connection.execute(
    `DELETE FROM StoreManager.sales_products
    WHERE sale_id = ?`,
    [id],
  );
  return result;
};

const update = async (productId, quantity, saleId) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.sales_products 
    SET quantity = ?
    WHERE sale_id = ? AND product_id = ?`,
    [quantity, saleId, productId],
  );
  return result;
};

module.exports = {
  findAll,
  findByIdAndColumns,
  findByIdWithDate,
  insert,
  remove,
  update,
};
