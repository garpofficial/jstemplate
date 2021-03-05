var reason;



// var socket = io();

var result=0;
var players;
var play = true;

var room = document.getElementById("room");
var roomNumber = document.getElementById("roomNumbers");
var button = document.getElementById("button");
var state = document.getElementById('state');
var fenoption = document.getElementById('fen');
var fenid = document.getElementById('fenstr');
var gameStatusId = document.getElementById('gameStatus');

var timeleft_black;
var downloadTimer_black;
var timeleft_white;
var downloadTimer_white;

var debug = function(args) {
    if (console && console.log) {
        console.log(args);
    }
};



window.onload = function() {

    var btn = document.getElementById('startButton'),
        btnS = document.getElementById('spectateButton'),
        nickErrorText = document.querySelector('#startMenu .input-error');

    var settingsMenu = document.getElementById('settingsButton');
    var GARPMenu = document.getElementById('GARPsettingsButton');
    var settings = document.getElementById('settings');
    var GARPsettings = document.getElementById('GARPsettings');
    var FenSettings = document.getElementById('FenSettings');

    settingsMenu.onclick = function () {
        if (settings.style.maxHeight == '300px') {
            settings.style.maxHeight = '0px';
        } else {
            settings.style.maxHeight = '300px';
        }
    };

    GARPMenu.onclick = function () {
        if (GARPsettings.style.maxHeight == '300px') {
            GARPsettings.style.maxHeight = '0px';
        } else {
            GARPsettings.style.maxHeight = '300px';
        }
    };

    FenSettings.style.maxHeight=0;
    FenSettings.style.display = 'none';

    fenSettingsButton.onclick = function () {
        if (FenSettings.style.maxHeight == '300px') {
            FenSettings.style.maxHeight = '0px';
            FenSettings.style.display = 'none';
        } else {
            FenSettings.style.maxHeight = '300px';
            FenSettings.style.display = 'block';
            fenid.value=game.fen();
        }
    };


};

function startGame() {
    result= Math.round(Math.random()*100);
    var resulthtml = document.getElementById('state');
    resulthtml.innerText="You won with a score of :"+result;

}

function executeInterval() {

}

function stopGame()  {
    atheios.finishGameRequest(authToken, userId,  playId, result, gamefinishResponse);
    makeVisible("startMenu2");
    console.log("Game finished.");
}

longIntervalId=setInterval(
    () => executeInterval(),
    TIMEOUT60SEC*1000
);



