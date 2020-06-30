const express = require("express");

const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const RegisterController = require('./controllers/RegisterController');
const PostController = require('./controllers/PostController');

routes.post('/sessions', SessionController.create);
routes.post('/register', RegisterController.create);
routes.post('/post', PostController.crete);
routes.post('/adress', RegisterController.createadress);


   
module.exports = routes;