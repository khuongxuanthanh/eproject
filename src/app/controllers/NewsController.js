const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    // [GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('news', { 
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('news detail!!!');
    }
}

module.exports = new NewsController();
