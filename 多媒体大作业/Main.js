/* eslint-disable */
var canvas = document.getElementById('mycanvas'),
    context = canvas.getContext('2d');

var settingButton = document.getElementById('settingButton');
var startButton = document.getElementById('startButton');
var helpButton = document.getElementById('helpButton');
var back = document.getElementById('back');
var pause = document.getElementById('pause');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

var isRunning = false;
var isPausing = false;



var n = 0,
    m = 0,
    T = 3; //动态背景的判定条件

function clearcanvas(canvas) {
    context.clearRect(0, 0, 1280, 720);
}

function net() {
    clearcanvas(canvas);
    context.beginPath();
    for (var i = 0; i < 33; i++) {
        context.strokeStyle = '#ffffff';
        context.moveTo((i * 40) + n, 0);
        context.lineTo((i * 40) + n, 720);
        context.stroke();
    }
    for (var i = 0; i < 19; i++) {
        context.strokeStyle = '#ffffff';
        context.moveTo(0, (i * 40) + m);
        context.lineTo(1280, (i * 40) + m);
        context.stroke();
    }
    if (T == 3) {
        context.drawImage(Title, 90, -30, 1500, 400);
    }
}

function animate1() {
    if (T == 3) {
        net();
        if (n >= 40 || m >= 40) {
            n = 0;
            m = 0;
        } else {
            n++;
            m++;
        }
        requestAnimationFrame(animate1);
        console.log(9);
    } else {
        clearcanvas;
        cancelAnimationFrame(interval1);
    }
}

function animate2() {
    if (T == 1) {
        net();
        if (n <= -40 || m <= -40) {
            n = 0;
            m = 0;
        } else {
            n--;
            m--;
        }
        requestAnimationFrame(animate2);
    } else {
        clearcanvas;
        cancelAnimationFrame(interval2);
    }
}

helpButton.onclick = function (e) {
    T *= -1;
    if (T == 3) {
        interval1 = requestAnimationFrame(animate1);
    }
}

startButton.onclick = function (e) {
    T = 1;
    startButton.style.display = "none";
    settingButton.style.display = "none";
    helpButton.style.display = "none";
    settingPane.style.display = "none";

    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";

    back.style.display = "block";

    interval2 = requestAnimationFrame(animate2);
}

settingButton.addEventListener("click", function () {
    audioSlider.style.display = 'block';
    settingButton.style.display = 'none';
    startButton.style.display = 'none';
    helpButton.style.display = 'none';
    completeButton.style.display = 'block';
    //homeButton.style.display = 'block';
    //refreshButton.style.display = 'block';
    settingPane.style.backgroundColor = 'rgb(180, 179, 193)';



    var maxBarLength = volumeBar.offsetWidth;
    rollBall.style.left = maxBarLength * backgroundMusic.volume;
    volumnBarFill.style.width = (rollBall.offsetLeft + rollBall.offsetWidth / 2);
})

back.onclick = function (e) {
    T = 3;
    startButton.style.display = "block";
    settingButton.style.display = "block";
    helpButton.style.display = "block";
    settingPane.style.display = "block";

    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    back.style.display = "none";
    interval1 = requestAnimationFrame(animate1);
}

pause.onclick = function (e) {
    isPausing=true;
    T = 1;
    document.getElementsByClassName('textPane')[0].style.transform = 'translate(0,-1000px)';
    document.getElementById('in').value = "";
    document.getElementById('in').disabled = true;
    canvas.style.backgroundColor = "black";
    programmingPaneJudge = false;
    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
    four.style.display = "block";
    document.getElementsByClassName('textPane')[0].style.display = 'block';

    document.getElementsByClassName('dialogBox')[0].style.display = 'none';

    back.style.display = "block";

    pause.style.display = "none";

    interval2 = requestAnimationFrame(animate2);
}



interval1 = requestAnimationFrame(animate1);
