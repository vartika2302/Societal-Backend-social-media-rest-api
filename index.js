const express = require("express");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//MongoDB connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to users page"); 
});

app.listen(8800, () => {
  console.log("Backend server is running at port 8800");
});
