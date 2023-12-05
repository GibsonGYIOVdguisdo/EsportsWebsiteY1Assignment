// You may need to edit this path.
const { response } = require("express");
const pool = require("../data/config.js");
const playerValidator = require("../data/playerValidation.js");

const performPlayerValidation = (request, response, next) => {
    const name = request.body.name;
    const email = request.body.email;
    const errors = playerValidator.validatePlayer(name, email);
    if (!errors["Name"].length && !errors["Email"].length){
        next();
    }
    else{
        response.redirect(`?Name=${errors["Name"]}&Email=${errors["Email"]}`)
    }
};

const getAllPlayers = (request, response, next) => {
    pool.query(`SELECT * FROM player ORDER BY name ASC`, (error, result) => {
        if (error){
            throw error;
        }
        // Allows you to check the result - on the webpage:
        //response.send(result);
        // Or, by looking in the server console:
        //console.log(result);
        response.render("../views/pages/players/players", {
            playersArr: result,
            query: request.query,
            title: "ESports Championship: Players",
        });
    });
};

const getPlayerById = (request, response, next) => {
    const id = request.params.id;  
    pool.query(`
        SELECT * FROM player
        WHERE player.player_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        response.render("../views/pages/players/singlePlayer.ejs", {
            player: result[0],
            query: request.query,
            title: "ESports Championship: Players"
        });
    });
};

const addPlayer = (request, response, next) => {
    console.log("not caught");
    const player = {
        "name": request.body.name,
        "email": request.body.email,
    }

    pool.query("INSERT INTO player SET ?", player, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect("/players?messageToShow=Added " + request.body.name)
    });
};

const addPlayerPage = (request, response, next) => {
    response.render("../views/pages/players/addPlayer.ejs",{
        "title": "Add a player"
    });
}

const editPlayer = (request, response, next) => {
    const id = request.params.id;
    pool.query(`UPDATE player SET ? WHERE player_id = ?`, [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.redirect("/players?messageToShow=Edited " + request.body.name + "#player"+id)
    }); 
};

const editPlayerPage = (request, response, next) => {
    response.render("../views/pages/players/editPlayer.ejs",{
        "title": "Edit a player",
        "playerName": request.query.playerName,
        "playerEmail": request.query.playerEmail,
        "playerId": request.params["id"]
    });
}

const deletePlayer = (request, response, next) => {
    const id = request.params.id;
    const playerName = request.query.name;
    console.log(request.params.playerName)
    pool.query(`DELETE FROM player WHERE player_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect("/players/?messageToShow=Deleted " + playerName)
    });
};

const deletePlayerPage = (request, response, next) => {
    response.render("../views/pages/confirmDelete.ejs", {
        category: "players",
        id: request.params["id"],
        name: request.query["playerName"]
    })
}


// You should add controller methods to render forms, too...
module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlayer,
    addPlayerPage,
    editPlayer,
    editPlayerPage,
    performPlayerValidation,
    deletePlayer,
    deletePlayerPage
};