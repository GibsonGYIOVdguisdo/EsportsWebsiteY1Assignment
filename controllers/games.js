// You may need to edit this path.
const { response } = require("express");
const pool = require("../data/config.js");
const gameValidator = require("../data/gameValidation.js");

const performGameValidation = (request, response, next) => {
    const name = request.body.name;
    const duration = request.body.duration;
    const team_size = request.body.team_size;
    const errors = gameValidator.validateGame(name, duration, team_size);
    if (!errors["Name"].length && !errors["Size"].length && !errors["Duration"].length){
        next();
    }
    else{
        response.redirect(`?Name=${errors["Name"]}&Size=${errors["Size"]}&Duration=${errors["Duration"]}`)
    }
};

const convertToItem = (data) => {
    item = {
        "name": data["name"],
        "id": data["game_id"],
        "category": "games",
        "display": [
            ["Team size", data["team_size"]],
            ["Duration", data["duration"]]
        ]
    };
    return(item);
}

const getAllGames = (request, response, next) => {
    pool.query(`SELECT * FROM game`, (error, result) => {
        if (error){
            throw error;
        }
        // Allows you to check the result - on the webpage:
        //response.send(result);
        // Or, by looking in the server console:
        //console.log(result);
        response.render("../views/pages/games", {
            gamesArr: result,
            query: request.query,
            title: "ESports Championship: Games",
        });
    });
};

const getGameById = (request, response, next) => {
    const id = request.params.id;  
    pool.query(`
        SELECT * FROM game
        WHERE game.game_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(convertToItem(result[0]));
        response.render("../views/pages/singleView.ejs", {
            item: convertToItem(result[0]),
            query: request.query,
            title: "ESports Championship: Games"
        });
    });
};

const addGame = (request, response, next) => {
    console.log("not caught");
    const game = {
        "name": request.body.name,
        "duration": request.body.duration,
        "team_size": request.body.team_size
    }

    pool.query("INSERT INTO game SET ?", game, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect("/games?messageToShow=Added " + request.body.name)
    });
};

const editGame = (request, response, next) => {
    const id = request.params.id;
    pool.query(`UPDATE game SET ? WHERE game_id = ?`, [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.redirect("/games?messageToShow=Edited " + request.body.name + "#game"+id)
    }); 
};

const deleteGame = (request, response, next) => {
    const id = request.params.id;
    const gameName = request.query.gameName;

    pool.query(`DELETE FROM game WHERE game_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect("/games?messageToShow=Deleted " + gameName)
    });
};



// You should add controller methods to render forms, too...
module.exports = {
    getAllGames,
    getGameById,
    addGame,
    editGame,
    performGameValidation,
    deleteGame
};