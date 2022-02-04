let minute = 0;
let second = 0;
let milisec = 0;

let cron;

const startCron = document.querySelectorAll('.btnestilo')[0];
startCron.addEventListener('click', startCronometro);

const stopCron = document.querySelectorAll('.btnestilo')[1];
stopCron.addEventListener('click', stopCronometro);

const resetCron = document.querySelectorAll('.btnestilo')[2];
resetCron.addEventListener('click', resetCronometro);

function startCronometro() {
    stopCronometro();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function stopCronometro() {
    clearInterval(cron);
    document.querySelectorAll('span')[0].innerHTML = formatNumber(minute);
    document.querySelectorAll('span')[1].innerText = formatNumber(second);
    document.querySelectorAll('span')[2].innerText = formatNumber(milisec);
}

function resetCronometro() {
    minute = 0;
    second = 0;
    milisec = 0;
    const element = document.querySelectorAll('span');
    element.forEach((item) => {
        item.innerText = '00';
    })    
}

function formatNumber(n){
    return n > 9 ? "" + n: "0" + n;
}

function timer() {
    if (milisec == 60) {
        milisec = 0;
        second ++;
    }
    if (second == 60) {
        second = 0;
        minute ++;
    }

    milisec++;

    document.querySelectorAll('span')[0].innerHTML = formatNumber(minute);
    document.querySelectorAll('span')[1].innerText = formatNumber(second);
    document.querySelectorAll('span')[2].innerText = formatNumber(milisec);
}
