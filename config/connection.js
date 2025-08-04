require("dotenv").config();
const mongoose = require("mongoose");

async function connectDb() {
    const uri = process.env.MONGO_URI;

    try {
        await mongoose.connect(uri); // no need for extra options anymore
        console.log("Database connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

module.exports = { connectDb };






// const mongoose = require("mongoose");

// async function connectDb(url) {
//     return mongoose.connect(url)
// }

// module.exports = {
//     connectDb,
// };