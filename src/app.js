const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const path = require("path");

/* middleware  */
app.use(cors());
app.use(express.json());

// set the view engine to ejs
// app.set("view engine", "ejs");

/* here will be all the imports routes */
const usersRoute = require("./routes/v1/usersRoute");
const appRoute = require("./routes/v1/appRoutes");
const productsRoute = require("./routes/v1/productsRoute");
const ordersRoute = require("./routes/v1/ordersRoute");
const paymentRoute = require("./routes/v1/paymentRoute");
const reviewsRoute = require("./routes/v1/reviewsRoute");
const blogsRoute = require("./routes/v1/blogsRoute");
const teamsRoute = require("./routes/v1/teamsRoute");

/* here will be the all the routes */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

/* Here is the User Routes */
app.use("/api/v1/", usersRoute);
app.use("/api/v1/", appRoute);
app.use("/api/v1/", productsRoute);
app.use("/api/v1/", ordersRoute);
app.use("/api/v1/", paymentRoute);
app.use("/api/v1/", reviewsRoute);
app.use("/api/v1/", blogsRoute);
app.use("/api/v1/", teamsRoute);

/* not found routes */
app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "Not Route Found " });
});

/* Server Error Routes */
app.use((err, req, res, next) => {
  res
    .status(500)
    .send({ success: false, message: "Something Broke of your API" });
});

module.exports = app;
