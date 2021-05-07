/* eslint-disable */
var settingPane = document.getElementsByClassName("settingPane")[0];
var completeButton = document.getElementById('completeButton');
var homeButton = document.getElementById('homeButton');
var refreshButton = document.getElementById('refreshButton');

var rollBall = document.getElementsByClassName('rollBall')[0];
var volumeBar = document.getElementsByClassName('volumeBar')[0];
var audioSlider = document.getElementsByClassName('audioSlider')[0];
var p = document.getElementsByTagName('p')[0];
var volumnBarFill = document.getElementsByClassName('volumnBarFill')[0];
var backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.55;

window.onmousedown = function (e) {
    backgroundMusic.play();
}

homeButton.onclick=function(e){
    T=3;
    document.getElementsByClassName('textPane')[0].style.transform = 'translate(0,-1000px)';
    document.getElementById('in').value = "";
    document.getElementById('in').disabled = true;
    canvas.style.backgroundColor = "black";
    programmingPaneJudge = false;
    document.getElementsByClassName('textPane')[0].style.display = 'block';
    document.getElementsByClassName('dialogBox')[0].style.display = 'none';
    settingButton.style.display = 'block';
    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    completeButton.style.display = 'none';
    homeButton.style.display = 'none';
    refreshButton.style.display = 'none';
    settingPane.style.backgroundColor = "rgba(0,0,0,0)";
    audioSlider.style.display = 'none';
}

completeButton.onclick = function (e) {
    settingButton.style.display = 'block';
    startButton.style.display = 'block';
    helpButton.style.display = 'block';
    completeButton.style.display = 'none';
    homeButton.style.display = 'none';
    refreshButton.style.display = 'none';
    settingPane.style.backgroundColor = "rgba(0,0,0,0)";
    audioSlider.style.display = 'none';
}

refreshButton.onclick=function(e){

}

rollBall.onmousedown = function (e) {
    let maxBarLength = volumeBar.offsetWidth;
    let rollBallL = rollBall.offsetLeft;
    let mouseX = e.clientX;
    window.onmousemove = function (ev) {
        let moveLength = ev.clientX - mouseX;
        let newLeftPoint = rollBallL + moveLength + rollBall.offsetWidth / 2;
        if (newLeftPoint < 0) {
            newLeftPoint = 0;
        }
        if (newLeftPoint >= maxBarLength) {
            newLeftPoint = maxBarLength;
        }
        rollBall.style.left = newLeftPoint - rollBall.offsetWidth / 2 + 'px';
        volumnBarFill.style.width = newLeftPoint + 'px';
        var tmp = newLeftPoint / maxBarLength * 100;
        p.innerHTML = '音量:' + Math.ceil(tmp) + '%';
        backgroundMusic.volume = tmp / 100;
        return;
    }
    window.onmouseup = function (e) {
        window.onmousemove = false;
        return;
    }
    return;
}

volumeBar.onclick = function (e) {
    let maxBarLength = volumeBar.offsetWidth;
    let newLeftPoint = e.clientX - settingPane.offsetLeft - audioSlider.offsetLeft - volumeBar.offsetLeft;
    if (newLeftPoint < 0) {
        newLeftPoint = 0;
    }
    if (newLeftPoint >= maxBarLength) {
        newLeftPoint = maxBarLength;
    }
    rollBall.style.left = newLeftPoint - rollBall.offsetWidth / 2 + 'px';
    console.log(newLeftPoint, rollBall.offsetLeft);
    let tmp = newLeftPoint / maxBarLength * 100;
    p.innerHTML = '音量:' + Math.ceil(tmp) + '%';
    volumnBarFill.style.width = newLeftPoint + 'px';
    backgroundMusic.volume = tmp / 100;
    return;
}
