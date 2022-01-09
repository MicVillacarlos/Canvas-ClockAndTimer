//canvas 1 Hours : Tens
const canvas1 = document.querySelector('#canvas');
let ctx = canvas1.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.beginPath(); 

const drawNum = {
    0: a = () =>{
    ctx.beginPath(),
    ctx.moveTo(0,0),
    ctx.lineTo(50,0),
    ctx.lineTo(40,10),
    ctx.lineTo(10,10)
    ctx.closePath(),
    ctx.fill()
    },
    1: b = () =>{
    ctx.beginPath();
    ctx.moveTo(50,5);
    ctx.lineTo(50,55);
    ctx.lineTo(40,45);
    ctx.lineTo(40,15);
    ctx.closePath();
    ctx.fill();
    },
    2: c=() =>{
    ctx.beginPath();
    ctx.moveTo(50,60);
    ctx.lineTo(50,110);
    ctx.lineTo(40,100);
    ctx.lineTo(40,70);
    ctx.closePath();
    ctx.fill();
    },
    3:d=()=>{
    ctx.beginPath();
    ctx.moveTo(40,105);
    ctx.lineTo(50,115);
    ctx.lineTo(0,115);
    ctx.lineTo(10,105);
    ctx.closePath();
    ctx.fill();
    },
    4:e=()=>{
    ctx.beginPath();
    ctx.moveTo(10,70);
    ctx.lineTo(10,100);
    ctx.lineTo(0,110);
    ctx.lineTo(0,60);
    ctx.closePath();
    ctx.fill();
    },
    5:f=()=>{
    ctx.beginPath();
    ctx.moveTo(10,15);
    ctx.lineTo(10,45);
    ctx.lineTo(0,55);
    ctx.lineTo(0,5);
    ctx.closePath();
    ctx.fill();
    },
    6:g=()=>{
    ctx.beginPath();
    ctx.moveTo(0,57.5);
    ctx.lineTo(10,50);
    ctx.lineTo(40,50);
    ctx.lineTo(50,57.5);
    ctx.lineTo(40,65);
    ctx.lineTo(10,65);
    ctx.closePath();
    ctx.fill();
    }
}
let hoursTens = {
    0 : function () {drawNum[0]()+drawNum[1]()+drawNum[2]()+drawNum[3]()+ drawNum[4]()+drawNum[5]()
    },
    1 : function() {drawNum[1]()+drawNum[2]()},
    2 : function(){drawNum[0]()+ drawNum[4]()+ drawNum[3]()+ drawNum[1]()+ drawNum[6]()},
    3 : function(){drawNum[0]()+ drawNum[2]()+ drawNum[3]()+ drawNum[1]()+ drawNum[6]()},
    4 : function() {drawNum[5]()+ drawNum[2]()+drawNum[1]()+ drawNum[6]()},
    5 : function() {drawNum[0]()+ drawNum[2]()+ drawNum[3]()+ drawNum[5]()+ drawNum[6]()},
    6 : function() {drawNum[0]()+ drawNum[2]()+ drawNum[3]()+ drawNum[4]()+ drawNum[5]()+ drawNum[6]()},
    7 : function() {drawNum[0]() + drawNum[1]() + drawNum[2]()}, 
    8 : function() {drawNum[0]()+ drawNum[1]()+ drawNum[2]()+ drawNum[3]()+ drawNum[4]()+ drawNum[5]()+ drawNum[6]()},
    9 : function() {drawNum[0]()+ drawNum[1]()+ drawNum[2]()+ drawNum[3]()+ drawNum[5]()+ drawNum[6]()}
}
//canvas 2 Hours : Ones
const canvas2 = document.getElementById('canvas2')
let ctx2= canvas2.getContext('2d');
ctx2.fillStyle = 'rgb(0, 0, 0)';
ctx2.fillRect(60,60,5,5)
ctx2.fillRect(60,70,5,5)
const drawNum2 = {
    0: a = () =>{
    ctx2.beginPath(),
    ctx2.moveTo(0,0),
    ctx2.lineTo(50,0),
    ctx2.lineTo(40,10),
    ctx2.lineTo(10,10)
    ctx2.closePath(),
    ctx2.fill()
    },
    1: b = () =>{
    ctx2.beginPath();
    ctx2.moveTo(50,5);
    ctx2.lineTo(50,55);
    ctx2.lineTo(40,45);
    ctx2.lineTo(40,15);
    ctx2.closePath();
    ctx2.fill();
    },
    2: c=() =>{
    ctx2.beginPath();
    ctx2.moveTo(50,60);
    ctx2.lineTo(50,110);
    ctx2.lineTo(40,100);
    ctx2.lineTo(40,70);
    ctx2.closePath();
    ctx2.fill();
    },
    3:d=()=>{
    ctx2.beginPath();
    ctx2.moveTo(40,105);
    ctx2.lineTo(50,115);
    ctx2.lineTo(0,115);
    ctx2.lineTo(10,105);
    ctx2.closePath();
    ctx2.fill();
    },
    4:e=()=>{
    ctx2.beginPath();
    ctx2.moveTo(10,70);
    ctx2.lineTo(10,100);
    ctx2.lineTo(0,110);
    ctx2.lineTo(0,60);
    ctx2.closePath();
    ctx2.fill();
    },
    5:f=()=>{
    ctx2.beginPath();
    ctx2.moveTo(10,15);
    ctx2.lineTo(10,45);
    ctx2.lineTo(0,55);
    ctx2.lineTo(0,5);
    ctx2.closePath();
    ctx2.fill();
    },
    6:g=()=>{
    ctx2.beginPath();
    ctx2.moveTo(0,57.5);
    ctx2.lineTo(10,50);
    ctx2.lineTo(40,50);
    ctx2.lineTo(50,57.5);
    ctx2.lineTo(40,65);
    ctx2.lineTo(10,65);
    ctx2.closePath();
    ctx2.fill();
    }
}
let hoursOnes = {
    0 : function () {drawNum2[0]()+drawNum2[1]()+drawNum2[2]()+drawNum2[3]()+ drawNum2[4]()+drawNum2[5]()
    },
    1 : function() {drawNum2[1]()+drawNum2[2]()},
    2 : function(){drawNum2[0]()+ drawNum2[4]()+ drawNum2[3]()+ drawNum2[1]()+ drawNum2[6]()},
    3 : function(){drawNum2[0]()+ drawNum2[2]()+ drawNum2[3]()+ drawNum2[1]()+ drawNum2[6]()},
    4 : function() {drawNum2[5]()+ drawNum2[2]()+drawNum2[1]()+ drawNum2[6]()},
    5 : function() {drawNum2[0]()+ drawNum2[2]()+ drawNum2[3]()+ drawNum2[5]()+ drawNum2[6]()},
    6 : function() {drawNum2[0]()+ drawNum2[2]()+ drawNum2[3]()+ drawNum2[4]()+ drawNum2[5]()+ drawNum2[6]()},
    7 : function() {drawNum2[0]() + drawNum2[1]() + drawNum2[2]()}, 
    8 : function() {drawNum2[0]()+ drawNum2[1]()+ drawNum2[2]()+ drawNum2[3]()+ drawNum2[4]()+ drawNum2[5]()+ drawNum2[6]()},
    9 : function() {drawNum2[0]()+ drawNum2[1]()+ drawNum2[2]()+ drawNum2[3]()+ drawNum2[5]()+ drawNum2[6]()}
}
//canvas 3 Minutes : Tens
const canvas3 = document.querySelector('#canvas3');
let ctx3 = canvas3.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.beginPath(); 

const drawNum3 = {
    0: a = () =>{
    ctx3.beginPath(),
    ctx3.moveTo(0,0),
    ctx3.lineTo(50,0),
    ctx3.lineTo(40,10),
    ctx3.lineTo(10,10)
    ctx3.closePath(),
    ctx3.fill()
    },
    1: b = () =>{
    ctx3.beginPath();
    ctx3.moveTo(50,5);
    ctx3.lineTo(50,55);
    ctx3.lineTo(40,45);
    ctx3.lineTo(40,15);
    ctx3.closePath();
    ctx3.fill();
    },
    2: c=() =>{
    ctx3.beginPath();
    ctx3.moveTo(50,60);
    ctx3.lineTo(50,110);
    ctx3.lineTo(40,100);
    ctx3.lineTo(40,70);
    ctx3.closePath();
    ctx3.fill();
    },
    3:d=()=>{
    ctx3.beginPath();
    ctx3.moveTo(40,105);
    ctx3.lineTo(50,115);
    ctx3.lineTo(0,115);
    ctx3.lineTo(10,105);
    ctx3.closePath();
    ctx3.fill();
    },
    4:e=()=>{
    ctx3.beginPath();
    ctx3.moveTo(10,70);
    ctx3.lineTo(10,100);
    ctx3.lineTo(0,110);
    ctx3.lineTo(0,60);
    ctx3.closePath();
    ctx3.fill();
    },
    5:f=()=>{
    ctx3.beginPath();
    ctx3.moveTo(10,15);
    ctx3.lineTo(10,45);
    ctx3.lineTo(0,55);
    ctx3.lineTo(0,5);
    ctx3.closePath();
    ctx3.fill();
    },
    6:g=()=>{
    ctx3.beginPath();
    ctx3.moveTo(0,57.5);
    ctx3.lineTo(10,50);
    ctx3.lineTo(40,50);
    ctx3.lineTo(50,57.5);
    ctx3.lineTo(40,65);
    ctx3.lineTo(10,65);
    ctx3.closePath();
    ctx3.fill();
    }
}
let minutesTens = {
    0 : function () {drawNum3[0]()+drawNum3[1]()+drawNum3[2]()+drawNum3[3]()+ drawNum3[4]()+drawNum3[5]()
    },
    1 : function() {drawNum3[1]()+drawNum3[2]()},
    2 : function(){drawNum3[0]()+ drawNum3[4]()+ drawNum3[3]()+ drawNum3[1]()+ drawNum3[6]()},
    3 : function(){drawNum3[0]()+ drawNum3[2]()+ drawNum3[3]()+ drawNum3[1]()+ drawNum3[6]()},
    4 : function() {drawNum3[5]()+ drawNum3[2]()+drawNum3[1]()+ drawNum3[6]()},
    5 : function() {drawNum3[0]()+ drawNum3[2]()+ drawNum3[3]()+ drawNum3[5]()+ drawNum3[6]()},
    6 : function() {drawNum3[0]()+ drawNum3[2]()+ drawNum3[3]()+ drawNum3[4]()+ drawNum3[5]()+ drawNum3[6]()},
    7 : function() {drawNum3[0]() + drawNum3[1]() + drawNum3[2]()}, 
    8 : function() {drawNum3[0]()+ drawNum3[1]()+ drawNum3[2]()+ drawNum3[3]()+ drawNum3[4]()+ drawNum3[5]()+ drawNum3[6]()},
    9 : function() {drawNum3[0]()+ drawNum3[1]()+ drawNum3[2]()+ drawNum3[3]()+ drawNum3[5]()+ drawNum3[6]()}
}
//canvas 4 Minutes : Ones
const canvas4 = document.getElementById('canvas4')
let ctx4= canvas4.getContext('2d');
ctx4.fillStyle = 'rgb(0, 0, 0)';
ctx4.fillRect(60,60,5,5)
ctx4.fillRect(60,70,5,5)

const drawNum4 = {
    0: a = () =>{
    ctx4.beginPath(),
    ctx4.moveTo(0,0),
    ctx4.lineTo(50,0),
    ctx4.lineTo(40,10),
    ctx4.lineTo(10,10)
    ctx4.closePath(),
    ctx4.fill()
    },
    1: b = () =>{
    ctx4.beginPath();
    ctx4.moveTo(50,5);
    ctx4.lineTo(50,55);
    ctx4.lineTo(40,45);
    ctx4.lineTo(40,15);
    ctx4.closePath();
    ctx4.fill();
    },
    2: c=() =>{
    ctx4.beginPath();
    ctx4.moveTo(50,60);
    ctx4.lineTo(50,110);
    ctx4.lineTo(40,100);
    ctx4.lineTo(40,70);
    ctx4.closePath();
    ctx4.fill();
    },
    3:d=()=>{
    ctx4.beginPath();
    ctx4.moveTo(40,105);
    ctx4.lineTo(50,115);
    ctx4.lineTo(0,115);
    ctx4.lineTo(10,105);
    ctx4.closePath();
    ctx4.fill();
    },
    4:e=()=>{
    ctx4.beginPath();
    ctx4.moveTo(10,70);
    ctx4.lineTo(10,100);
    ctx4.lineTo(0,110);
    ctx4.lineTo(0,60);
    ctx4.closePath();
    ctx4.fill();
    },
    5:f=()=>{
    ctx4.beginPath();
    ctx4.moveTo(10,15);
    ctx4.lineTo(10,45);
    ctx4.lineTo(0,55);
    ctx4.lineTo(0,5);
    ctx4.closePath();
    ctx4.fill();
    },
    6:g=()=>{
    ctx4.beginPath();
    ctx4.moveTo(0,57.5);
    ctx4.lineTo(10,50);
    ctx4.lineTo(40,50);
    ctx4.lineTo(50,57.5);
    ctx4.lineTo(40,65);
    ctx4.lineTo(10,65);
    ctx4.closePath();
    ctx4.fill();
    }
}
let minutesOnes = {
    0 : function () {drawNum4[0]()+drawNum4[1]()+drawNum4[2]()+drawNum4[3]()+ drawNum4[4]()+drawNum4[5]()
    },
    1 : function() {drawNum4[1]()+drawNum4[2]()},
    2 : function(){drawNum4[0]()+ drawNum4[4]()+ drawNum4[3]()+ drawNum4[1]()+ drawNum4[6]()},
    3 : function(){drawNum4[0]()+ drawNum4[2]()+ drawNum4[3]()+ drawNum4[1]()+ drawNum4[6]()},
    4 : function() {drawNum4[5]()+ drawNum4[2]()+drawNum4[1]()+ drawNum4[6]()},
    5 : function() {drawNum4[0]()+ drawNum4[2]()+ drawNum4[3]()+ drawNum4[5]()+ drawNum4[6]()},
    6 : function() {drawNum4[0]()+ drawNum4[2]()+ drawNum4[3]()+ drawNum4[4]()+ drawNum4[5]()+ drawNum4[6]()},
    7 : function() {drawNum4[0]() + drawNum4[1]() + drawNum4[2]()}, 
    8 : function() {drawNum4[0]()+ drawNum4[1]()+ drawNum4[2]()+ drawNum4[3]()+ drawNum4[4]()+ drawNum4[5]()+ drawNum4[6]()},
    9 : function() {drawNum4[0]()+ drawNum4[1]()+ drawNum4[2]()+ drawNum4[3]()+ drawNum4[5]()+ drawNum4[6]()}
}
//canvas 5 Seconds : Tens
const canvas5 = document.querySelector('#canvas5');
let ctx5 = canvas5.getContext('2d');
ctx5.fillStyle = 'rgb(0, 0, 0)';
ctx5.beginPath(); 

const drawNum5 = {
    0: a = () =>{
    ctx5.beginPath(),
    ctx5.moveTo(0,0),
    ctx5.lineTo(50,0),
    ctx5.lineTo(40,10),
    ctx5.lineTo(10,10)
    ctx5.closePath(),
    ctx5.fill()
    },
    1: b = () =>{
    ctx5.beginPath();
    ctx5.moveTo(50,5);
    ctx5.lineTo(50,55);
    ctx5.lineTo(40,45);
    ctx5.lineTo(40,15);
    ctx5.closePath();
    ctx5.fill();
    },
    2: c=() =>{
    ctx5.beginPath();
    ctx5.moveTo(50,60);
    ctx5.lineTo(50,110);
    ctx5.lineTo(40,100);
    ctx5.lineTo(40,70);
    ctx5.closePath();
    ctx5.fill();
    },
    3:d=()=>{
    ctx5.beginPath();
    ctx5.moveTo(40,105);
    ctx5.lineTo(50,115);
    ctx5.lineTo(0,115);
    ctx5.lineTo(10,105);
    ctx5.closePath();
    ctx5.fill();
    },
    4:e=()=>{
    ctx5.beginPath();
    ctx5.moveTo(10,70);
    ctx5.lineTo(10,100);
    ctx5.lineTo(0,110);
    ctx5.lineTo(0,60);
    ctx5.closePath();
    ctx5.fill();
    },
    5:f=()=>{
    ctx5.beginPath();
    ctx5.moveTo(10,15);
    ctx5.lineTo(10,45);
    ctx5.lineTo(0,55);
    ctx5.lineTo(0,5);
    ctx5.closePath();
    ctx5.fill();
    },
    6:g=()=>{
    ctx5.beginPath();
    ctx5.moveTo(0,57.5);
    ctx5.lineTo(10,50);
    ctx5.lineTo(40,50);
    ctx5.lineTo(50,57.5);
    ctx5.lineTo(40,65);
    ctx5.lineTo(10,65);
    ctx5.closePath();
    ctx5.fill();
    }
}
let secondsTens = {
    0 : function () {drawNum5[0]()+drawNum5[1]()+drawNum5[2]()+drawNum5[3]()+ drawNum5[4]()+drawNum5[5]()
    },
    1 : function() {drawNum5[1]()+drawNum5[2]()},
    2 : function(){drawNum5[0]()+ drawNum5[4]()+ drawNum5[3]()+ drawNum5[1]()+ drawNum5[6]()},
    3 : function(){drawNum5[0]()+ drawNum5[2]()+ drawNum5[3]()+ drawNum5[1]()+ drawNum5[6]()},
    4 : function() {drawNum5[5]()+ drawNum5[2]()+drawNum5[1]()+ drawNum5[6]()},
    5 : function() {drawNum5[0]()+ drawNum5[2]()+ drawNum5[3]()+ drawNum5[5]()+ drawNum5[6]()},
    6 : function() {drawNum5[0]()+ drawNum5[2]()+ drawNum5[3]()+ drawNum5[4]()+ drawNum5[5]()+ drawNum5[6]()},
    7 : function() {drawNum5[0]() + drawNum5[1]() + drawNum5[2]()}, 
    8 : function() {drawNum5[0]()+ drawNum5[1]()+ drawNum5[2]()+ drawNum5[3]()+ drawNum5[4]()+ drawNum5[5]()+ drawNum5[6]()},
    9 : function() {drawNum5[0]()+ drawNum5[1]()+ drawNum5[2]()+ drawNum5[3]()+ drawNum5[5]()+ drawNum5[6]()}
}

//canvas 6 Seconds : Ones
const canvas6 = document.querySelector('#canvas6');
let ctx6 = canvas6.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.beginPath(); 
const drawNum6 = {
    0: a = () =>{
    ctx6.beginPath(),
    ctx6.moveTo(0,0),
    ctx6.lineTo(50,0),
    ctx6.lineTo(40,10),
    ctx6.lineTo(10,10)
    ctx6.closePath(),
    ctx6.fill()
    },
    1: b = () =>{
    ctx6.beginPath();
    ctx6.moveTo(50,5);
    ctx6.lineTo(50,55);
    ctx6.lineTo(40,45);
    ctx6.lineTo(40,15);
    ctx6.closePath();
    ctx6.fill();
    },
    2: c=() =>{
    ctx6.beginPath();
    ctx6.moveTo(50,60);
    ctx6.lineTo(50,110);
    ctx6.lineTo(40,100);
    ctx6.lineTo(40,70);
    ctx6.closePath();
    ctx6.fill();
    },
    3:d=()=>{
    ctx6.beginPath();
    ctx6.moveTo(40,105);
    ctx6.lineTo(50,115);
    ctx6.lineTo(0,115);
    ctx6.lineTo(10,105);
    ctx6.closePath();
    ctx6.fill();
    },
    4:e=()=>{
    ctx6.beginPath();
    ctx6.moveTo(10,70);
    ctx6.lineTo(10,100);
    ctx6.lineTo(0,110);
    ctx6.lineTo(0,60);
    ctx6.closePath();
    ctx6.fill();
    },
    5:f=()=>{
    ctx6.beginPath();
    ctx6.moveTo(10,15);
    ctx6.lineTo(10,45);
    ctx6.lineTo(0,55);
    ctx6.lineTo(0,5);
    ctx6.closePath();
    ctx6.fill();
    },
    6:g=()=>{
    ctx6.beginPath();
    ctx6.moveTo(0,57.5);
    ctx6.lineTo(10,50);
    ctx6.lineTo(40,50);
    ctx6.lineTo(50,57.5);
    ctx6.lineTo(40,65);
    ctx6.lineTo(10,65);
    ctx6.closePath();
    ctx6.fill();
    }
}
let secondsOnes = {
    0 : function () {drawNum6[0]()+drawNum6[1]()+drawNum6[2]()+drawNum6[3]()+ drawNum6[4]()+drawNum6[5]()
    },
    1 : function() {drawNum6[1]()+drawNum6[2]()},
    2 : function(){drawNum6[0]()+ drawNum6[4]()+ drawNum6[3]()+ drawNum6[1]()+ drawNum6[6]()},
    3 : function(){drawNum6[0]()+ drawNum6[2]()+ drawNum6[3]()+ drawNum6[1]()+ drawNum6[6]()},
    4 : function() {drawNum6[5]()+ drawNum6[2]()+drawNum6[1]()+ drawNum6[6]()},
    5 : function() {drawNum6[0]()+ drawNum6[2]()+ drawNum6[3]()+ drawNum6[5]()+ drawNum6[6]()},
    6 : function() {drawNum6[0]()+ drawNum6[2]()+ drawNum6[3]()+ drawNum6[4]()+ drawNum6[5]()+ drawNum6[6]()},
    7 : function() {drawNum6[0]() + drawNum6[1]() + drawNum6[2]()}, 
    8 : function() {drawNum6[0]()+ drawNum6[1]()+ drawNum6[2]()+ drawNum6[3]()+ drawNum6[4]()+ drawNum6[5]()+ drawNum6[6]()},
    9 : function() {drawNum6[0]()+ drawNum6[1]()+ drawNum6[2]()+ drawNum6[3]()+ drawNum6[5]()+ drawNum6[6]()}
}
//canvas 7 A or P
const canvas7 = document.querySelector('#canvas7AMPM');
let ctx7 = canvas7.getContext('2d');
ctx7.fillStyle = 'rgb(0, 0, 0)';

let drawAmPm ={
0: a = () => { 
ctx7.beginPath() 
ctx7.moveTo(7.5,0),
ctx7.lineTo(30,0),
ctx7.lineTo(22.5,7.5),
ctx7.lineTo(15,7.5),
ctx7.closePath(),
ctx7.fill()
ctx7.beginPath(); 
ctx7.moveTo(37.5,0),
ctx7.lineTo(37.5,20),
ctx7.lineTo(27.5,15),
ctx7.lineTo(27.5,7.5),
ctx7.closePath(),
ctx7.fill()
ctx7.beginPath(),
ctx7.moveTo(0,25),
ctx7.lineTo(10,30),
ctx7.lineTo(10,40),
ctx7.lineTo(0,45),
ctx7.closePath(),
ctx7.fill()
ctx7.beginPath(),
ctx7.moveTo(0,0),
ctx7.lineTo(10,7.5),
ctx7.lineTo(10,15),
ctx7.lineTo(0,20),
ctx7.closePath(),
ctx7.fill()
ctx7.beginPath(),
ctx7.moveTo(0,22.5),
ctx7.lineTo(10,17.5),
ctx7.lineTo(27.5,17.5),
ctx7.lineTo(37.5,22.5),
ctx7.lineTo(27.5,27.5),
ctx7.lineTo(10,27.5),
ctx7.closePath(),
ctx7.fill()
},
1: p = ()=>{
ctx7.beginPath(); 
ctx7.moveTo(37.5,25),
ctx7.lineTo(27.5,30),
ctx7.lineTo(27.5,40),
ctx7.lineTo(37.5,45),
ctx7.closePath(),
ctx7.fill()}
}

//canvass 8 
const canvas8 = document.querySelector('#canvas8AMPM');
let ctx8 = canvas8.getContext('2d');
ctx8.fillStyle = 'rgb(0, 0, 0)';


let m = () =>{
ctx8.beginPath() 
ctx8.moveTo(17.5,7.5),
ctx8.lineTo(20.5,7.5),
ctx8.lineTo(20.5,40),
ctx8.lineTo(17.5,40),
ctx8.closePath(),
ctx8.fill()
ctx8.beginPath(); 
ctx8.moveTo(37.5,0),
ctx8.lineTo(37.5,20),
ctx8.lineTo(27.5,15),
ctx8.lineTo(27.5,7.5),
ctx8.closePath(),
ctx8.fill()
ctx8.beginPath(),
ctx8.moveTo(0,25),
ctx8.lineTo(10,30),
ctx8.lineTo(10,40),
ctx8.lineTo(0,45),
ctx8.closePath(),
ctx8.fill()
ctx8.beginPath(),
ctx8.moveTo(0,0),
ctx8.lineTo(10,7.5),
ctx8.lineTo(10,15),
ctx8.lineTo(0,20),
ctx8.closePath(),
ctx8.fill()
ctx8.fill()
ctx8.beginPath(); 
ctx8.moveTo(37.5,25),
ctx8.lineTo(27.5,30),
ctx8.lineTo(27.5,40),
ctx8.lineTo(37.5,45),
ctx8.closePath(),
ctx8.fill()
}

const now = new Date();
let hours = now.getHours()%12||12;
let hoursFormatted =hours.toString().toString().padStart(2,"0").split('');
let minutes = now.getMinutes().toString().padStart(2,"0").split('');
let seconds= now.getSeconds().toString().padStart(2,"0").split('');
let clockTime = [...hoursFormatted,...minutes,...seconds]
console.log(clockTime)

let displayHoursTens =()=> {
    if (clockTime[0]==='0'){
        hoursTens[0]()
    } 
    else if (clockTime[0]==='1'){
        hoursTens[1]()
    } else {
    }
}
let displayHoursOnes =()=> {
    if (clockTime[1]==='0'){
        hoursOnes[0]()
    } 
    else if (clockTime[1]==='1'){
        hoursOnes[1]()
    } 
    else if (clockTime[1]==='2'){
        hoursOnes[2]()
    }
    else if (clockTime[1]==='3'){
        hoursOnes[3]()
    }
    else if (clockTime[1]==='4'){
        hoursOnes[4]()
    }
    else if (clockTime[1]==='5'){
        hoursOnes[5]()
    }
    else if (clockTime[1]==='6'){
        hoursOnes[6]()
    }
    else if (clockTime[1]==='7'){
        hoursOnes[7]()
    }
    else if (clockTime[1]==='8'){
        hoursOnes[8]()
    }
    else if (clockTime[1]==='9'){
        hoursOnes[9]()
    }
    else {
    }
}
let displayMinutesTens = () => {
    if (clockTime[2]==='0'){
        minutesTens[0]()
    } 
    else if (clockTime[2]==='1'){
        minutesTens[1]()
    } 
    else if (clockTime[2]==='2'){
        minutesTens[2]()
    } 
    else if (clockTime[2]==='3'){
        minutesTens[3]()
    }
    else if (clockTime[2]==='4'){
        minutesTens[4]() 
    } 
    else if (clockTime[2]==='5'){
        minutesTens[5]() 
    } 
    else if (clockTime[2]==='6'){
        minutesTens[6]() 
    } 
    else if (clockTime[2]==='7'){
        minutesTens[7]() 
    } 
    else if (clockTime[2]==='8'){
        minutesTens[8]() 
    } 
    else if (clockTime[2]==='9'){
        minutesTens[9]() 
    } 
}
let displayMinutesOnes = () => {
    if (clockTime[3]==='0'){
        minutesOnes[0]()
    } 
    else if (clockTime[3]==='1'){
        minutesOnes[1]()
    } 
    else if (clockTime[3]==='2'){
        minutesOnes[2]()
    } 
    else if (clockTime[3]==='3'){
        minutesOnes[3]()
    }
    else if (clockTime[3]==='4'){
        minutesOnes[4]() 
    } 
    else if (clockTime[3]==='5'){
        minutesOnes[5]() 
    } 
    else if (clockTime[3]==='6'){
        minutesOnes[6]() 
    } 
    else if (clockTime[3]==='7'){
        minutesOnes[7]() 
    } 
    else if (clockTime[3]==='8'){
        minutesOnes[8]() 
    } 
    else if (clockTime[3]==='9'){
        minutesOnes[9]() 
    } 
}

let displaySecondsTens = () => {
    if (clockTime[4]==='0'){
        secondsTens[0]()
    } 
    else if (clockTime[4]==='1'){
        secondsTens[1]()
    } 
    else if (clockTime[4]==='2'){
        secondsTens[2]()
    } 
    else if (clockTime[4]==='3'){
        secondsTens[3]()
    }
    else if (clockTime[4]==='4'){
        secondsTens[4]() 
    } 
    else if (clockTime[4]==='5'){
        secondsTens[5]() 
    } 
    else if (clockTime[4]==='6'){
        secondsTens[6]() 
    } 
    else if (clockTime[4]==='7'){
        secondsTens[7]() 
    } 
    else if (clockTime[4]==='8'){
        secondsTens[8]() 
    } 
    else if (clockTime[4]==='9'){
        secondsTens[9]() 
    } 
}
let displaySecondsOnes = () => {
    if (clockTime[5]==='0'){
        secondsOnes[0]()
    } 
    else if (clockTime[5]==='1'){
        secondsOnes[1]()
    } 
    else if (clockTime[5]==='2'){
        secondsOnes[2]()
    } 
    else if (clockTime[5]==='3'){
        secondsOnes[3]()
    }
    else if (clockTime[5]==='4'){
        secondsOnes[4]() 
    } 
    else if (clockTime[5]==='5'){
        secondsOnes[5]() 
    } 
    else if (clockTime[5]==='6'){
        secondsOnes[6]() 
    } 
    else if (clockTime[5]==='7'){
        secondsOnes[7]() 
    } 
    else if (clockTime[5]==='8'){
        secondsOnes[8]() 
    } 
    else if (clockTime[5]==='9'){
        secondsOnes[9]() 
    } 
}
let displayPorA = () => {
    if (now.getHours>12){
        drawAmPm[0]()
        drawAmPm[1]()
    }else{drawAmPm[0]()}
}

displayHoursTens()
displayHoursOnes()
displayMinutesTens()
displayMinutesOnes()
displaySecondsTens()
displaySecondsOnes()
displayPorA()
m()