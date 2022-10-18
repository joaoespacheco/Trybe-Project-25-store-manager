const schemas = require('./schemas');

const validateId = (id) => {
  const { error } = schemas.idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  return { type: null, message: '' };
};

const validateNameProduct = (name) => {
  const { error } = schemas.addProductSchema.validate({ name });
  if (error) {
  return { type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long' }; 
  }

  return { type: null, message: '' };
};

const validateNewSale = (sale) => {
  const { error } = schemas.addSaleSchema.validate(sale);
  if (error && error.message.includes('quantity')) {
    return {
      type: 'INVALID_VALUE',
      message: '"quantity" must be greater than or equal to 1',
    };
  }

  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNameProduct,
  validateNewSale,
};