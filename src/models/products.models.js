const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products ORDER BY products.id');
  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return result;
};

const insert = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

   const placeholders = Object.keys(product)
     .map((_key) => '?')
     .join(', ');
 
   const [{ insertId }] = await connection.execute(
     `INSERT INTO products (${columns}) VALUE (${placeholders})`,
     [...Object.values(product)],
   );

   return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};