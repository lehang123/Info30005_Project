var mongoose = require('mongoose');
var mongooseUrl =  "mongodb+srv://lehang:ap7NCXjKcPzLt3Ap@cluster0-xmtxf.mongodb.net/test?retryWrites=true&w=majority"

var connectDB = async()=>{
    await mongoose.connect(mongooseUrl, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log('db is connected!');

};

module.exports = connectDB;