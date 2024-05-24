let cookieCount = document.getElementById("count")
let button = document.getElementById("button")
let bubbles = document.getElementById("bubbles")
let autoClicker = document.getElementById("Auto-Clicker")
let cps = 1
const audio = new Audio("https://sound-effects.bbcrewind.co.uk/search?q=07074121");
let cookie = 0

button.onclick = function () {
    cookie = cookie + 1;
    cookieCount.textContent = cookie;
}
// for the section abotu I foudn this tutorial really helpful as I was having truble getting the nubmer on the page. https://www.youtube.com/watch?v=uSJXZ3LkABE

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

autoClicker.onclick = function upgrade1() {
    if (cookie < 100) {
        alert("Not Enough Cookies")
        return;
    };
    cookie -= 100;
    cps += 1
}

