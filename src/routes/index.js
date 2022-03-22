const newsRouter = require('./news');
const meRouter = require('./me');
const solarsystemRouter = require('./solarsystem');
const siteRouter = require('./site');

function route(app) {
    app.use('/solarsystem', solarsystemRouter);

    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
