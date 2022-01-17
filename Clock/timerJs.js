
// //Timer 
// //Timer
const canvas9 = document.getElementById('canvas9');
let ctx9 = canvas9.getContext('2d');
ctx9.fillStyle = 'rgb(0, 0, 0)';
//hours tens
const drawHorizontal8=(x,y)=>{
  ctx9.beginPath(),
  ctx9.moveTo(x,y),
  ctx9.lineTo(x+10,y-5),
  ctx9.lineTo(x+30,y-5),
  ctx9.lineTo(x+40,y),
  ctx9.lineTo(x+30,y+5),
  ctx9.lineTo(x+10,y+5),
  ctx9.closePath(),
  ctx9.fill()
  }
const drawVertical8=(x,y) => {
  ctx9.beginPath();
  ctx9.moveTo(x,y),
  ctx9.lineTo(x-5,y+20),
  ctx9.lineTo(x-5,y+40),
  ctx9.lineTo(x,y+50),
  ctx9.lineTo(x+5,y+40),
  ctx9.lineTo(x+5,y+20),
  ctx9.closePath(),
  ctx9.fill();
  } 

const canvas10 = document.getElementById('canvas10');
let ctx10 = canvas10.getContext('2d');
ctx10.fillStyle = 'rgb(0, 0, 0)';
ctx10.fillRect(60,60,5,5)
ctx10.fillRect(60,70,5,5)

const drawHorizontal9=(x,y)=>{
  ctx10.beginPath(),
  ctx10.moveTo(x,y),
  ctx10.lineTo(x+10,y-5),
  ctx10.lineTo(x+30,y-5),
  ctx10.lineTo(x+40,y),
  ctx10.lineTo(x+30,y+5),
  ctx10.lineTo(x+10,y+5),
  ctx10.closePath(),
  ctx10.fill()
  }

const drawVertical9=(x,y) => {
  ctx10.beginPath();
  ctx10.moveTo(x,y),
  ctx10.lineTo(x-5,y+20),
  ctx10.lineTo(x-5,y+40),
  ctx10.lineTo(x,y+50),
  ctx10.lineTo(x+5,y+40),
  ctx10.lineTo(x+5,y+20),
  ctx10.closePath(),
  ctx10.fill();
  } 
const canvas11 = document.getElementById('canvas11');
let ctx11 = canvas11.getContext('2d');
ctx11.fillStyle = 'rgb(0, 0, 0)';

const drawHorizontal10=(x,y)=>{
  ctx11.beginPath(),
  ctx11.moveTo(x,y),
  ctx11.lineTo(x+10,y-5),
  ctx11.lineTo(x+30,y-5),
  ctx11.lineTo(x+40,y),
  ctx11.lineTo(x+30,y+5),
  ctx11.lineTo(x+10,y+5),
  ctx11.closePath(),
  ctx11.fill()
  }
const drawVertical10=(x,y) => {
  ctx11.beginPath();
  ctx11.moveTo(x,y),
  ctx11.lineTo(x-5,y+20),
  ctx11.lineTo(x-5,y+40),
  ctx11.lineTo(x,y+50),
  ctx11.lineTo(x+5,y+40),
  ctx11.lineTo(x+5,y+20),
  ctx11.closePath(),
  ctx11.fill();
  } 

const canvas12 = document.getElementById('canvas12');
let ctx12 = canvas12.getContext('2d');
ctx12.fillStyle = 'rgb(0, 0, 0)';
ctx12.fillRect(60,60,5,5)
ctx12.fillRect(60,70,5,5)
const drawHorizontal11=(x,y)=>{
  ctx12.beginPath(),
  ctx12.moveTo(x,y),
  ctx12.lineTo(x+10,y-5),
  ctx12.lineTo(x+30,y-5),
  ctx12.lineTo(x+40,y),
  ctx12.lineTo(x+30,y+5),
  ctx12.lineTo(x+10,y+5),
  ctx12.closePath(),
  ctx12.fill()
  }
const drawVertical11=(x,y) => {
  ctx12.beginPath();
  ctx12.moveTo(x,y),
  ctx12.lineTo(x-5,y+20),
  ctx12.lineTo(x-5,y+40),
  ctx12.lineTo(x,y+50),
  ctx12.lineTo(x+5,y+40),
  ctx12.lineTo(x+5,y+20),
  ctx12.closePath(),
  ctx12.fill();
  } 

const canvas13 = document.getElementById('canvas13');
let ctx13 = canvas13.getContext('2d');
ctx13.fillStyle = 'rgb(0, 0, 0)';
const drawHorizontal12=(x,y)=>{
  ctx13.beginPath(),
  ctx13.moveTo(x,y),
  ctx13.lineTo(x+10,y-5),
  ctx13.lineTo(x+30,y-5),
  ctx13.lineTo(x+40,y),
  ctx13.lineTo(x+30,y+5),
  ctx13.lineTo(x+10,y+5),
  ctx13.closePath(),
  ctx13.fill()
  }
const drawVertical12=(x,y) => {
  ctx13.beginPath();
  ctx13.moveTo(x,y),
  ctx13.lineTo(x-5,y+20),
  ctx13.lineTo(x-5,y+40),
  ctx13.lineTo(x,y+50),
  ctx13.lineTo(x+5,y+40),
  ctx13.lineTo(x+5,y+20),
  ctx13.closePath(),
  ctx13.fill();
  } 

const canvas14 = document.getElementById('canvas14');
let ctx14 = canvas14.getContext('2d');
ctx14.fillStyle = 'rgb(0, 0, 0)';

const drawHorizontal13=(x,y)=>{
  ctx14.beginPath(),
  ctx14.moveTo(x,y),
  ctx14.lineTo(x+10,y-5),
  ctx14.lineTo(x+30,y-5),
  ctx14.lineTo(x+40,y),
  ctx14.lineTo(x+30,y+5),
  ctx14.lineTo(x+10,y+5),
  ctx14.closePath(),
  ctx14.fill()
  }
const drawVertical13=(x,y) => {
  ctx14.beginPath();
  ctx14.moveTo(x,y),
  ctx14.lineTo(x-5,y+20),
  ctx14.lineTo(x-5,y+40),
  ctx14.lineTo(x,y+50),
  ctx14.lineTo(x+5,y+40),
  ctx14.lineTo(x+5,y+20),
  ctx14.closePath(),
  ctx14.fill();
  } 

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

