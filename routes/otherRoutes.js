const { response } = require("express");

const router = (app) => {
    app.get("/", (request, response) => {
        response.render("../views/pages/index.ejs");
    });
}

module.exports = router;