module.exports = {

    checkMyJWT: function (token) {
        let jwt = require('jsonwebtoken')
        let isTokenValid = jwt.verify(token, process.env.JWT, (err, validJWT) => {
            if(validJWT) {
                return true
            } else {
                return false
            }
        })
        return isTokenValid
    }


}



