// Change the date below to the date when the website will be launched
const launchDate = new Date("2023-12-31 00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.innerHTML = "Website Launched!";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
