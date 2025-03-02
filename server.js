let express = require('express');
let fs = require('fs');
let path = require('path');

let app = express();
const rootDirectory = path.join(__dirname, '/');
const pagesDirectory = path.join(rootDirectory, 'pages');

app.use(express.static(rootDirectory));

app.get('/main', (request, response) => {
    const viewPath = path.join(rootDirectory, 'view.html');
    response.sendFile(viewPath);
});

app.get('/style', (request, response) => {
    const viewPath = path.join(rootDirectory, 'layout.html');
    response.sendFile(viewPath);
});

app.get('/pages', (request, response) => {
    fs.readdir(pagesDirectory, (error, files) => {
        if (error) {
            response.status(500).send('Unable to scan directory: ' + error);
        }
        let sbFiles = files.filter(file => file.endsWith('.sb'));
        response.json(sbFiles);
    });
});

app.get('/pages/:page', (request, response) => {
    const page = request.params.page + '.sb';
    const pagePath = path.join(pagesDirectory, page);
    fs.readFile(pagePath, 'utf8', (error, data) => {
        if (error) {
            response.status(404).send('File not found: ' + error);
        };
        response.send(data);
    });
});

const PORT = 9526;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});