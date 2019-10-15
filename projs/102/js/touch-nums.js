'use strict'
var gNums = [];
var gNextNum = 1;
var gGameInterval;
var gStartTime;

function initGame(boardSize) {
    getNums(boardSize);
    renderBoard(boardSize);
    resetTimer();
    gNextNum = 1;
}


function displayTimer() {
    var timePassed = Date.now() - gStartTime;
    var millisec = timePassed % 1000;
    if (millisec < 10) millisec = ('00' + millisec);
    else if (millisec < 100) millisec = ('0' + millisec);
    var seconds = parseInt(timePassed / 1000);
    if (seconds < 10) seconds = ('0' + seconds);
    else if (seconds >= 60) {
        seconds = (seconds % 60);
        if (seconds < 10) seconds = ('0' + seconds);
    };
    var minutes = parseInt(timePassed / 1000 / 60);
    if (minutes < 10) minutes = ('0' + minutes);
    var elTimer = document.querySelector('.timer span');
    elTimer.innerText = minutes + ':' + seconds + '.' + millisec;
}

function resetTimer() {
    stopTimer();
    var elTimer = document.querySelector('.timer span');
    elTimer.innerText = '00:00.000';
}

function startTimer() {
    gStartTime = Date.now();
    gGameInterval = setInterval(displayTimer, 50);
}

function stopTimer() {
    clearInterval(gGameInterval);
}

function cellClicked(elCell) {
    if (+elCell.innerText === gNextNum) {
        if (+elCell.innerText === 1) {
            startTimer();
        } else if (+elCell.innerText === gNums.length) {
            stopTimer();
        }
        elCell.classList.add('pressed');
        gNextNum++;
    }
}

function renderBoard(boardSize) {
    var boardLength = Math.sqrt(boardSize)
    var gameNums = gNums.slice()
    var strHTML = ''
    for (var i = 0; i < boardLength; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < boardLength; j++) {
            var num = gameNums.splice(getRandomInteger(0, gameNums.length - 1), 1);
            strHTML += `<td onclick="cellClicked(this)">${num}</td>`;
        }
        strHTML += '</tr>';
    }
    var elBoard = document.querySelector('.board table');
    elBoard.innerHTML = strHTML;
}

function getNums(boardSize) {
    gNums = [];
    for (var i = 0; i < boardSize; i++) {
        gNums.push(i + 1);
    }
}

function getRandomInteger(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}