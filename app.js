var express = require("express");
const cors = require('cors');
var app = express();
var port = process.env.PORT || 80;
app.use(cors({
    origin: '*'
}));
app.listen(port, () => {
    console.log("Server running on port " + port);
}); 

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});