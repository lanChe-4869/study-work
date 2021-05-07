/* eslint-disable */

var spriteIsOnload = false,
    limitLeft = 0,
    limitRight = canvas.width,
    limitUp = 0,
    limitDown = canvas.height,
    runnerCells = [
        {
            left: 0,
            top: 0,
            width: 525,
            height: 675

        }, {
            left: 516,
            top: 0,
            width: 525,
            height: 675
        }
    ],
    runInPlace = {
        lastAdvance: 0,
        PAGEFLIP_INTERVAL: 100,
        execute: function (sprite, context, now) {
            if (now - this.lastAdvance > this.PAGEFLIP_INTERVAL) {
                console.log(now, this.lastAdvance);
                //更新到下一个动作状态
                sprite.painter.advance();
                this.lastAdvance = now;
            }
        }
    },
    runLeft = {
        lastMove: 0,
        execute: function (sprite, context, time) {
            if (this.lastMove != 0) {
                sprite.left -= sprite.velocityX * (time - this.lastMove) / 1000;
                if (sprite.left < limitLeft) {
                    sprite.left = limitLeft;
                    this.lastMove = 0;
                }
            }
            this.lastMove = time;
        }
    },
    runRight = {
        lastMove: 0,
        execute: function (sprite, context, time) {
            if (this.lastMove != 0) {
                //精灵的移动方向
                sprite.left += sprite.velocityX * (time - this.lastMove) / 1000;
                if (sprite.left + sprite.width > limitRight) {
                    sprite.left = limitRight - sprite.width;
                }
            }
            this.lastMove = time;
        }
    },
    runDown = {
        lastMove: 0,
        execute: function (sprite, context, time) {
            if (this.lastMove != 0) {
                //精灵的移动方向
                sprite.top += sprite.velocityY * (time - this.lastMove) / 1000;
                if (sprite.top + sprite.height > limitDown) {
                    sprite.top = limitDown - sprite.height;
                }
            }
            this.lastMove = time;
        }
    },
    runUp = {
        lastMove: 0,
        execute: function (sprite, context, time) {
            if (this.lastMove != 0) {
                //精灵的移动方向
                sprite.top -= sprite.velocityY * (time - this.lastMove) / 1000;
                if (sprite.top < limitUp) {
                    sprite.top = limitUp;
                }
            }
            this.lastMove = time;
        }
    },
    spriteLeft = new Sprite('runnerLeft', new SpriteSheetPainter(runnerCells), [runInPlace, runLeft]),
    spriteRight = new Sprite('runnerRight', new SpriteSheetPainter(runnerCells), [runInPlace, runRight]),
    spriteUp = new Sprite('runnerUp', new SpriteSheetPainter(runnerCells), [runInPlace, runUp]),
    spriteDown = new Sprite('runnerDown', new SpriteSheetPainter(runnerCells), [runInPlace, runDown]),
    animateLeftId,
    animateRightId,
    animateUpId,
    animateDownId,
    animateSwitchId;

//-----动画

function drawBackground() {
    playingLevel();
}

function pauseLevel() {
    T = 3;
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
    back.style.display = "block";
    pause.style.display = "none";
    interval2 = requestAnimationFrame(animate2);
}

function animateLeft(time) {
    if (spriteIsOnload) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        spriteLeft.update(context, time);
        spriteLeft.paint(context);
        if (spriteLeft.left <= limitLeft) {
            spriteLeft.left = limitLeft;
            spriteLeft.time = 0;
            spriteLeft.behaviors["1"].lastMove = 0;
            console.log(spriteLeft);

            spriteRight.left = spriteLeft.left;
            spriteRight.top = spriteLeft.top;
            spriteUp.left = spriteLeft.left;
            spriteUp.top = spriteLeft.top;
            spriteDown.left = spriteLeft.left;
            spriteDown.top = spriteLeft.top;
            cancelAnimationFrame(animateLeftId);
            if (stringArray.length > 0) playSkills();
            else return false;
        } else window.requestAnimationFrame(animateLeft);
    }
}

function animateRight(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        spriteRight.update(context, time);
        spriteRight.paint(context);
        if (spriteRight.left + spriteRight.width >= limitRight) {
            spriteRight.left = limitRight - spriteRight.width;
            spriteRight.behaviors["1"].lastMove = 0;
            spriteRight.time = 0;
            console.log(spriteRight);
            spriteLeft.left = spriteRight.left;
            spriteLeft.top = spriteRight.top;
            spriteUp.left = spriteRight.left;
            spriteUp.top = spriteRight.top;
            spriteDown.left = spriteRight.left;
            spriteDown.top = spriteRight.top;
            cancelAnimationFrame(animateRightId);
            if (copyScene[spriteRight.top / 40][spriteRight.left / 40] == -1) {
                while (stringArray.length > 0) {
                    stringArray.shift();
                }
                pauseLevel();
            }
            if (stringArray.length > 0) {
                playSkills();
            } else return false;

        } else window.requestAnimationFrame(animateRight);
    }
}

function animateUp(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        spriteUp.update(context, time);
        spriteUp.paint(context);
        if (spriteUp.top <= limitUp) {
            spriteUp.time = 0;
            spriteUp.behaviors["1"].lastMove = 0;
            spriteUp.top = limitUp;
            console.log(spriteUp);

            spriteLeft.left = spriteUp.left;
            spriteLeft.top = spriteUp.top;
            spriteRight.left = spriteUp.left;
            spriteRight.top = spriteUp.top;
            spriteDown.left = spriteUp.left;
            spriteDown.top = spriteUp.top;
            cancelAnimationFrame(animateUpId);
            if (stringArray.length > 0) playSkills();
            else return false;
        } else window.requestAnimationFrame(animateUp);
    }
}

function animateDown(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBackground();
        spriteDown.update(context, time);
        spriteDown.paint(context);
        if (spriteDown.top + spriteDown.height >= limitDown) {
            spriteDown.time = 0;
            spriteDown.behaviors["1"].lastMove = 0;
            spriteDown.top = limitDown - spriteDown.height;
            console.log(spriteDown);

            spriteLeft.left = spriteDown.left;
            spriteLeft.top = spriteDown.top;
            spriteRight.left = spriteDown.left;
            spriteRight.top = spriteDown.top;
            spriteUp.left = spriteDown.left;
            spriteUp.top = spriteDown.top;
            cancelAnimationFrame(animateDownId);
            if (stringArray.length > 0) playSkills();
            else return false;
        } else window.requestAnimationFrame(animateDown);
    }
}

function animateSwitchLevel1Up(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        barrier_level1_up += 8;
        drawBackground();
        spriteDown.paint(context);
        if (barrier_level1_up == 160) {
            cancelAnimationFrame(animateSwitchId);
            if (stringArray.length > 0) playSkills();
            else return false;
        } else window.requestAnimationFrame(animateSwitchLevel1Up);
    }
}

function animateSwitchLevel1Down(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        barrier_level1_up -= 8;
        drawBackground();
        spriteDown.paint(context);
        if (barrier_level1_up == 0) {
            cancelAnimationFrame(animateSwitchId);
            if (stringArray.length > 0) playSkills();
            else return false;
        } else window.requestAnimationFrame(animateSwitchLevel1Down);
    }
}

function animateSwitchLevel2(time) {
    if (spriteIsOnload && !isPausing) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (barrier1_level2NowUp) {
            barrier1_level2_up += 8;
            barrier2_level2_up -= 8;
            drawBackground();
            spriteDown.paint(context);
            if (barrier1_level2_up == 160) {
                cancelAnimationFrame(animateSwitchId);
                if (stringArray.length > 0) playSkills();
                else return false;
            } else window.requestAnimationFrame(animateSwitchLevel2);
        } else {
            barrier1_level2_up -= 8;
            barrier2_level2_up += 8;
            drawBackground();
            spriteDown.paint(context);
            if (barrier1_level2_up == 0) {
                cancelAnimationFrame(animateSwitchId);
                if (stringArray.length > 0) {
                    playSkills();
                } else window.requestAnimationFrame(animateSwitchLevel2);
            }
        }
    }
}

function initializeSprite(currentTop, currentLeft) {
    spriteLeft.velocityX = 200;
    spriteLeft.velocityY = 200;
    spriteLeft.left = currentLeft;
    spriteLeft.top = currentTop;
    spriteLeft.width = 80;
    spriteLeft.height = 120;

    spriteRight.velocityX = 200;
    spriteRight.velocityY = 200;
    spriteRight.left = currentLeft;
    spriteRight.top = currentTop;
    spriteRight.width = 80;
    spriteRight.height = 120;

    spriteUp.velocityX = 200;
    spriteUp.velocityY = 200;
    spriteUp.left = currentLeft;
    spriteUp.top = currentTop;
    spriteUp.width = 80;
    spriteUp.height = 120;

    spriteDown.velocityX = 200;
    spriteDown.velocityY = 200;
    spriteDown.left = currentLeft;
    spriteDown.top = currentTop;
    spriteDown.width = 80;
    spriteDown.height = 120;
}

function playSkills() {
    console.log(stringArray[0]["0"], stringArray[0]["1"]);
    var num = stringArray[0]["1"];
    var skillString = stringArray[0]["0"];
    stringArray.shift();
    if (skillString == "left") {
        for (var j = 1; j <= num; ++j) {
            if (spriteLeft.left - j * 40 < 0) {
                num = j - 1;
                break;
            }
            if (copyScene[spriteLeft.top / 40][(spriteLeft.left - j * 40) / 40] == 1 || copyScene[spriteLeft.top / 40 + 1][(spriteLeft.left - j * 40) / 40] == 1 || copyScene[spriteLeft.top / 40 + 2][(spriteLeft.left - j * 40) / 40] == 1) {
                num = j - 1;
                break;
            }
            if (copyScene[spriteLeft.top / 40][(spriteLeft.left - j * 40) / 40] == 7 || copyScene[spriteLeft.top / 40 + 1][(spriteLeft.left - j * 40) / 40] == 7 || copyScene[spriteLeft.top / 40 + 2][(spriteLeft.left - j * 40) / 40] == 7) {
                num = j - 1;
                break;
            }
            if (nowGameScript == 2) {
                if (spriteLeft.left - j * 40 == 14 * 40) {
                    num = j - 1;
                    break;
                }
            }
        }
        limitLeft = spriteLeft.left - num * 40;
        animateLeftId = window.requestAnimationFrame(animateLeft);
    } else if (skillString == "right") {
        for (var j = 0; j <= num; ++j) {
            if (spriteRight.left + j * 40 + spriteRight.width > canvas.width) {
                num = j - 1;
                break;
            }
            if (copyScene[spriteRight.top / 40][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 1 || copyScene[spriteRight.top / 40 + 1][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 1 || copyScene[spriteRight.top / 40 + 2][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 1) {
                num = j;
                break;
            }
            if (copyScene[spriteRight.top / 40][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 7 || copyScene[spriteRight.top / 40 + 1][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 7 || copyScene[spriteRight.top / 40 + 2][(spriteRight.left + j * 40 + spriteRight.width) / 40] == 7) {
                num = j;
                break;
            }
            if (nowGameScript == 1) {
                if (spriteRight.left + j * 40 + spriteRight.width == 24 * 40 && barrier_level1_up == 0) {
                    num = j;
                    break;
                }
            } else if (nowGameScript == 2) {
                if (spriteRight.left + j * 40 + spriteRight.width == 13 * 40 && barrier1_level2_up == 0) {
                    num = j;
                    break;
                } else if (spriteRight.left + j * 40 + spriteRight.width == 24 * 40 && barrier2_level2_up == 0) {
                    num = j;
                    break;
                }
            }
        }
        limitRight = spriteRight.left + num * 40 + spriteRight.width;
        animateRightId = window.requestAnimationFrame(animateRight);
    } else if (skillString == "switch") {
        if (nowGameScript == 1 && copyScene[spriteDown.top / 40][spriteDown.left / 40] == 5) {
            if (!level1_switchLeft) {
                level1_switchLeft = true;
                animateSwitchId = window.requestAnimationFrame(animateSwitchLevel1Up);
            } else {
                level1_switchLeft = false;
                animateSwitchId = window.requestAnimationFrame(animateSwitchLevel1Down);
            }
        } else if (nowGameScript == 2) {
            if (copyScene[spriteDown.top / 40][spriteDown.left / 40] == 5) {
                level2_switchLeft1 = !level2_switchLeft1;
                barrier1_level2NowUp = !barrier1_level2NowUp;
                animateSwitchId = window.requestAnimationFrame(animateSwitchLevel2);
            } else if (copyScene[spriteDown.top / 40][spriteDown.left / 40] == 6) {
                level2_switchLeft2 = !level2_switchLeft2;
                barrier1_level2NowUp = !barrier1_level2NowUp;
                animateSwitchId = window.requestAnimationFrame(animateSwitchLevel2);
            }
        }
    } else if (skillString == "up") {
        for (var j = 1; j <= num; ++j) {
            if (spriteUp.top - j * 40 < 0) {
                num = j - 1;
                break;
            }
            if (copyScene[(spriteUp.top - j * 40) / 40][spriteUp.left / 40] == 1 || copyScene[(spriteUp.top - j * 40) / 40][spriteUp.left / 40 + 1] == 1) {
                num = j - 1;
                break;
            }
        }
        limitUp = spriteUp.top - num * 40;
        animateUpId = window.requestAnimationFrame(animateUp);
    } else if (skillString == "down") {
        for (var j = 0; j <= num; ++j) {
            if (spriteDown.top + spriteDown.height + j * 40 > canvas.height) {
                num = j - 1;
                break;
            }
            if (copyScene[(spriteDown.top + spriteDown.height + j * 40) / 40][spriteDown.left / 40] == 1 || copyScene[(spriteDown.top + spriteDown.height + j * 40) / 40][spriteDown.left / 40 + 1] == 1) {
                num = j;
                break;
            }
        }
        limitDown = spriteDown.top + spriteDown.height + num * 40;
        animateDownId = window.requestAnimationFrame(animateDown);
    } else if (skillString == "debug") {
        if (copyScene[spriteLeft.top / 40][(spriteLeft.left - j * 40) / 40] == 5) {
            //copyScene[spriteLeft.top / 40][(spriteLeft.left - j * 40) / 40] = 0;
            //copyScene[spriteLeft.top / 40][(spriteLeft.left - j * 40) / 40] = 0;
        }
    }
}

//--------初始化
context.strokeStyle = 'lightgray';
context.lineWidth = 0.5;
spritesheet.onload = function (e) {
    spriteIsOnload = true;
}
