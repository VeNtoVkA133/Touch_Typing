let st = "";
let n;
let result;
let rA = "Строки совпадают";
let rB = "Строки не совпадают";
let numresultstr;
let strLength;


function getRandom(i) {
    return Math.floor(Math.random() * i);
}

function sravnenie(stA, jobA) {
    if (jobA == stA) {
        result = rA;
    } else {
        result = rB;
    }
}

function newLevel() {
    let fstr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    let sstr = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    let tstr = ["z", "x", "c", "v", "b", "n", "m"];
    let str = [];

    // Создаем новую строку в зависимости от уровня

    let level = +prompt('Введите цифру от 1 до 6 для выбора уровня согластно числу. 0 для выхода\n1 уровень = символы из первой строки "qwertyuiop",\n2 уровень = символы из второй строки "asdfghjkl",\n3 уровень = символы из третьей строки "zxcvbnm",\n4 уровень = символы из первой и второй строки,\n5 уровень = символы из второй и третьей строки,\n6 уровень = символы из первой и третьей строки.');
    if (level == 0) {
        newGame();
    } else
    if (level == 1) {
        strLength = fstr;
        for (let i = 0; i < fstr.length; i++) {
            str[i] = fstr[i];
        }
    } else if (level == 2) {
        strLength = sstr;
        for (let i = 0; i < sstr.length; i++) {
            str[i] = sstr[i];
        }
    } else if (level == 3) {
        strLength = tstr;
        for (let i = 0; i < tstr.length; i++) {
            str[i] = tstr[i];
        }
    } else if (level == 4) {
        strLength = sfstr;
        let fsstr = fstr.concat(sstr);
        for (let i = 0; i < sfstr.length; i++) {
            str[i] = fsstr[i];
        }
    } else if (level == 5) {
        strLength = ststr;
        let ststr = sstr.concat(tstr);
        for (let i = 0; i < ststr.length; i++) {
            str[i] = ststr[i];
        }
    } else if (level == 6) {
        strLength = ftstr;
        let ftstr = fstr.concat(tstr);
        for (let i = 0; i < ftstr.length; i++) {
            str[i] = ftstr[i];
        }
    } else if (level > 6 && level < 0) {
        alert("Неверное число введите данный заного")
        setTimeout(newLevel, 10000)
    }
}

/*
function strLength() {
    for(let i = 0; i < numresultstr; i++) {
        str.push("");
    }
}
*/

function newStr(numres) {
    st = "";
    //Задаём символы в выходящую строку
    for (let i = 0; i < numres; i++) {
        n = getRandom(strLength.length);
        st += strLength[n];
    }
}

function settingsGame() {
    numresultstr = +prompt("Введите количество символов которое хотите вводить");
    newLevel();
    newGame();
}

function newGame() {
    while (true) {
        newStr(numresultstr);

        let job = prompt("Введите строку: " + st);

        sravnenie(st, job);
        console.log(result);

        if (result == rA) {
            alert(result);
            let ans = +prompt(rA + ".\n Введите 1, если хотите начать заного.\n 0 Чтобы вернуться к настройкам,\n другую цифру, чтобы завершить")
            if (ans == 1) {
                newGame();
            } else if (ans == 0) {
                settingsGame();
            } else if (ans < 0 || ans > 1) {
                break
            }
        } else {
            alert(result);
            let ans = +prompt(rB + ". Введите 0 Чтобы вернуться к настройкам, другую цифру, чтобы завершить")
            if (ans == 0) {
                settingsGame();

            } else if (ans < 0 || ans > 0) {
                break
            }
        }
    }
}
settingsGame();