let counter = 0;

export function incrementCitationCounter() {
    counter++;
    return counter;
}

export function getCitationCount() {
    return counter;
}