const {Receiver, User} =require('../models')
class ReceiverController {
    
    static getReceivers(req, res) {
        Receiver.findAll({
                include: [ User ]
            })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static info(req, res) {
        const id = +req.params.id;

        Receiver.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { NomorExcel, NomorKasbon, Penerima, UserId } = req.body;

        Receiver.create({
            NomorExcel, NomorKasbon, Penerima, UserId
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

        Receiver.destroy({
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
        const { NomorExcel, NomorKasbon, Penerima, UserId } = req.body

        Receiver.update({
            NomorExcel, NomorKasbon, Penerima, UserId
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

module.exports = ReceiverController