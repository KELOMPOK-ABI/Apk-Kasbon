const receiverRoute =require('express').Router();
const ReceiverController = require('../controller/receiverController')

receiverRoute.get('/', ReceiverController.getReceivers)
receiverRoute.get('/info/:receiver', ReceiverController.info)
receiverRoute.post('/create', ReceiverController.create)
receiverRoute.delete('/delete/:receiver', ReceiverController.delete)
receiverRoute.put('/update/:receiver', ReceiverController.update)

module.exports = receiverRoute
