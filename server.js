const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')

require('dotenv').config();
// connecting
require('./config/database');
const ensureLoggedIn = require('./config/ensureLoggedIn');

const app = express()
const PORT = process.env.PORT || 3001;

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // 2 underscores in the __dirname
app.use(express.static(path.join(__dirname, 'build')))         // 2 underscores in the __dirname


// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// Protect the API routes below from anonymous users
app.use('/api/items',  require('./routes/api/items'));
app.use('/api/orders', require('./routes/api/orders'));









// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})