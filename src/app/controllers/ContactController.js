const Contact = require('../models/Contact');
const { mutipleMongooseToObject } = require('../../util/mongoose_contact');
const { mongooseToObject } = require('../../util/mongoose_contact');

class SolarSystemController {
    // [GET] /contact
    index(req, res, next) {
        Contact.find({})
            .then(contacts => {
                res.render('contact', { 
                    contacts: mutipleMongooseToObject(contacts)
                });
            })
            .catch(next);
    }

    // [GET] /contact/:slug
    show(req, res, next) {
        // res.send('SYSTEM DETAIL-'+ req.params.slug);
        Contact.findOne({ slug: req.params.slug })
            .then(contact => {
                res.render('contact/show', { 
                    contact: mongooseToObject(contact) 
                });
            })
            .catch(next);
    }

    // [GET] /contact/create
    create(req, res, next) {
        res.render('contact/create');
    }
    
    // [GET] /contact/edit
    edit(req, res, next) {
        Contact.findById(req.params.id)
        .then(contact => res.render('contact/edit', {
            contact: mongooseToObject(contact)
        }))
        .catch(next);
    }

    // [DELETE] /contact/:id
    destroy(req, res, next) {
        Contact.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /contact/:id/force
    forceDestroy(req, res, next) {
        Contact.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    
    // [PUT] /contact/:id
    update(req, res, next) {
        Contact.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/contact'))
            .catch(next)
    }
    
    // [PATCH] /contact/:id/restore 
    restore(req, res, next) {
        Contact.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(error => {});
    }

    // [POST] /contact/store
    store(req, res, next) {
        const contact = new Contact(req.body);
        contact.save()
            .then(() => res.redirect('/contact'))
            .catch(error => {});
    }
}

module.exports = new SolarSystemController();
