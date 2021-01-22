const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user.route.js");
const app = express();
const todosRoute = require("./routes/todos.route.js");
const loginRoute = require("./routes/login.route.js");

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/task", todosRoute);

app.use("/api/user", userRoute);

app.use("/api/login", loginRoute);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
