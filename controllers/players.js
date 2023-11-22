
const pool = require("../data/config.js");

const getAllPlayers = (request, response, next) => {
    pool.query(`SELECT * FROM player`, (error, result) => {
        if (error){
            throw error;
        }
        // Allows you to check the result - on the webpage:
        //response.send(result);
        // Or, by looking in the server console:
        //console.log(result);
        response.render("../views/pages/players", {
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
        response.render("../views/pages/singleplayer", {
            player: result[0],
            query: request.query,
            title: "ESports Championship: players"
        });
    });
};


const addPlayer = (request, response, next) => {
    pool.query("INSERT INTO player SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect("/players?messageToShow=Added " + request.body.name + " to players#player"+id)
    });
};

const editPlayer = (request, response, next) => {
    const id = request.params.id;
    pool.query(`UPDATE player SET ? WHERE player_id = ?`, [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.redirect("/players?messageToShow=Edited " + request.body.name + "#player"+id)
    }); 
};

const deletePlayer = (request, response, next) => {
    const id = request.params.id;
    const playerName = request.query.playerName;

    pool.query(`DELETE FROM player WHERE player_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect("/players?messageToShow=Deleted " + playerName)
    });
};


// You should add controller methods to render forms, too...
module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlayer,
    editPlayer,
    deletePlayer
};