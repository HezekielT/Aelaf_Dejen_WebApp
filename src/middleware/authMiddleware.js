const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const { Admin } = require('../models/user.model')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try {
      token = req.headers.authorization.split(' ')[1] 
      // verify token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      // Get user from the token
      req.user = await Admin.findById(decoded._id).select('-password')

      next()
    } catch(error){
      console.log(error)
      res.status(401).json({ message: error.message });
    }
  }

  if(!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
})

module.exports = { protect }