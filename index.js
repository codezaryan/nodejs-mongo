const express = require('express');
const userRouter = require("./routes/user");
const logResReq = require("./middleware/index");
const { connectDb } = require("./config/connection");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database using .env value
connectDb(); // No need to pass URL manually now

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logResReq);

// Routes
app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





// const express = require('express');
// const userRouter = require("./routes/user");
// const logResReq = require("./middleware/index");
// const { connectDb } = require("./config/connection");

// const app = express();
// const PORT = 3000;

// // Database connection
// connectDb("mongodb://127.0.0.1:27017/mydb");
// console.log("Database connected");


// // Middleware - Apply to the app, not the router
// // app.use(express.json()); // For parsing JSON request bodies
// app.use(logResReq);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); // Also good to have this


// // Routes
// app.use('/api/users', userRouter); // Use the imported router

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });