let minute = 0;
let second = 0;

let cron;

const startCron = document.querySelectorAll('.btnestilo')[0];
startCron.addEventListener('click', startCronometro);

const stopCron = document.querySelectorAll('.btnestilo')[1];
stopCron.addEventListener('click', stopCronometro);

const resetCron = document.querySelectorAll('.btnestilo')[2];
stopCron.addEventListener('click', resetCronometro);

function startCronometro() {
    stopCronometro();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function stopCronometro() {
    clearInterval(cron);
}

function resetCronometro() {
    minute = 0;
    second = 0;
    const element = document.querySelectorAll('span');
    element.forEach((item) => {
        item.innerText = '00';
    })    
}

function timer() {
    if (second == 60) {
        second = 0;
        minute ++;
    }

    document.querySelectorAll('span')[0].innerHTML = minutos;
    document.querySelectorAll('span')[1].innerText = segundos;
}
