module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(gallery => gallery.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};