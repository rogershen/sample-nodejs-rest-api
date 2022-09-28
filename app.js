var express = require("express");
var app = express();
var port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("Server running on port " + port);
}); 

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});