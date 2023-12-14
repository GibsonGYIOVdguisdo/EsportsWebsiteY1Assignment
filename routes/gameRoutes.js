const { response } = require("express");
const gamesController = require("../controllers/games.js");

const router = (app) => {
    app.get("/games", gamesController.getAllGames);

    app.get("/games/add", gamesController.addGamePage);

    app.post("/games/add", [
        gamesController.performGameValidation,
        gamesController.addGame,
    ]);

    app.get("/games/edit/:id", gamesController.editGamePage);

    app.post("/games/edit/:id", [
        gamesController.performGameValidation,
        gamesController.editGame,
    ]);

    app.get("/games/delete/:id", gamesController.deleteGamePage);

    app.post("/games/delete/:id", gamesController.deleteGame);

    app.get("/games/:id", gamesController.getGameById);
};

// Make the router available externally
module.exports = router;
