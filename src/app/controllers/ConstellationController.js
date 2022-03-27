const Constellation = require('../models/Constellation');
const { mutipleMongooseToObject } = require('../../util/mongoose_guide');
const { mongooseToObject } = require('../../util/mongoose_guide');

class ConstellationController {
    // [GET] /constellation
    index(req, res, next) {
        Constellation.find({})
            .then(constellations =>
                res.render('constellation', { constellations: mutipleMongooseToObject(constellations) })
            )
            .catch(next);
    }

    // [GET] /constellation/:slug
    show(req, res, next) {
        // res.send('SYSTEM DETAIL-' + req.params.slug);
        Constellation.findOne({ slug: req.params.slug })
            .then(constellation =>
                res.render('constellation/show', { constellation: mongooseToObject(constellation) })
            )
            .catch(next);
    }

    // [GET] /constellation/create
    create(req, res, next) {
        res.render('constellation/create');
    }
    
    // [GET] /constellation/edit
    edit(req, res, next) {
        Constellation.findById(req.params.id)
        .then(constellation => res.render('constellation/edit', {
            constellation: mongooseToObject(constellation)
        }))
        .catch(next);
    }

    // [DELETE] /constellation/:id
    destroy(req, res, next) {
        Constellation.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /constellation/:id/force
    forceDestroy(req, res, next) {
        Constellation.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [PUT] /constellation/:id
    update(req, res, next) {
        Constellation.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/constellation'))
            .catch(next)
    }
    
    // [PATCH] /constellation/:id/restore 
    restore(req, res, next) {
        Constellation.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(error => {});
    }

    // [POST] /constellation/store
    store(req, res, next) {
        const constellation = new Constellation(req.body);
        constellation.save()
            .then(() => res.redirect('/me/stored/constellation'))
            .catch(error => {});
    }
}

module.exports = new ConstellationController();
