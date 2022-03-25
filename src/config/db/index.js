const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://khuongxuanthanh-t2110e:t2110e*one@eproject-nodejs.kl0sv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!')    ;
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
