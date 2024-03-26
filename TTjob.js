
let st = "";
let n;
let result;
let rA = "Строки совпадают";
let rB = "Строки не совпадают";




function getRandom(i){
    return Math.floor(Math.random()*i);
}

function sravnenie(stA, jobA, result){
    if (jobA == stA){
        result = rA;
    }
    else
    {
        result = rB;
    }
}
function newStr(numres) {
    let fstr = ["q","w","e","r","t","y","u","i","o","p"];
    let sstr = ["a","s","d","f","g","h","j","k","l"];
    let tstr = ["z","x","c","v","b","n","m"];
    let str = [];

// Создаем новую строку в зависимости от уровня

    let level = +prompt("Введите цифру от 1 до 6 для выбора уровня согластно числу. 0 для выхода");
    if(level == 0){newStr;} else
    if (level == 1){
        for (let i = 0; i <fstr.length; i++){
        str[i] = fstr[i];}
    }else if (level == 2){
        for (let i = 0; i <sstr.length; i++){
        str[i] = sstr[i];}
    }else     if (level == 3){
        for (let i = 0; i <tstr.length; i++){
        str[i] = tstr[i];}
    }else     if (level == 4){
        let fsstr = fstr.concat(sstr);
        for (let i = 0; i <sfstr.length; i++){
        str[i] = fsstr[i];}
    }else     if (level == 5){
        let ststr = sstr.concat(tstr);
        for (let i = 0; i <ststr.length; i++){
        str[i] = ststr[i];}
    }else     if (level == 6){
        let ftstr = fstr.concat(tstr);
        for (let i = 0; i <ftstr.length; i++){
        str[i] = ftstr[i];}
    }else if (level >6 && level <0){
    alert("Неверное число введите данный заного")
    setTimeout(newStr,10000)
    }

    //Задаём символы в выхожящую строку

    for (let i = 0; i < numres; i++){
        n = getRandom(str.length);
        st += str[n]
    }
}
function newGame(){
while(true){
    let numresultstr = +prompt("Введите количество символов которое хотите вводить");

    newStr(numresultstr);



    console.log(st);

    let job = prompt("Введите строку: " + st);
    
    sravnenie(st, job, result);
    
    console.log(result);

    if(result == rA){
        alert(result);
        let ans = +prompt(rA + "Введите 1, если хотите начать заного. 0 Чтобы вернуться к настройкам,другую цифру, чтобы завершить")
        if(ans == 1){
            newStr;
        }
        else if(ans == 0){
            newGame;
        }else if(ans <0||ans >1){break}
    }
    else{
        alert(result);
        let ans = +prompt(rB + "Введите 0 Чтобы вернуться к настройкам, другую цифру, чтобы завершить")
        if(ans == 0){
            newGame;

        }else if(ans <0||ans >0){break}
    }
}
}