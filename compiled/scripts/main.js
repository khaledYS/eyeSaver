const el = document.querySelector('.counter-container > .counter > .counter-span')
let time = 1205
const defaultEyeTiming = ()=>{time = 1205}
// setInterval(() => {
//     // making our perfect timing
//     let hours = toNear(time / (60 * 60))
//     hours = (hours.length == 1) ? "0"+hours : hours
//     let minutes = toNear((time % (60 * 60)) / 60)
//     minutes = (minutes.length == 1) ? "0"+minutes : minutes
//     let seconds = toNear(time % 60)
//     seconds = (seconds.length == 1) ? "0"+seconds : seconds

//     // help debuggin by consoling this
//     console.log("%c"+hours+"|"+minutes+"|"+seconds+"|"+time, "color:#56e532;")

//     // alert if the time is finish
//     if (time == 0){
//         finishTiming()
//         window.alert('Take a rest')
//         return;
//     } 
//     el.setAttribute('time', `${hours} : ${minutes} : ${seconds}`)
//     time -= 1
// }, 1000);




// Alert the use about finishing
// Alert --end


// starToverTiming
// starToverTiming --end


// stopTiming11111
// stopTiming --end


// finishTiming
function finishTiming (){
    defaultEyeTiming()
    el.setAttribute('time', `${00} : ${00} : ${00}`)  
}
// finishTiming --end
















function toNear (num){
    let numb = num.toString();
    numb = numb.split(".");
    return numb[0]
}