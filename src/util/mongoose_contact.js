module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map(contacts => contacts.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};