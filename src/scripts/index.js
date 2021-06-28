// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import moment from "moment";

// \/ All of your javascript should go here \/

// found this online
const deadline = "July 26 2021 23:59:59 GMT+0200";

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total / 1000) % 60);
    const minutes = Math.floor( (total / (1000*60) ) % 60);
    const hours = Math.floor( (total / (1000*60*60) ) % 24);
    const days = Math.floor( total / (1000*60*60*24) );

    return { total, days, hours, minutes, seconds };
}

console.log(getTimeRemaining(deadline));

function initializeClock(id, endtime) {
    const countdown = document.getElementById(id);
    const daysSpan = countdown.querySelector("#days");
    const hoursSpan = countdown.querySelector("#hours");
    const minutesSpan = countdown.querySelector("#minutes");
    const secondsSpan = countdown.querySelector("#seconds");
    
    function updateClock() {
        const t = getTimeRemaining(endtime);
            daysSpan.innerHTML = ("0" + t.days).slice(-2);    
            hoursSpan.innerHTML = ("0" + t.hours).slice(-2);    
            minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);    
            secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);    

        if (t.total <= 0) {
            clearInterval(timeInterval);
        };
    }
    
    updateClock();

    const timeInterval = setInterval(updateClock, 1000);
}

initializeClock("countdown", deadline);
