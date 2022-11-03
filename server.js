/// //////////////////////////////////////////
// Import Our Dependencies
/// //////////////////////////////////////////
const express = require('express')
const middleware = require('./utils/middleware')
const db = require('./models/db')
const app = express()
db.on('open', () => {
    console.log('Connected to Mongo')
})


/// //////////////////////////////////////////////////
// Middleware
/// //////////////////////////////////////////////////
middleware(app)

/// /////////////////////////////////////////
// Routes
/// /////////////////////////////////////////
app.use('/shows', require('./controllers/routeController'))
// send all "/shows" routes to main router (in a more advanced app we could have multiple routers for multiple paths)
app.use('/user', require('./controllers/authController'))
// send all "/user" routes to auth router
app.get('/', (req, res) => {
    res.render('Home.jsx')
})
/* END Middleware */

// Tell the app to listen on a port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`))
