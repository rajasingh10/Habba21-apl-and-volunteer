const express = require("express");
const router = require("express-promise-router")();
const volunteer = require("./../controller/volunteer");

// router.route('/check-reg').put(controllerPDF.check_exists);
// router.route('/check-reg').put(controllerPDF.check_exists);
router.route("/check-reg").post(volunteer.check_exists);

router.route("/add-volunteer").post(volunteer.register);
module.exports = router;
