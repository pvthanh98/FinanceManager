const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const port = 8080;

const indexController = require("./controllers/index");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', indexController.getIndex);

server.listen(port, ()=>console.log(`server is running on port ${port}`));