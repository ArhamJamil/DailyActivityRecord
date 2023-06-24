var jwt = require('jsonwebtoken');
const fetchUser = (req , res , next) =>{
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).json({error: forbidden})
    }
    const string = jwt.verify(token,  'JWT_PRIVATE_KEY_ARHAM')

    next()
}

export default fetchUser