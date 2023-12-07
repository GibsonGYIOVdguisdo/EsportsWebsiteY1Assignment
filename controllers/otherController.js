
const { response } = require("express");
const pool = require("../data/config.js");
const { resolveInclude } = require("ejs");



const renderHome = (request, response, next) => {

    results = {};
    pool.query(`SELECT * FROM player`, (error1, result1) => {
        if (error1){
            throw error1;
        }
        results["players"] = result1;
        pool.query(`SELECT * FROM game`, (error2, result2) => {
            if (error2){
                throw error2;
            }
            results["games"] = result2;
            response.render("../views/pages/index.ejs", {
                results: results,
                query: request.query,
                title: "Home",
            });
        })
    })
};

const undoChange = (request, response, next) => {
    if (!parseInt(request.params["id"])){
        console.log("asd")
        if (request.params["category"] === "game"){
            pool.query(`DELETE FROM game WHERE game_id = ?`,request.params["id"], (error2, result2) => 
            {
            })
        }
    }
}

module.exports = {
    renderHome,
    undoChange
}