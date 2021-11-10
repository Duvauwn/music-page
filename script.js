let second = document.querySelector('.second');
let minute = document.querySelector('.minute');

let button = document.querySelector('#start');

let strS = parseInt(second.textContent);
let strM = parseInt(minute.textContent);

let start;
let end;

function deprecate() {
    strS--;
    console.log(strS);
    second.textContent = strS;
    if (strS == 0) {
        strS = 60;
        strM--
        minute.textContent = strM;
    }
    return strS;
}

button.addEventListener('click', function () {
    button.disabled = true;
    start = setInterval(deprecate, 1000)
})


console.log(strS);