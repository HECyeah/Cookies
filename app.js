let cookieCount = document.getElementById("count")
let button = document.getElementById("button")
let bubbles = document.getElementById("bubbles")
const audio = new Audio("https://sound-effects.bbcrewind.co.uk/search?q=07074121");
let cookie = 0

button.onclick = function () {
    cookie = cookie + 1;
    cookieCount.textContent = cookie;
}
// for the section abotu I foudn this tutorial really helpful as I was having truble getting the nubmer on the page. https://www.youtube.com/watch?v=uSJXZ3LkABE