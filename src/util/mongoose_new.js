module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(news => news.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};