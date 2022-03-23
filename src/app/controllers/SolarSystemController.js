const Solarsystem = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class SolarSystemController {
    // [GET] /solarSystem
    index(req, res, next) {
        Solarsystem.find({})
            .then(solarsystems => {
                res.render('solarSystem', { 
                    solarsystems: mutipleMongooseToObject(solarsystems)
                });
            })
            .catch(next);
    }

    // [GET] /solarSystem/:slug
    show(req, res, next) {
        // res.send('SYSTEM DETAIL-'+ req.params.slug);
        Solarsystem.findOne({ slug: req.params.slug })
            .then(solarsystem => {
                res.render('solarsystem/show', { 
                    solarsystem: mongooseToObject(solarsystem) 
                });
            })
            .catch(next);
    }

    // [GET] /solarSystem/create
    create(req, res, next) {
        res.render('solarsystem/create');
    }
    
    // [GET] /solarSystem/edit
    edit(req, res, next) {
        Solarsystem.findById(req.params.id)
        .then(solarsystem => res.render('solarsystem/edit', {
            solarsystem: mongooseToObject(solarsystem)
        }))
        .catch(next);
    }

    // [DELETE] /solarSystem/:id
    destroy(req, res, next) {
        Solarsystem.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /solarSystem/:id/force
    forceDestroy(req, res, next) {
        Solarsystem.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [PUT] /solarSystem/:id
    update(req, res, next) {
        Solarsystem.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/solarSystem'))
            .catch(next)
    }
    
    // [PATCH] /solarSystem/:id/restore 
    restore(req, res, next) {
        Solarsystem.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(error => {});
    }

    // [POST] /solarSystem/store
    store(req, res, next) {
        const solarsystem = new Solarsystem(req.body);
        solarsystem.save()
            .then(() => res.redirect('/me/stored/solarsystem'))
            .catch(error => {});
    }
}

module.exports = new SolarSystemController();
