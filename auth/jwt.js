const jwt = require('jsonwebtoken');
const secret = require('../config/config.js');

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.redirect('/login');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decodedToken = jwt.verify(token, secret);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.redirect('/login');
  }
}

module.exports = verifyToken;
