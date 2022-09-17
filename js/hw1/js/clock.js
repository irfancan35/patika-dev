let isim = prompt("İsminizi giriniz: ");
document.querySelector("#myName").innerHTML = isim;

const WEEKDAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

function showTime() {
    let currentTime = new Date();
    let timeNow = currentTime.toLocaleTimeString(
        [],
        {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'}
    );
    let weekday = WEEKDAYS[currentTime.getDay()];
    document.querySelector(".clock").innerHTML = timeNow + " " + weekday;
}

setInterval(showTime, 1000);
showTime();