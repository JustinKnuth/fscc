const jwt = require('jsonwebtoken')
const TOKEN_KEY = 'brucewillisarmageddonlivtylersadmovie'

// The next parameter is a callback function that express passes in
const restrict = (req, res, next) => {
    try {
      // Access the authorization key from the header  
      const token = req.headers.authorization.split(' ')[1]
      // use jwt library verify method to check if header token is based on TOKEN key
      const data = jwt.verify(token, TOKEN_KEY)
      // If data returns a payload, next function, otherwise it'll error out
        // res.locals.user = data
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send('Unauthorized')
    }
}

module.exports = restrict