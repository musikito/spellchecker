const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
//load the dict
const data = require("./data");
//load the files
app.use(express.static("/"));



app.liste(port, () => console.log("Server Ready"));
