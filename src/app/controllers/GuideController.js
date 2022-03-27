const Constellation = require('../models/Constellation');
const { mutipleMongooseToObject } = require('../../util/mongoose_guide');

class GuideController {
    // [GET] /me/stored/constellation
    storedConstellations(req, res, next) {

        Promise.all([Constellation.find({}), Constellation.countDocumentsDeleted()])
            .then(([constellations, deletedCount]) => 
                res.render('me/stored-constellation', {
                    deletedCount, 
                    constellations: mutipleMongooseToObject(constellations),
                })
            )
            .catch(next);
    }
  
    // [GET] /me/trash/constellation
    trashConstellations(req, res, next) {
        Constellation.findDeleted({})
            .then(constellations => 
                res.render('me/trash-constellation', {
                    constellations: mutipleMongooseToObject(constellations)
                }),
            )
            .catch(next);
    }
}

module.exports = new GuideController();
