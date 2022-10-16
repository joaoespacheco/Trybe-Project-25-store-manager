const errorMap = {
  BAD_REQUEST: 400,
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
};

const setError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  setError,
};
