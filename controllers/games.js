// You may need to edit this path.
const pool = require("../data/config.js");

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
            title: "ESports Championship: Games"
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
        response.render("../views/pages/singleGame", {
            game: result[0],
            query: request.query,
            title: "ESports Championship: Games"
        });
    });
};


const addGame = (request, response, next) => {
    console.log("INSERT GAME: ");
    console.log(request.body);
    pool.query("INSERT INTO game SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.send(`Added ${request.body.name} to the database.`);
    });
};

const editGame = (request, response, next) => {
    const id = request.params.id;
    console.log(request.body);
    pool.query(`UPDATE game SET ? WHERE game_id = ?`, [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.send(`Edited game: ${request.body.name} in the database.`);
    }); 
};

const deleteGame = (request, response, next) => {
    const id = request.params.id;

    pool.query(`DELETE FROM game WHERE game_id = ?`, id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.send(`Deleted game: ${request.body.name} from the database.`);
    });
};



// You should add controller methods to render forms, too...
module.exports = {
    getAllGames,
    getGameById,
    addGame,
    editGame,
    deleteGame
};