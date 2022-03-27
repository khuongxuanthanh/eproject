const Gallery = require('../models/Gallery');
const { mutipleMongooseToObject } = require('../../util/mongoose_gallery');
const { mongooseToObject } = require('../../util/mongoose_gallery');

class GalleryController {
    // [GET] /gallery
    index(req, res, next) {
        Gallery.find({})
            .then(gallerys => {
                res.render('gallery', { 
                    gallerys: mutipleMongooseToObject(gallerys)
                });
            })
            .catch(next);
    }

    // [GET] /gallery/:slug
    show(req, res, next) {
        // res.send('SYSTEM DETAIL-'+ req.params.slug);
        Gallery.findOne({ slug: req.params.slug })
            .then(gallery => {
                res.render('gallery/show', { 
                    gallery: mongooseToObject(gallery) 
                });
            })
            .catch(next);
    }

    // [GET] /gallery/create
    create(req, res, next) {
        res.render('gallery/create');
    }
    
    // [GET] /gallery/edit
    edit(req, res, next) {
        Gallery.findById(req.params.id)
        .then(gallery => res.render('gallery/edit', {
            gallery: mongooseToObject(gallery)
        }))
        .catch(next);
    }

    // [DELETE] /gallery/:id
    destroy(req, res, next) {
        Gallery.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /gallery/:id/force
    forceDestroy(req, res, next) {
        Gallery.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [PUT] /gallery/:id
    update(req, res, next) {
        Gallery.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/gallery'))
            .catch(next)
    }
    
    // [PATCH] /gallery/:id/restore 
    restore(req, res, next) {
        Gallery.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(error => {});
    }

    // [POST] /gallery/store
    store(req, res, next) {
        const gallery = new Gallery(req.body);
        gallery.save()
            .then(() => res.redirect('/gallery'))
            .catch(error => {});
    }
}

module.exports = new GalleryController();
