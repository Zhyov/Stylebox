function write(data) {
    document.getElementById("page").innerHTML = data;
};

function readFile(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {write(data)})
        .catch(error => {document.getElementById("page").innerHTML = error;});
};

function checkUrl() {
    let path = window.location.pathname;
    let match = path.match(/^\/wiki\/([^\/]+)$/);
    if (match) {let file = match[1]; readFile(`/api/wiki/${file}`)}
}


window.addEventListener("load", checkUrl);