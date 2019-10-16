'use strict'
var gNextId = 101;
var gProjects = createProjects();


function createProjects() {
    return [
        createProject(gNextId++, 'MineSweeper', 'A great game to strengthen time wasting skills'),
        createProject(gNextId++, 'Touch-Nums', 'Nice way to get kids learn how to count'),
    ]
}

function createProject(id, name, desc) {
    return {
        id,
        name,
        desc,
        "url": `projs/${id}`,
        "publishedAt": Date.now(),
        "labels": ["Matrixes", "keyboard events"],
        "img": `projs/${id}/${id}.png`
    }
}

function getProjects() {
    return gProjects;
}

