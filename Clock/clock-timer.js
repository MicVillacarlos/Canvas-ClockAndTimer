const drawDigit =({canvas,digit})=>{
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';

const drawHorizontal=(x,y)=>{
  ctx.beginPath(),
  ctx.moveTo(x,y),
  ctx.lineTo(x+10,y-5),
  ctx.lineTo(x+25,y-5),
  ctx.lineTo(x+35,y),
  ctx.lineTo(x+25,y+5),
  ctx.lineTo(x+10,y+5),
  ctx.closePath()
  ctx.fill();
  };
const drawVertical=(x,y) => {
  ctx.beginPath();
  ctx.moveTo(x,y),
  ctx.lineTo(x-5,y+20),
  ctx.lineTo(x-5,y+40),
  ctx.lineTo(x,y+50),
  ctx.lineTo(x+5,y+40),
  ctx.lineTo(x+5,y+20),
  ctx.closePath()
  ctx.fill();
  };
const draw0 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawVertical(5,50),//e
  drawVertical(5,5)//f
  };
const draw1 =()=>{
  drawVertical(45,5),//b
  drawVertical(45,50)//c
  };
const draw2 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawHorizontal(7.5,100),//d
  drawVertical(5,50),//e
  drawHorizontal(7.55,53)//g
  };
const draw3 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawHorizontal(7.55,53)//g
  };
const draw4 =()=>{
  drawVertical(45,5),//b
  drawVertical(45,50),//c
  drawVertical(5,5),//f
  drawHorizontal(7.55,53)//g
  };
const draw5 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawVertical(5,5),//f
  drawHorizontal(7.55,53)//g
  };
const draw6 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawVertical(5,50),//e
  drawVertical(5,5),//f
  drawHorizontal(7.55,53)//g
  };
const draw7 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawVertical(45,50)//c
  };
const draw8 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawVertical(5,50),//e
  drawVertical(5,5),//f
  drawHorizontal(7.55,53)//g
  };
const draw9 =()=>{
  drawHorizontal(7.5,5),//a
  drawVertical(45,5),//b
  drawVertical(45,50),//c
  drawHorizontal(7.5,100),//d
  drawVertical(5,5),//f
  drawHorizontal(7.55,53)//g
  };
const draw = {
  0:draw0,1:draw1,2:draw2,3:draw3,4:draw4,5:draw5,6:draw6,7:draw7,8:draw8,9:draw9
}

draw[digit]()
};
const drawCloclSec=()=>{
  let seconds = new Date().getSeconds().toString().padStart(2,"0").split('');
}


const drawClock=()=>{
  let hours = new Date().getHours()%12||12;
  let minutes = new Date().getMinutes().toString().padStart(2,"0").split('');
  let hoursFormatted = hours.toString().padStart(2,"0").split('');
  let hoursTens = hoursFormatted[0]
  let hoursOnes = hoursFormatted[1]
  let minutesTens = minutes[0]
  let minutesOnes = minutes[1]
  let seconds = new Date().getSeconds().toString().padStart(2,"0").split('');
  let amPm = new Date().getHours();
  if (amPm>=12){
    drawHorizontal6(5,5) //a
    drawVertical6(35,5) //b
    drawVertical6(5,30) //e
    drawVertical6(5,5) //f
    drawHorizontal6(5,30) //g
  }else{
    drawHorizontal6(5,5) //a
    drawVertical6(35,5) //b
    drawVertical6(35,30) //c
    drawVertical6(5,30) //e
    drawVertical6(5,5) //f
    drawHorizontal6(5,30) //g
    }
  const renderSeconds =()=>{
    const canvasSecondsTens = document.getElementById('canvasSecondsTens');
    const canvasSecondsOnes = document.getElementById('canvasSecondsOnes');
    let secondsTens = seconds[0]
    let secondsOnes = seconds[1]
    drawDigit({canvas:canvasSecondsTens,digit:secondsTens})
    drawDigit({canvas:canvasSecondsOnes,digit:secondsOnes})
  }

  const renderMinutes =()=>{
    const canvasMinutesTens = document.getElementById('canvasMinutesTens');
    const canvasMinutesOnes = document.getElementById('canvasMinutesOnes');
    let ctx = canvasMinutesOnes.getContext('2d');
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(60,50,5,5)
    ctx.fillRect(60,70,5,5)
    drawDigit({canvas:canvasMinutesTens,digit:minutesTens})
    drawDigit({canvas:canvasMinutesOnes,digit:minutesOnes})
  }
  const renderHours =()=>{
    const canvasHoursTens = document.getElementById('canvasHoursTens');
    const canvasHoursOnes = document.getElementById('canvasHoursOnes');
    let ctx = canvasHoursOnes.getContext('2d');
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(60,50,5,5)
    ctx.fillRect(60,70,5,5)
    drawDigit({canvas:canvasHoursTens,digit:hoursTens})
    drawDigit({canvas:canvasHoursOnes,digit:hoursOnes})
  }
  renderSeconds()
  renderMinutes()
  renderHours()
}


//canvas 7 A or P
const canvas7 = document.querySelector('#canvas7AMPM');
let ctx6 = canvas7.getContext('2d');
ctx6.fillStyle = 'rgb(0, 0, 0)';
ctx6.beginPath(); 
const drawHorizontal6=(x,y)=>{
     ctx6.beginPath(),
     ctx6.moveTo(x,y),
     ctx6.lineTo(x+5,y-3),
     ctx6.lineTo(x+25,y-3),
     ctx6.lineTo(x+30,y),
     ctx6.lineTo(x+25,y+3),
     ctx6.lineTo(x+5,y+3),
     ctx6.closePath(),
     ctx6.fill()
     }
const drawVertical6=(x,y) => {
     ctx6.beginPath();
     ctx6.moveTo(x,y),
     ctx6.lineTo(x-3,y+5),
     ctx6.lineTo(x-3,y+20),
     ctx6.lineTo(x,y+25),
     ctx6.lineTo(x+3,y+20),
     ctx6.lineTo(x+3,y+5),
     ctx6.closePath(),
     ctx6.fill();
     } 
//canvas 8 'M'
const canvas8 = document.querySelector('#canvas8AMPM');
let ctx7 = canvas8.getContext('2d');
ctx7.fillStyle = 'rgb(0, 0, 0)';
ctx7.beginPath(); 
const drawHorizontal7=(x,y)=>{
     ctx7.beginPath(),
     ctx7.moveTo(x,y),
     ctx7.lineTo(x+5,y-3),
     ctx7.lineTo(x+25,y-3),
     ctx7.lineTo(x+30,y),
     ctx7.lineTo(x+25,y+3),
     ctx7.lineTo(x+5,y+3),
     ctx7.closePath(),
     ctx7.fill()
     }
const drawVertical7=(x,y) => {
     ctx7.beginPath();
     ctx7.moveTo(x,y),
     ctx7.lineTo(x-3,y+5),
     ctx7.lineTo(x-3,y+20),
     ctx7.lineTo(x,y+25),
     ctx7.lineTo(x+3,y+20),
     ctx7.lineTo(x+3,y+5),
     ctx7.closePath(),
     ctx7.fill();
     } 
drawHorizontal7(5,5) 
drawVertical7(35,5) 
drawVertical7(35,30) 
drawVertical7(5,30) 
drawVertical7(5,5) 
drawVertical7(20,10) 
drawVertical7(20,18) 


// //Timer 
// //Timer

const hoursRem = document.getElementById('hours')
const minutesRem = document.getElementById('minutes')
const secondsRem = document.getElementById('seconds')
const btnStart = document.getElementById('btnStart')
const btnStop = document.getElementById('btnStop')
let interval;
let pause = false;

btnStart.addEventListener('click', ()=>{
     const hours = parseInt(hoursRem.value);
     const minutes = parseInt(minutesRem.value);
     const seconds = parseInt(secondsRem.value);
     let totalSeconds = hours*60*60+minutes*60+seconds;
     startTimer(totalSeconds)
})

const startTimer=(totalSeconds) => {
     interval = setInterval(() => {
          totalSeconds--;
          updateInputs(totalSeconds);
     }, 1000);
}

const updateInputs = (totalSeconds) =>{
  let hours = Math.floor(totalSeconds/60/60);
  let minutes = Math.floor(totalSeconds/60);
  let seconds = Math.floor(totalSeconds%60);

  hoursRem.value = hours;
  minutesRem.value = minutes;
  secondsRem.value = seconds; 

  if(hours === 0 && minutes === 0 &&seconds ===0){
    alert("time's up!", interval=clearInterval(interval));
  }
}  

btnStop.addEventListener('click', ()=>{
  hoursRem.value = 0
  minutesRem.value = 0
  secondsRem.value = 0
  interval = clearInterval(interval)
})

const drawTimer = ()=>{
  let hoursTimer = hoursRem.value.padStart(2,"0").split('');
  let hoursTens = hoursTimer[0];
  let hoursOnes = hoursTimer[1];
  let minutesTimer = minutesRem.value.padStart(2,"0").split('');
  let minutesTens = minutesTimer[0];
  let minutesOnes = minutesTimer[1];
  let secondsTimer = secondsRem.value.padStart(2,"0").split('');
  let secondsTens = secondsTimer[0];
  let secondsOnes = secondsTimer[1];

  const renderHours =()=>{
    const timerHoursTens = document.getElementById('timerHoursTens')
    const timerHoursOnes = document.getElementById('timerHoursOnes')
    drawDigit({canvas: timerHoursTens,digit: hoursTens})
    drawDigit({canvas: timerHoursOnes,digit: hoursOnes})
  };

  const renderMinutes = ()=>{
    const timerMinutesTens = document.getElementById('timerMinutesTens')
    const timerMinutesOnes = document.getElementById('timerMinutesOnes')
    drawDigit({canvas: timerMinutesTens,digit: minutesTens})
    drawDigit({canvas: timerMinutesOnes,digit: minutesOnes})
  }

  const renderSeconds = ()=>{
    const timerSecondsTens = document.getElementById('timerSecondsTens')
    const timerSecondsOnes = document.getElementById('timerSecondsOnes')
    drawDigit({canvas: timerSecondsTens,digit: secondsTens})
    drawDigit({canvas: timerSecondsOnes,digit: secondsOnes})
  }
  renderSeconds()
  renderHours()
  renderMinutes()
}
setInterval(() => {
  drawTimer()
  drawClock()
}, 1000);

