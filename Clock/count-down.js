var startButton = document.querySelector('#start')
console.log(startButton)


// assume time = 1day 14hours 36 minutes 0secends 
var total = 24 *3600 + 14 *3600 + 36 * 60 
console.log(total)

startButton.addEventListener('click',function(){
    var id = setInterval(function(){
    if (total === 0){
        clearInterval(id)
    }    
    total -= 1    
    var day = parseInt(total / 86400)  
    var hour = parseInt((total - day * 86400) / 3600)
    var minute = parseInt((total - hour*3600 - day*86400) / 60 )
    var second = parseInt(total - hour*3600 - day*86400 - minute*60)
    
    var tempDays = day < 10 ? '0' + day : day
    var tempHours = hour < 10 ? '0' + hour : hour
    var tempMinutes = minute < 10 ? '0' + minute : minute
    var tempSeconds = second < 10 ? '0' + second : second

    days.innerText = tempDays
    hours.innerText = tempHours
    minutes.innerText = tempMinutes
    seconds.innerText = tempSeconds
        
    },1000)
})