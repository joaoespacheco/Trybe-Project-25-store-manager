module.exports = (req, res, next) => {
  const sales = req.body;
  const validator = sales.every((sale) => Object.keys(sale).includes('quantity'));

  if (validator) {
    return next();
  }

  return res.status(400).json({ message: '"quantity" is required' });
};
