const connection = require('./connection');

const insert = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (current_timestamp());',
  );
  return insertId;
};

const remove = async (id) => {
  const [result] = await connection.execute(
    `DELETE FROM StoreManager.sales
    WHERE id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  insert,
  remove,
};
