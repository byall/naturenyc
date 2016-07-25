var time = new Date ();
var hourNow = time.getHours();
if (hourNow < 12) {
    document.getElementById("hello").innerHTML = "WELCOME and GOOD MORNING";
} else if (hourNow < 17) {
    document.getElementById("hello").innerHTML =  "WELCOME and GOOD AFTERNOON";
} else {
    document.getElementById("hello").innerHTML =  "WELCOME and GOOD EVENING";
}

