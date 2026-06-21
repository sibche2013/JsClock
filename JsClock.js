/* 
Developed by Amin Arjmand
Email: aminarj2000@gmail.com | Site: aminarjmand.com | GitHub: @sibche2013 
*/

let clockInterval;
const clockElement = document.getElementById("cas");

// Run clock immediately on load
jsClock();
startClock();

function jsClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    clockInterval = setInterval(jsClock, 1000);
}

function toggleClock() {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
        clockElement.classList.add("stopped");
    } else {
        jsClock(); // Update immediately on resume
        startClock();
        clockElement.classList.remove("stopped");
    }
}
