const timer = (() => {
    let second = document.querySelector('.second');
    let minute = document.querySelector('.minute');
    let user = document.querySelector('#user');
    let colon = document.querySelector('#colon');
    let display = document.querySelector('#display');
    let body = document.querySelector('body');
    let pause = document.querySelector('#pause');

    let button = document.querySelector('#start');
    button.disabled = false;

    let strS = parseInt(second.textContent);
    let strM = minute.textContent;

    let start;
    let total;
    let condition = true;


    function deprecate() {

        strS--;
        if (strS < 10) {
            second.textContent = '0' + strS;
        }
        else {
            second.textContent = strS;
        }
        if (strM == 0 && strS == 0) {
            clearInterval(start);
        }
        else if (strS == 0) {
            strS = 60;
            strM--;
            minute.textContent = strM;
        }
        if (total == parseInt(user.value) * 60) {
            display.style.border = '15px solid green';
            display.style.backgroundColor = 'green';
        }
        else if (total == (parseInt(user.value) * 60) / 2) {
            display.style.border = '15px solid yellow';
            display.style.backgroundColor = 'yellow';
        }
        else if (total == ((parseInt(user.value) * 60)) / 4) {
            display.style.border = '15px solid red';
            display.style.backgroundColor = 'red';
        }
        if (condition == true) {
            setTimeout(deprecate, 1000)
        }
        total--
        return strS;
    };

    button.addEventListener('click', function () {

        condition = true;

        total = (user.value) * 60;

        body.classList.add('red');

        minute.textContent = parseInt(user.value);
        minute.textContent--;

        colon.textContent = ':';
        strM = minute.textContent;
        button.disabled = true;
        strS = 60;
        start = setTimeout(deprecate, 1000);
    });

    pause.addEventListener('click', function () {
        condition = false;
        button.disabled = false;
    })
})();