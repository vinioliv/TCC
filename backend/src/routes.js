const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer.js")

const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const AdvertiserController = require('./controllers/AdvertiserController');
const AdressController = require('./controllers/AdressController')
const PostController = require('./controllers/PostController');
const ImageController = require('./controllers/ImageController');



routes.post('/sessions', SessionController.create);
routes.post('/registeruser', UserController.createuser);
routes.post('/registeradvertiser', AdvertiserController.createadvertiser);
routes.post('/adress', AdressController.createadress);
routes.post('/post',multer(multerConfig).array('file', 5), PostController.crete);

routes.put('/profileimage', multer(multerConfig).single('file'), ImageController.userimage);
routes.put('/advertiserimage', multer(multerConfig).single('file'), ImageController.advertiserimage);










module.exports = routes;