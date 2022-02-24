const { Kasbon, User } =require('../models')

class KasbonController {
    static getKasbons(req, res) {
        Kasbon.findAll(
            {
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

        Kasbon.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    static create(req, res) {
        const { Nomorkasbon ,Bagian ,Penerima , TanggalPersekot, Jumlah, Jumlahdibayar, Uraian, UserId } = req.body;

        Kasbon.create({
            Nomorkasbon ,Bagian ,Penerima , TanggalPersekot, Jumlah, Jumlahdibayar, Uraian, UserId
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

        Kasbon.destroy({
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
        const { Nomorkasbon ,Bagian ,Penerima , TanggalPersekot, Jumlah, Jumlahdibayar, Uraian, UserId } = req.body

        Kasbon.update({
            Nomorkasbon ,Bagian ,Penerima , TanggalPersekot, Jumlah, Jumlahdibayar, Uraian, UserId
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

module.exports= KasbonController