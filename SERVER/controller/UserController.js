const {User} =require('../models')

class UserController {
    
    static getUsers(req, res) {
        User.findAll()
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static info(req, res) {
        const id = +req.params.id;

        User.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { username, email, password } = req.body;

        User.create({
            username, email, password
        })
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err)
            })
    }
    static delete(req, res) {
        const id = +req.params.id

        User.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1) {
                    res.json({
                        message: `Id ${id} deleted!`
                    })
                } else {
                    res.json({
                        message: `Id ${id} not deleted!`
                    })
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
    static update(req, res) {
        const id = +req.params.id
        const { username, email, password } = req.body

        User.update({
            username, email, password
        }, {
            where: { id }
        })
            .then(result => {
                if(result[0] === 1){
                    res.json({
                        message: `Id ${id} has been updated!`
                    })
                }else{
                    res.json({
                        message: `Id ${id} has been not updated`
                    })
                }
            })
            .catch(err => {
                res.json(err)
            })
    }
}

module.exports = UserController