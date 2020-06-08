const express = require("express");
const server = express();

// encontrar arquivos
server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

//configurar caminhos da minha aplicacao
// pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html");
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
})

server.get("/search", (req, res) => {
    return res.render("search-results.html") ;  
})

server.listen(3000);