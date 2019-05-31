var timerVar = setInterval(countDown, 1000);
var totalSeconds = 0;
var ehtext = "Timer";
document.getElementById("statictext").innerHTML = ehtext;
function countDown() {
   ++totalSeconds;
   let days = Math.floor(totalSeconds /86400);
   let hours = Math.floor(((totalSeconds - days*86400)/3600));
   let minutes = Math.floor(((totalSeconds - (days*86400)) - (hours*3600)) /60);
   let seconds = totalSeconds - (days*86400 + hours*3600 + minutes*60);
   document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
}
