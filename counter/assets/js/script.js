// The data/time we want to countdown to
var countDownDate = new Date("Oct 28, 2023 19:00:00").getTime();

var date = new Date();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;

// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

// Result is output to the specific element
document.getElementById("day").innerHTML = days 
document.getElementById("hour").innerHTML = hours 
document.getElementById("min").innerHTML = minutes
document.getElementById("sec").innerHTML = seconds

// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("day").innerHTML = "Are"
    document.getElementById("hour").innerHTML = "You" 
    document.getElementById("min").innerHTML = "Ready"
    document.getElementById("sec").innerHTML = "To Wed?"
}
}, 1000);