let homeCount = 0;
let awayCount = 0;
let foulsCount = 0;
let homeScore = document.getElementById('home-score');
let awayScore = document.getElementById('away-score');
let homeFoulsCall = document.getElementById('home-fouls-call');
let guestFoulsCall = document.getElementById('guest-fouls-call');
let homeTag = document.getElementById('home-tag');
let guestTag = document.getElementById('guest-tag');


//FUNCTION FOR THE HOME SCORE TEAM

function homethreepoint() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}


function twoopoint() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function onepoint() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

//function for the away score TEAM

function awaythreepoint() {
    awayCount += 3;
    awayScore.textContent = awayCount;
}

function awaytwoopoint() {
    awayCount += 2;
    awayScore.textContent = awayCount;
}

function awayonepoint() {
    awayCount += 1;
    awayScore.textContent = awayCount;
}

function homefouls() {
    foulsCount++;
    homeFoulsCall.textContent = foulsCount;
}

function guestfouls() {
    foulsCount++;
    guestFoulsCall.textContent = foulsCount;
}

// function for showing the team that has the ball.

function home() {
    homeTag.style.backgroundcolor = `red`;
    console.log("home");
}

function guest() {
    guestTag.style.color = `red`;
}

// function for restarting an new game 

function restart() {
    homeCount = 0;
    awayCount = 0;
    homeScore.textContent = 0;
    awayScore.textContent = 0;
    homeFoulsCall.textContent = 0;
    guestFoulsCall.textContent = 0;

}
