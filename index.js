const express = require('express');
const userRouter = require("./routes/user");
const logResReq = require("./middleware/index");
const { connectDb } = require("./connection");

const app = express();
const PORT = 3000;

// Database connection
connectDb("mongodb://127.0.0.1:27017/mydb");
console.log("Database connected");


// Middleware - Apply to the app, not the router
// app.use(express.json()); // For parsing JSON request bodies
app.use(logResReq);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Also good to have this


// Routes
app.use('/api/users', userRouter); // Use the imported router

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});