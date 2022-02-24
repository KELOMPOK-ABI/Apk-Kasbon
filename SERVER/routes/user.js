const userRoute =require('express').Router();
const UserController = require('../controller/UserController.js')

userRoute.get('/', UserController.getUsers)
userRoute.get('/info/:user', UserController.info)
userRoute.post('/create', UserController.create)
userRoute.delete('/delete/:user', UserController.delete)
userRoute.put('/update/:user', UserController.update)

module.exports = userRoute