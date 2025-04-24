let containers = [];

export function newContainer(type, content) {
    containers.push([crypto.randomUUID(), type, content]);
}

export function getContainers() {
    return containers;
}