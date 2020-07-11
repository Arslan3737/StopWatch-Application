// two functions that are not in book
// 1. setInterval => repeatedly run 
// 2. setTimeOut => after sometime



// function timer(){
// console.log("running...")
// }

// setInterval(timer,1000)

// setTimeout(timer,3000)


// var count=0;
// var interval;
// function timer(){
//     count++;
//     console.log(count);
// }

// interval=setInterval(timer,1000);

// setTimeout(function(){
// clearInterval(interval)
// },5000)





//Stop watch


var min = 0;
var sec = 0;
var msec = 0;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");

var interval;

function timer(){
    msec++;
    msecHead.innerHTML = msec;
    if(msec>= 100){
        sec++;
        secHead.innerHTML = sec;
        msec = 0;
    }
   else if(sec>=60){
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}
function start(){
interval = setInterval(timer,10);
document.getElementById("start").disabled = true;
}

function stop(){
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}
function reset(){
msec = 0;
sec = 0;
min = 0;
minHead.innerHTML = min;
secHead.innerHTML = sec;
msecHead.innerHTML = msec;
stop();
document.getElementById("start").disabled = false;
}