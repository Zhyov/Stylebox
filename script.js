let body = document.body;

function write(data) {
    let lines = data.split('\n');
    let content = document.getElementById('content');
    lines.forEach((le, li) => {
        let element = document.createElement('p');
        let addElement = true;
        let words = le.split(' ');
        words.forEach((we, wi) => {
            let chars = we.split('');
            chars.forEach((ce, ci) => {
                if (ce == '\n') {
                    addElement = false;
                }

                if (ce == '*' && ci == 2) {
                    element.classList.add('italic,bold');
                } else if (ce == ' ') {
                    element.innerHTML += '&nbsp;';
                } else {
                    element.innerHTML += ce;
                };
            });
        });
        if (addElement) {
            content.appendChild(element);
        } else {
            element.remove();
        }
        content.innerHTML += '<br>';
    });
};

function readFile(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = '';
            write(data);
        })
        .catch(error => {document.getElementById("content").innerHTML = error;});
};

function fetchFiles() {
    fetch('/pages')
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                let element = document.createElement('a');
                element.href = '#';
                element.innerHTML = file;
                element.onclick = (event) => {
                    console.log('click');
                    event.preventDefault();
                    readFile('/pages/' + file);
                };
                document.getElementById("file-list").appendChild(element);
                document.getElementById("file-list").innerHTML += '<br>';
            });
        })
        .catch(error => {document.getElementById("file-list").innerHTML = error;});
};

function checkUrl() {
    let path = window.location.pathname;
    let match = path.match(/^\/pages\/([^\/]+)$/);
    if (match) {
        let file = match[1];
        readFile('/pages/' + file);
    }
}

window.onload = function() {
    fetchFiles();
    checkUrl();
};