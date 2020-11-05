const express = require('express');

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');
const session = require('./configs/session');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const TesteController = require('./app/controllers/TesteController');

routes.use(session)

routes.post('/user', UserController.register);
routes.post('/session', SessionController.store);

routes.use(authMiddleware)
routes.get('/teste', TesteController.index);

module.exports = routes;