const route = require('express').Router()

route.get('/', (req,res) => {
    res.json({
        message: "Home page"
    })
})

const kasbonRoutes = require('./kasbon')
const userRoutes =require('./user')
const receiverRoutes =require('./receiver')

route.use('/kasbons', kasbonRoutes)
route.use('/users', userRoutes )
route.use('/receivers', receiverRoutes )

module.exports=route

