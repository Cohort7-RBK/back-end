const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/user.route.js");
const loginRoute = require("./routes/login.route.js");
const coursesRoute = require("./routes/courses.route.js");
const studentRoute = require("./routes/student.route.js");
const teacherRoute = require("./routes/teacher.route.js");
const classRoute = require("./routes/class.route.js");
const adminRoute = require("./routes/admin.route.js");
const scheduleRoute = require("./routes/schedule.route.js");
const gradeRoute = require("./routes/grade.route.js");


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



app.use("/api/user", userRoute);

app.use("/api/login", loginRoute);
app.use("/api/courses", coursesRoute);
app.use("/api/grade", gradeRoute);

app.use("/api/schedule", scheduleRoute);


app.use("/api/student", studentRoute);

app.use("/api/teacher", teacherRoute);

app.use("/api/class", classRoute);

app.use("/api/admin", adminRoute);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
