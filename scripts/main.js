/**
 * -- The basics
 * @time         :The default timing
 * @defEyeTiming :The default eye timing witch means 20 minuts
 * @el           :The time place span
 * @mainTimer    :The main Timer
 * @startBtn     :The start btn element
 * @resetBtn     :The reset Btn to reset the Timer To the default time
 */
let time = 1205 
const defaultEyeTiming = 1205
const el = document.querySelector('.counter-container > .counter > .counter-span')
var mainTimer = ""
const startBtn = document.querySelector('.counter-container > .counter-controllers > .controller.toggleStartAndStop')
const resetBtn = document.querySelector('.counter-container > .counter-controllers > .controller.resetTiming')


/* // resetTheTimeVar
const setDefaultEyeTiming = ()=>{time = 1205}
setDefaultEyeTiming() */

// startTiming 
const startTiming = (timer)=>{

    // If there is a specifec timer then equal Global time var to this Timer
    if(timer) time = timer

    return setInterval(() => {

        // minus the time
        time -= 1
        
        // alert if the time is finish
        if (time <= 0){
            finishTiming()
            return;
        } 
        
        // print result in html
        // we shape the time and devite it and turn it from seconds to hours, minuts and seconds in pretty look with shapTime() function  
        printTime(shapTime(time))
        
        
    }, 1000);
}



// shapeTheTime
function shapTime(time){
    // making our perfect timing
    let hours = toNear(time / (60 * 60))
    hours = (hours.length == 1) ? "0"+hours : hours
    let minutes = toNear((time % (60 * 60)) / 60)
    minutes = (minutes.length == 1) ? "0"+minutes : minutes
    let seconds = toNear(time % 60)
    seconds = (seconds.length == 1) ? "0"+seconds : seconds    
    
    // help debuggin by consoling this
    console.log("%c"+hours+"|"+minutes+"|"+seconds+"|"+time, "color:#56e532;")

    return `${hours} : ${minutes} : ${seconds}`
}
// shapeTheTime --end


// Alert the user about finishing
// Alert --end


// starToverTiming | resetTiming
// starToverTiming --end

// startBtnOnclick
startBtn.addEventListener("click", (e)=>{
    if (!e.target.classList.contains("stop")) {
        startTimingBtnEvent(time)
    } else {
        stopTiming()
    }
})
// startBtnOnclick --end

// startTimingBtnEvent
function startTimingBtnEvent (timer){
    if(timer) time = timer
    mainTimer = startTiming(time) 
    addClass(startBtn, "stop")
}

// stopTiming
const stopTiming = ()=>{
    clearInterval(mainTimer)
    removeClass(startBtn, "stop")
}
// stopTiming --end


// resetTimerBtnOnclick
resetBtn.addEventListener('click', async ()=>{
    await resetTimingEvent()
})
// resetTimerBtnOnclick --end

// resetTimingEvent
async function resetTimingEvent(timer){
    const areYouSure = await window.confirm("Are you sure to Reset Time ?!")
    if (!areYouSure) return;

    if (timer) time = timer
    else time = defaultEyeTiming
    stopTiming()
    printTime(shapTime(time))
}
// resetTimingEvent --end


// finishTiming
function finishTiming (){
    // ! - you Are gonna change defaultEyeTiming to the custom time if there is one 
    // ! - and you should work on that
    printTime(shapTime(defaultEyeTiming))
    time = defaultEyeTiming

    // setDefaultEyeTiming()
    window.alert('Take a rest')
    stopTiming()
}
// finishTiming --end

// PrintTime
const printTime = (text)=>{
    el.setAttribute('time', text)  
}
// PrintTime --end













// Floor the number without plus it or minus it 
function toNear (num){
    let numb = num.toString();
    numb = numb.split(".");
    return numb[0]
}




// Add a class to the
function addClass(el, clas){
    el.classList.add(clas)
}

// Remove a class to the
function removeClass(el, clas){
    el.classList.remove(clas)
}
