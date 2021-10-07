const express = require("express");
const router = require("express-promise-router")();
const controllerPDF = require("./../controller/pdfCreation");

// router.route('/check-reg').put(controllerPDF.check_exists);
router.route("/check-reg").put(controllerPDF.check_exists);

router.route("/create-pdf").put(controllerPDF.createPdf);

router.route("/fetch-pdf/:id").get(controllerPDF.fetchPdf);

router.route("/fetch-pdf/").get(controllerPDF.fetchPdf);

module.exports = router;
