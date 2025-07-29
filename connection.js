const mongoose = require("mongoose");

async function connectDb(url) {
    return mongoose.connect(url)
}

module.exports = {
    connectDb,
};




// mongoose.connect("mongodb://127.0.0.1:27017/mydb")
// .then(()=> console.log("database connected"))
// .catch(()=> console.log("database error!",err))