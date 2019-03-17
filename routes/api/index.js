const path = require("path");
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const logRoutes = require("./logRoutes");

//user routes
router.use("/users", userRoutes);
//log routes
router.use("/logs", logRoutes);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  

module.exports = router;
