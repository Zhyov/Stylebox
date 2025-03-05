let express = require("express");
let fs = require("fs");
let path = require("path");

let app = express();
let rootDirectory = path.join(__dirname, "../");
let wikiDirectory = path.join(rootDirectory, "wiki");

app.use(express.static(rootDirectory));

app.get("/Main_Page", (request, response) => {
    let viewPath = path.join(rootDirectory, "index.html");
    response.sendFile(viewPath);
});

app.get("/Style", (request, response) => {
    let viewPath = path.join(rootDirectory, "tests/layout.html");
    response.sendFile(viewPath);
});

app.get("/wiki", (request, response) => {
    fs.readdir(wikiDirectory, (error, files) => {
        if (error) {
            response.status(500).send("Unable to scan directory: " + error);
        }
        let sbFiles = files.filter(file => file.endsWith(".sb"));
        response.json(sbFiles);
    });
});

app.get("/wiki/:page", (request, response) => {
    let viewPath = path.join(rootDirectory, "index.html");
    response.sendFile(viewPath);
});

app.get("/api/wiki/:page", (request, response) => {
    let page = request.params.page + ".sb";
    let pagePath = path.join(wikiDirectory, page);
    fs.readFile(pagePath, "utf8", (error, data) => {
        if (error) {
            return response.status(404).send("File not found: " + error);
        }
        response.send(data);
    });
});

const PORT = 9526;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});