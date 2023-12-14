const { response } = require("express");
const playersController = require("../controllers/players.js");

const router = (app) => {
    app.get("/players", playersController.getAllPlayers);

    app.get("/players/add", playersController.addPlayerPage);

    app.post("/players/add", [
        playersController.performPlayerValidation,
        playersController.addPlayer,
    ]);

    app.get("/players/edit/:id", playersController.editPlayerPage);

    app.post("/players/edit/:id", [
        playersController.performPlayerValidation,
        playersController.editPlayer,
    ]);

    app.get("/players/delete/:id", playersController.deletePlayerPage);

    app.post("/players/delete/:id", playersController.deletePlayer);

    app.get("/players/:id", playersController.getPlayerById);
};

// Make the router available externally
module.exports = router;
