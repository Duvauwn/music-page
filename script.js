const timer = (() => {
    let second = document.querySelector('.second');
    let minute = document.querySelector('.minute');
    let user = document.querySelector('#user');
    let colon = document.querySelector('#colon');
    let display = document.querySelector('#display')

    let button = document.querySelector('#start');

    let strS = parseInt(second.textContent);
    let strM = minute.textContent;

    let start;
    let total;


    function deprecate() {

        console.log(total);
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
            display.style.border = '20px solid green';
        }
        else if (total == (parseInt(user.value) * 60) / 2) {
            display.style.border = '20px solid yellow';
        }
        else if (total == ((parseInt(user.value) * 60)) / 4) {
            display.style.border = '20px solid red';
        }
        total--
        return strS;
    };

    button.addEventListener('click', function () {

        total = (user.value) * 60;

        minute.textContent = parseInt(user.value);
        minute.textContent--;
        colon.textContent = ':';
        strM = minute.textContent;
        button.disabled = true;
        strS = 60;
        start = setInterval(deprecate, 1000);
    });
})();