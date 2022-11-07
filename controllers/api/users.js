const User = require('../../models/user')
const jwt = require('jsonwebtoken')

async function create(req, res) {
    try {
        // Add the user to the database
        const user = await User.create(req.body)
        // Create JWT token
        const token = createJWT(user)
        // Send token to client
        res.json(token)
   } catch (err) {
    res.status(400).json(err)
 }
}

function createJWT(user){
    return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'})
}


// controllers/api/users.js

// Be Sure to add the following
const bcrypt = require('bcrypt');



async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}
function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
  }

module.exports = {
    create,
    login,
    checkToken
  };


