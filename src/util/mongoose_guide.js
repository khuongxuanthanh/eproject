module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(constellation => constellation.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};