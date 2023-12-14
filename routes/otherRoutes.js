const { response } = require("express");
const otherController = require("../controllers/otherController.js");

const router = (app) => {
    app.get("/", otherController.renderHome);
};

module.exports = router;
