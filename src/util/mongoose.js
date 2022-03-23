module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(solarsystem => solarsystem.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};