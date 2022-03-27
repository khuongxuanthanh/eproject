const New = require('../models/News');
const { mutipleMongooseToObject } = require('../../util/mongoose_new');

class NewsController {
    // [GET] /news
    index(req, res, next) {
        New.find({})
            .then(news => {
                res.render('news', { 
                    news: mutipleMongooseToObject(news)
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
