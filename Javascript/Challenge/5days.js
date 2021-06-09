const h2 = document.createElement('h2');
const headerTitle = document.body.appendChild(h2)

const h4 = document.createElement('h4');
const timeTitle = document.body.appendChild(h4);

h2.innerText = "Time Untill Chrismas";

function getTime() {
    const nowDay = new Date();
    const xmasDays = new Date("2021-12-24:00:00:00+0900");
    const dDayCalculation = xmasDays - nowDay;

    const dDay = Math.floor(dDayCalculation / (1000 * 60 * 60 * 24));
    const dDayHours = Math.floor((dDayCalculation % (1000 * 60 * 60 * 24) / (1000 * 60 *60)));
    const dDayMinutes = Math.floor((dDayCalculation % (1000 * 60 * 60 ) / (1000 * 60)));
    const dDaySeconds = Math.floor((dDayCalculation % (1000 * 60) / 1000));

    timeTitle.innerText = `${
        String(dDay).padStart(2, "0")}일 ${
        String(dDayHours).padStart(2, "0")}시 ${
        String(dDayMinutes).padStart(2, "0")}분 ${
        String(dDaySeconds).padStart(2, "0")}초
    `
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
