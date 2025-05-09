const catchAllHandler = (req, res) => {
  const error = new Error(`Cannot ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
  console.error(error);
};

export default catchAllHandler;
