function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Se rompio todo!');
}

module.exports = { errorHandler };