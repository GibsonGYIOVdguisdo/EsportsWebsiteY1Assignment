const { response } = require("express");
const gamesController = require("../controllers/games.js")
const playersController = require("../controllers/players.js")

const router = (app) => {

    app.get("/", (request, response) => {
        response.render("../views/pages/index.ejs");
    });

    app.get("/games", gamesController.getAllGames);

    app.get("/games/add", gamesController.addGamePage);

    app.post("/games/add", [gamesController.performGameValidation, gamesController.addGame]);

    app.get("/games/edit/:id", gamesController.editGamePage);

    app.post("/games/edit/:id", [gamesController.performGameValidation, gamesController.editGame]);

    app.get("/games/delete/:id", gamesController.deleteGamePage);

    app.post("/games/delete/:id", gamesController.deleteGame);

    app.get("/games/:id", gamesController.getGameById);

    app.get("/players", playersController.getAllPlayers);

    app.get("/players/add", playersController.addPlayerPage);

    app.post("/players/add", [playersController.performPlayerValidation, playersController.addPlayer]);

    app.get("/players/edit/:id", playersController.editPlayerPage);

    app.post("/players/edit/:id", [playersController.performPlayerValidation, playersController.editPlayer]);

    app.get("/players/delete/:id", playersController.deletePlayerPage);

    app.post("/players/delete/:id", playersController.deletePlayer);

    app.get("/players/:id", playersController.getPlayerById);


    // app.get("/*", (request, response) => {
    //     response.send("<h1>Page not found</h1>");
    // })
};

// Make the router available externally
module.exports = router;