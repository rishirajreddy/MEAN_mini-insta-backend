const mongoose = require('mongoose');
require('dotenv').config();
// const url = "mongodb://localhost:27017/test";
// const url = "mongodb+srv://mrrobot:mrrobot@empmngmt.cs734kp.mongodb.net/mini-insta?retryWrites=true&w=majority";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser : true, useUnifiedTopology: true
    });
        console.log("Connected to mongodb")
}

module.exports = connectDB;
