const express = require("express");
const bodyParser = require("body-parser");

const playerRouter = require("./routes/playerRoutes.js")
const gameRouter = require("./routes/gameRoutes.js")
const otherRouter = require("./routes/otherRoutes.js")

const port = 3000;
const app = express();
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

playerRouter(app);
gameRouter(app);
otherRouter(app);

app.use("/public", express.static('public'))


app.set("view engine", "ejs");



// Start the server
const server = app.listen(port, (error) => {
    if (error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Server listening on port ${server.address().port}`);
});

