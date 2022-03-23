const Solarsystem = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/solarsystem
    storedSolarsystem(req, res, next) {

        Promise.all([Solarsystem.find({}), Solarsystem.countDocumentsDeleted()])
            .then(([solarsystems, deletedCount]) => 
                res.render('me/stored-solarsystem', {
                    deletedCount, 
                    solarsystems: mutipleMongooseToObject(solarsystems),
                })
            )
            .catch(next);
    }

    // [GET] /me/trash/solarsystem
    trashSolarsystem(req, res, next) {
        Solarsystem.findDeleted({})
            .then(solarsystems => 
                res.render('me/trash-solarsystem', {
                    solarsystems: mutipleMongooseToObject(solarsystems)
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
