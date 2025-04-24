let counter = 0;
let citations = [];

export function incrementCitationCounter() {
    counter++;
    return counter;
}

export function getCitationCount() {
    return counter;
}

export function newCitation(index, content) {
    citations.push([crypto.randomUUID(), index, content]);
}

export function getCitations() {
    return citations;
}