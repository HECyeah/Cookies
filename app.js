let cookieCount = document.getElementById("count")
let button = document.getElementById("button")
let bubbles = document.getElementById("bubbles")
let autoClicker = document.getElementById("Auto-Clicker")
let enhancedOven = document.getElementById("enhancedOven")
let cookieFarm = document.getElementById("cookieFarm")
let robotBaker = document.getElementById("robotBaker")
let cookieFactory = document.getElementById("cookieFactory")
let magicFlour = document.getElementById("magicFlour")
let cps = 1
let cookie = 0

button.onclick = function () {
    cookie = cookie + 1;
    cookieCount.textContent = cookie;
}
// For the section, I used the following tutorial as I was having trouble getting the number to increase - https://www.youtube.com/watch?v=uSJXZ3LkABE

setInterval(function () {
    cookie = cookie + cps;
    save()
    cookieCount.textContent = cookie;
}, 1000)

function save() {
    let turnNumberToString = JSON.stringify(cookie);
    localStorage.setItem("stringCookies", turnNumberToString);
}
const myRetriveInfo = localStorage.getItem("stringCookies");
const info = JSON.parse(myRetriveInfo)
console.log(info)

async function fetchInfo() {
    let response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
    console.log("HTTP Response:", response);
    const json = await response.json();
    console.log("JSON data:", json)
}
fetchInfo()

//Array is now in my console log. I have read the information and chosen to just use 6 of the upgrades so everything fits on the one page. I could probably grid the page and have the cook and counter on the left and the upgrades neatly stacked and slimer on the right so everything is still on the page, but I just think it looks really cool like this. I hope that’s okay.   

autoClicker.onclick = function upgrade1() {
    if (cookie < 100) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 100;
    cps += 2
}

enhancedOven.onclick = function upgrade2() {
    if (cookie < 500) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 500;
    cps += 5
}

cookieFarm.onclick = function upgrade3() {
    if (cookie < 1000) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 1000;
    cps += 10
}

robotBaker.onclick = function upgrade3() {
    if (cookie < 2000) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 2000;
    cps += 20
}

cookieFactory.onclick = function upgrade3() {
    if (cookie < 5000) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 5000;
    cps += 50
}

magicFlour.onclick = function upgrade3() {
    if (cookie < 10000) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 10000;
    cps += 100
}

