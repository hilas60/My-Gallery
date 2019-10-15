'use strict'
var gNextId = 101;
var gProjects = createProjects();


function createProjects() {
    return [
        createProject(gNextId++, 'MineSweeper'),
        createProject(gNextId++, 'Touch-Nums'),
    ]
}

function createProject(id, name) {
    return {
        id,
        name,
        "desc": "Game", 
        "url": `projs/${id}`,
        "publishedAt": Date.now(),
        "labels": ["Matrixes", "keyboard events"],
        "img": `projs/${id}/${id}.png`
    }
}

function getProjects() {
    return gProjects;
}

