const { response } = require("express");
const gamesController = require("../controllers/games.js")

const router = (app) => {

    app.get("/", (request, response) => {
        response.render("../views/pages/index.ejs");
    });

    app.get("/games", gamesController.getAllGames);

    app.get("/games/:id", gamesController.getGameById);

    app.get("/*", (request, response) => {
        response.send("<h1>Page not found</h1>");
    })
};

// Make the router available externally
module.exports = router;