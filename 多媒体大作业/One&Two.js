/* eslint-disable */
//变量申明
/*
1——墙壁、地板
2——人物初始位置
3——障碍1
4——障碍2
5——开关（关）
6——开关（开）
7——BUG
*/
var row, col;
var scene1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var scene2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var copyScene = {};

var level1_switchLeft = false,
    level1_switchDown,
    level1_switchUp,
    level2_switchLeft1 = true,
    level2_switchLeft2 = false,
    level2_switchUp1 = 7,
    level2_switchDown1 = 14,
    level2_switchUp2 = 3,
    level2_switchDown2 = 10,
    barrier_level1_up = 0,
    barrier1_level2_up = 160,
    barrier2_level2_up = 0,
    barrier1_level2NowUp = false;
//事件响应函数
one.onclick = function (e) {
    T = 2;
    programmingPaneJudge = true;
    nowGameScript = 1;
    isRunning = false;
    isPausing=false;

    clearcanvas();
    canvas.style.backgroundColor = "#ffffff";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    back.style.display = "none";

    pause.style.top = "90%";
    pause.style.left = "44.4%";
    pause.style.width = "10%";
    pause.style.height = "5%";
    pause.style.display = "block";

    clearcanvas();
    level1();
    copyScene = scene1;
    level1_switchDown = 14;
    level1_switchUp = 7;
    barrier_level1_up = 0;
}

two.onclick = function (e) {
    T = 2;
    clearcanvas();
    programmingPaneJudge = true;
    nowGameScript = 2;
    isRunning = false;
    isPausing=false;

    canvas.style.backgroundColor = "#ffffff";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    back.style.display = "none";

    pause.style.top = "90%";
    pause.style.left = "44.4%";
    pause.style.width = "10%";
    pause.style.height = "5%";
    pause.style.display = "block";

    clearcanvas();
    level2();
    copyScene = scene2;
    level2_switchLeft1 = false;
    level2_switchLeft2 = true;
    level2_switchDown1 = 14;
    level2_switchUp1 = 7;
    level2_switchDown2 = 10;
    level2_switchUp2 = 3;
    barrier1_level2_up = 0;
    barrier2_level2_up = 160;
    barrier1_level2NowUp = false;
}

function clearcanvas(canvas) {
    context.clearRect(0, 0, 1280, 720)
}

function playingLevel() {
    if (nowGameScript == 1)
        context.drawImage(background1, 0, 0, 1280, 600);
    else if (nowGameScript == 2)
        context.drawImage(background2, 0, 0, 1280, 600);
    else if (nowGameScript == 3)
        context.drawImage(background3, 0, 0, 1280, 1000);
    else if (nowGameScript == 4)
        context.drawImage(background4, 0, 0, 1280, 800);
    for (row = 0; row < 18; row++) {
        for (col = 0; col < 32; col++) {
            if (copyScene[row][col] == 1) {
                context.fillStyle = "black";
                context.fillRect(col * 40, row * 40, 40, 40);
            }
            if (copyScene[row][col] == 2 && !isRunning) {
                if (copyScene[(spriteDown.top + spriteDown.height + j * 40) / 40][spriteDown.left / 40] != 1 || copyScene[(spriteDown.top + spriteDown.height + j * 40) / 40][spriteDown.left / 40 + 1] != 1) {
                    context.drawImage(fly, col * 40, row * 40, 80, 120);
                    initializeSprite(row * 40, col * 40);
                } else {
                    context.drawImage(normal, col * 40, row * 40, 80, 120);
                    initializeSprite(row * 40, col * 40);
                }
            }
            if (copyScene[row][col] == 3) {
                if (nowGameScript == 2) {
                    context.drawImage(barrier, col * 40, row * 40 - barrier1_level2_up, 80, 520);
                }
            }
            if (copyScene[row][col] == 4) {
                if (nowGameScript == 2)
                    context.drawImage(barrier, col * 40, row * 40 - barrier2_level2_up, 80, 520);
                else if (nowGameScript == 1)
                    context.drawImage(barrier, col * 40, row * 40 - barrier_level1_up, 80, 520);
            }
            if (copyScene[row][col] == 5) {
                if (nowGameScript == 1) {
                    if (!level1_switchLeft)
                        context.drawImage(Switch_off, col * 40, row * 40, 120, 120);
                    else
                        context.drawImage(Switch_on, col * 40, row * 40, 120, 120);
                } else if (nowGameScript == 2) {
                    if (!level2_switchLeft1)
                        context.drawImage(Switch_off, col * 40, row * 40, 120, 120);
                    else
                        context.drawImage(Switch_on, col * 40, row * 40, 120, 120);
                }
            }
            if (copyScene[row][col] == 6) {
                if (!level2_switchLeft2)
                    context.drawImage(Switch_off, col * 40, row * 40, 120, 120);
                else
                    context.drawImage(Switch_on, col * 40, row * 40, 120, 120);
            }
            if (copyScene[row][col] == 7) {
                context.drawImage(bug, col * 40, row * 40, 120, 120);
            }
        }
    }
}

function level1() {
    context.drawImage(background1, 0, 0, 1280, 600);
    for (row = 0; row < 18; row++) {
        for (col = 0; col < 32; col++) {
            if (scene1[row][col] == 1) {
                context.fillStyle = "black";
                context.fillRect(col * 40, row * 40, 40, 40);
            }
            if (scene1[row][col] == 2 && !isRunning) {
                context.drawImage(normal, col * 40, row * 40, 80, 120);
                initializeSprite(row * 40, col * 40);
            }
            if (scene1[row][col] == 4) {
                context.drawImage(barrier, col * 40, row * 40, 80, 520);
            }
            if (scene1[row][col] == 5) {
                context.drawImage(Switch_off, col * 40, row * 40, 120, 120);
            }
        }
    }
    isRunning = true;
}

function level2() {
    context.drawImage(background2, 0, 0, 1280, 600);
    for (row = 0; row < 18; row++) {
        for (col = 0; col < 32; col++) {
            if (scene2[row][col] == 1) {
                context.fillStyle = "black";
                context.fillRect(col * 40, row * 40, 40, 40);
            }
            if (scene2[row][col] == 2 && !isRunning) {
                context.drawImage(normal, col * 40, row * 40, 80, 120);
                initializeSprite(row * 40, col * 40);
            }
            if (scene2[row][col] == 3) {
                context.drawImage(barrier, col * 40, row * 40, 80, 520);
            }
            if (scene2[row][col] == 4) {
                context.drawImage(barrier, col * 40, row * 40 - 160, 80, 520);
            }
            if (scene2[row][col] == 5) {
                context.drawImage(Switch_off, col * 40, row * 40, 120, 120);
            }
            if (scene2[row][col] == 6) {
                context.drawImage(Switch_on, col * 40, row * 40, 120, 120);
            }
        }
    }
    isRunning = true;
}
