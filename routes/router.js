const { response } = require("express");
const gamesController = require("../controllers/games.js")
const playersController = require("../controllers/players.js")

const router = (app) => {

    app.get("/", (request, response) => {
        response.render("../views/pages/index.ejs");
    });

    app.get("/games", gamesController.getAllGames);

    app.get("/games/add", (request, response) => {
        response.render("../views/pages/addGame.ejs",{
            "title": "Add a game"
        });
    })

    app.post("/games/add", [gamesController.performGameValidation, gamesController.addGame]);

    app.get("/games/edit/:id", (request, response) => {
        response.render("../views/pages/editGame.ejs",{
            "title": "Edit a game",
            "gameName": request.query.gameName,
            "gameDuration": request.query.gameDuration,
            "gameSize": request.query.gameSize,
            "gameId": request.params["id"]
        });
    })

    app.post("/games/edit/:id", [gamesController.performGameValidation, gamesController.editGame]);

    app.get("/games/delete/:id", (request, response) => {
        response.render("../views/pages/confirmDelete.ejs", {
            gameId: request.params["id"],
            gameName: request.query["gameName"]
        })
    });



    app.post("/games/delete/:id", gamesController.deleteGame);

    app.get("/games/:id", gamesController.getGameById);

    app.get("/players", playersController.getAllPlayers);

    app.get("/players/:id", playersController.getPlayerById);
    app.get("/players/add", playersController.addPlayer);
    app.post("/players/add", playersController.getAllPlayers);


    // app.get("/*", (request, response) => {
    //     response.send("<h1>Page not found</h1>");
    // })
};

// Make the router available externally
module.exports = router;