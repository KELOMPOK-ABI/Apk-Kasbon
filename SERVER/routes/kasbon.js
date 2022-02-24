const kasbonRoute =require('express').Router();
const KasbonController = require('../controller/KasbonController')

kasbonRoute.get('/', KasbonController.getKasbons)
kasbonRoute.get('/info/:kasbon', KasbonController.info)
kasbonRoute.post('/create', KasbonController.create)
kasbonRoute.delete('/delete/:kasbon', KasbonController.delete)
kasbonRoute.put('/update/:kasbon', KasbonController.update)

module.exports = kasbonRoute
