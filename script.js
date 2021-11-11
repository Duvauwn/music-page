let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let user = document.querySelector('#user');
let colon = document.querySelector('#colon');

let button = document.querySelector('#start');

let strS = parseInt(second.textContent);
let strM = minute.textContent;

let start;

function deprecate() {

    strS--;
    if (strS < 10) {
        second.textContent = '0' + strS;
    }
    else {
        second.textContent = strS;
    }

    if (strS == 0) {
        strS = 60;
        strM--;
        minute.textContent = strM;
    }
    return strS;
};

button.addEventListener('click', function () {

    minute.textContent = parseInt(user.value);
    minute.textContent--;
    colon.textContent = ':';
    strM = minute.textContent;
    button.disabled = true;
    strS = 60;
    start = setInterval(deprecate, 1000);
});