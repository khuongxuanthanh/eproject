const newsRouter = require('./news');
const meRouter = require('./me');
const contactRouter = require('./contact');
const solarsystemRouter = require('./solarsystem');
const constellationRouter = require('./constellation');
const siteRouter = require('./site');

function route(app) {
    app.use('/solarsystem', solarsystemRouter);

    app.use('/constellation', constellationRouter);

    app.use('/news', newsRouter);

    app.use('/contact', contactRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
