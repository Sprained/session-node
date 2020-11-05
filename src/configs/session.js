const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true }
)

module.exports = session({
    secret: process.env.SECRETE,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true
    }
})