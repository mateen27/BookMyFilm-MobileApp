// requiring the jsonwebtoken
const jwt = require('jsonwebtoken');
// requiring user from the models
const User = require('../models/user');
// For the .env file
require('dotenv').config();

module.exports = (req , res , next) => {
    const { authorization } = req.headers
    // if not logged in
    if ( !authorization ){
        return res.status(401).json({error : "You must be logged in"})
    }
    // if logged in
    else {
        // for getting the token directly
        const token = authorization.replace("Bearer " , "")
        // will verify the token
        jwt.verify(token , process.env.SECRET_KEY , (error , payLoad) => {
            // if error arrises
            if( error ){
                return res.status(401).json({error : 'You must be logged in'})
            }
            // if no error arrises then
            else {
                // if token is correct will take out every detail from the database
                // payload returns {id , iat -> issuedAt} from the database
                // destructuring id from payload
                const { id } = payLoad
                // finding the id from the payLoad
                User.findById(id)
                    // returns a promise
                    .then((userData) => {
                        // userdata is the database object which is stored there
                        // console.log(userData);
                        // want to remove the password
                        // undefined when we dont want to send data further
                        userData.password = undefined
                        req.user = userData
                        next()  
                    })
            }
        })
    }
}