var makeConnection = require("./db")
var express = require("express")
var app = express()
makeConnection()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    }
    return next();
});

app.get("/", (req, res) => { res.send("Connected") })
app.listen(3000, () => {
    console.log("listening on port number 3000");
})