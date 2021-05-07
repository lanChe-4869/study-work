/* eslint-disable */
/*
Function:MMT 2020
Author :温铭浩 吴祺燊
Date: 20201211
Version: 1.0
*/
var textHiddenButton = document.getElementById('textHiddenButton');
var textRunButton = document.getElementById('textRunButton');
var textPane = document.getElementsByClassName('textPane')[0];

var validString = [
            [""],
            ["left", "right", "switch"],
            ["left", "right", "switch"],
            ["left", "right", "up", "down"],
            ["left", "right", "up", "down", "debug"]
        ];
var nowGameScript = 1;
var programmingPaneJudge = false;
var stringArray = [];

textPane.style.transition = "transform 1s linear";
document.onkeydown = function (e) {
    if (!programmingPaneJudge) return false;
    var inputFinished = false;
    if (e.keyCode == 84 && e.shiftKey) {
        textPane.style.transform = 'translate(0,0px)';
        document.getElementById('in').disabled = false;
        textHiddenButton.addEventListener("click", function () {
            textPane.style.transform = 'translate(0,-1000px)';
        })
    }
    textRunButton.onmousedown = function (e) {
        var programmingText = document.getElementById('in').value;
        programmingText = programmingText.trim();
        if (programmingText.length == 0) {
            alert("空白框？？？😓😓😓");
            return false;
        }
        var programmingSentence = programmingText.split(/[\n;]/gi);

        //删除分割后有空的字符串;
        for (var i = 0; i < programmingSentence.length; i++) {
            if (programmingSentence[i] == "") {
                programmingSentence.splice(i, 1);
                i--;
            }
        }
        var isValid = true;


        //判断所有子串是否合法
        for (let i of programmingSentence) {
            //-----遍历分号分割后的字符串
            var leftParentheseIndex = i.indexOf('\(');
            var tmpString = i.substr(0, leftParentheseIndex);
            var flag = false;

            //检查前缀指令
            for (var j = 0; j < validString[nowGameScript].length; ++j) {
                if (validString[nowGameScript][j] == tmpString) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                alert("这指令读不懂？？？😓😓😓");
                return false;
            }

            var rightParentheseIndex = i.indexOf('\)');
            if (nowGameScript == 1 || nowGameScript == 2) {
                //  检查参数
                if (leftParentheseIndex == rightParentheseIndex - 1) {
                    if (tmpString != "switch") {
                        isValid = false;
                        alert("该指令语法有误😓😓😓");
                        return false;
                    }
                } else {
                    if (tmpString == "switch") {
                        alert("无参指令不需要写参数😓😓😓");
                        return false;
                    }
                    if (rightParentheseIndex - leftParentheseIndex > 9) {
                        alert("参数过大😓😓😓");
                        return false;
                    }

                    //把有参函数的非正整数值排除掉

                    var tmpNum = 0;
                    for (var j = leftParentheseIndex + 1; j < rightParentheseIndex; ++j) {
                        if (i[j] < '0' || i[j] > '9') {
                            isValid = false;
                            alert("参数语法有误😓😓😓");
                            return false;
                        }
                        tmpNum = tmpNum * 10 + (i[j] - '0');
                    }
                    if (tmpNum == 0) {
                        alert("有参指令参数不能为0😓😓😓");
                        return false;
                    }
                }

                //检查语法
                if (rightParentheseIndex + 1 != i.length) {
                    alert("语句语法有误😓😓😓");
                    return false;
                }
            } else if (nowGameScript == 3) {
                //  检查参数
                if (leftParentheseIndex == rightParentheseIndex - 1) {
                    alert("请在相关指令填写参数😓😓😓");
                    return false;
                } else {
                    if (rightParentheseIndex - leftParentheseIndex > 9) {
                        alert("参数过大😓😓😓");
                        return false;
                    }

                    //把有参函数的非正整数值排除掉

                    var tmpNum = 0;
                    for (var j = leftParentheseIndex + 1; j < rightParentheseIndex; ++j) {
                        if (i[j] < '0' || i[j] > '9') {
                            isValid = false;
                            alert("参数语法有误😓😓😓");
                            return false;
                        }
                        tmpNum = tmpNum * 10 + (i[j] - '0');
                    }
                    if (tmpNum == 0) {
                        alert("有参指令参数不能为0😓😓😓");
                        return false;
                    }
                }

                //检查语法
                if (rightParentheseIndex + 1 != i.length) {
                    alert("语句语法有误😓😓😓");
                    return false;
                }
            } else if (nowGameScript == 4) {
                //  检查参数
                if (leftParentheseIndex == rightParentheseIndex - 1) {
                    if (tmpString != "attack") {
                        isValid = false;
                        alert("该指令语法有误😓😓😓");
                        return false;
                    }
                } else {
                    if (tmpString == "attack") {
                        alert("无参指令不需要写参数😓😓😓");
                        return false;
                    }
                    if (rightParentheseIndex - leftParentheseIndex > 9) {
                        alert("参数过大");
                        return false;
                    }

                    //把有参函数的非正整数值排除掉

                    var tmpNum = 0;
                    for (var j = leftParentheseIndex + 1; j < rightParentheseIndex; ++j) {
                        if (i[j] < '0' || i[j] > '9') {
                            isValid = false;
                            alert("参数语法有误😓😓😓");
                            return false;
                        }
                        tmpNum = tmpNum * 10 + (i[j] - '0');
                    }
                    if (tmpNum == 0) {
                        alert("有参指令参数不能为0😓😓😓");
                        return false;
                    }
                }

                //检查语法
                if (rightParentheseIndex + 1 != i.length) {
                    alert("语句语法有误😓😓😓");
                    return false;
                }
            }
        }

        if (isValid) {
            for (let i of programmingSentence) {
                //----根据这个串来进行相关的操作
                var leftParentheseIndex = i.indexOf('\(');
                var rightParentheseIndex = i.indexOf('\)');
                var tmpString = i.substr(0, leftParentheseIndex);
                var num = 0;
                for (var j = leftParentheseIndex + 1; j < rightParentheseIndex; ++j) {
                    num = num * 10 + (i[j] - '0');
                }
                stringArray.push([tmpString, num]);
                //  指令输入，若 num==0，表示该指令无参；
                //  否则表示有参指令，num表示参数值；
            }
            if(isPausing){
                
            }
            playSkills();
            textPane.style.transform = 'translate(0,-1000px)';
            document.getElementById('in').value = "";
            document.getElementById('in').disabled = true;
            inputFinished = true;
            return false;
        }
    }
    if (inputFinished) return false;
}