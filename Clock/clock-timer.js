//canvas 1 Hours : Tens
const canvas1 = document.querySelector('#canvas');
let ctx = canvas1.getContext('2d');
ctx.fillStyle = 'rgb(0, 0, 0)';

const drawHorizontal0=(x,y)=>{
ctx.beginPath(),
ctx.moveTo(x,y),
ctx.lineTo(x+10,y-5),
ctx.lineTo(x+30,y-5),
ctx.lineTo(x+40,y),
ctx.lineTo(x+30,y+5),
ctx.lineTo(x+10,y+5),
ctx.closePath(),
ctx.fill()
}
const drawVertical0=(x,y) => {
ctx.beginPath();
ctx.moveTo(x,y),
ctx.lineTo(x-5,y+20),
ctx.lineTo(x-5,y+40),
ctx.lineTo(x,y+50),
ctx.lineTo(x+5,y+40),
ctx.lineTo(x+5,y+20),
ctx.closePath(),
ctx.fill();
} 

//canvas 2 Hours : Ones
const canvas2 = document.getElementById('canvas2')
let ctx1= canvas2.getContext('2d');
ctx1.fillStyle = 'rgb(0, 0, 0)';
ctx1.fillRect(60,40,5,5)
ctx1.fillRect(60,60,5,5)
const drawHorizontal1=(x,y)=>{
     ctx1.beginPath(),
     ctx1.moveTo(x,y),
     ctx1.lineTo(x+10,y-5),
     ctx1.lineTo(x+30,y-5),
     ctx1.lineTo(x+40,y),
     ctx1.lineTo(x+30,y+5),
     ctx1.lineTo(x+10,y+5),
     ctx1.closePath(),
     ctx1.fill()
     }
const drawVertical1=(x,y) => {
     ctx1.beginPath();
     ctx1.moveTo(x,y),
     ctx1.lineTo(x-5,y+20),
     ctx1.lineTo(x-5,y+40),
     ctx1.lineTo(x,y+50),
     ctx1.lineTo(x+5,y+40),
     ctx1.lineTo(x+5,y+20),
     ctx1.closePath(),
     ctx1.fill();
     } 
     
//canvas 3 Minutes : Tens
const canvas3 = document.querySelector('#canvas3');
let ctx2 = canvas3.getContext('2d');
ctx2.fillStyle = 'rgb(0, 0, 0)';
ctx2.beginPath(); 
const drawHorizontal2=(x,y)=>{
     ctx2.beginPath(),
     ctx2.moveTo(x,y),
     ctx2.lineTo(x+10,y-5),
     ctx2.lineTo(x+30,y-5),
     ctx2.lineTo(x+40,y),
     ctx2.lineTo(x+30,y+5),
     ctx2.lineTo(x+10,y+5),
     ctx2.closePath(),
     ctx2.fill()
     }
const drawVertical2=(x,y) => {
     ctx2.beginPath();
     ctx2.moveTo(x,y),
     ctx2.lineTo(x-5,y+20),
     ctx2.lineTo(x-5,y+40),
     ctx2.lineTo(x,y+50),
     ctx2.lineTo(x+5,y+40),
     ctx2.lineTo(x+5,y+20),
     ctx2.closePath(),
     ctx2.fill();
     } 
     
// //canvas 4 Minutes : Ones
const canvas4 = document.getElementById('canvas4')
let ctx3= canvas4.getContext('2d');
ctx3.fillStyle = 'rgb(0, 0, 0)';
ctx3.fillRect(60,40,5,5)
ctx3.fillRect(60,60,5,5)
const drawHorizontal3=(x,y)=>{
     ctx3.beginPath(),
     ctx3.moveTo(x,y),
     ctx3.lineTo(x+10,y-5),
     ctx3.lineTo(x+30,y-5),
     ctx3.lineTo(x+40,y),
     ctx3.lineTo(x+30,y+5),
     ctx3.lineTo(x+10,y+5),
     ctx3.closePath(),
     ctx3.fill()
     }
const drawVertical3=(x,y) => {
     ctx3.beginPath();
     ctx3.moveTo(x,y),
     ctx3.lineTo(x-5,y+20),
     ctx3.lineTo(x-5,y+40),
     ctx3.lineTo(x,y+50),
     ctx3.lineTo(x+5,y+40),
     ctx3.lineTo(x+5,y+20),
     ctx3.closePath(),
     ctx3.fill();
     } 

// //canvas 5 Seconds : Tens
const canvas5 = document.querySelector('#canvas5');
let ctx4 = canvas5.getContext('2d');
ctx4.fillStyle = 'rgb(0, 0, 0)';
ctx4.beginPath(); 
const drawHorizontal4=(x,y)=>{
     ctx4.beginPath(),
     ctx4.moveTo(x,y),
     ctx4.lineTo(x+10,y-5),
     ctx4.lineTo(x+30,y-5),
     ctx4.lineTo(x+40,y),
     ctx4.lineTo(x+30,y+5),
     ctx4.lineTo(x+10,y+5),
     ctx4.closePath(),
     ctx4.fill()
     }
const drawVertical4=(x,y) => {
     ctx4.beginPath();
     ctx4.moveTo(x,y),
     ctx4.lineTo(x-5,y+20),
     ctx4.lineTo(x-5,y+40),
     ctx4.lineTo(x,y+50),
     ctx4.lineTo(x+5,y+40),
     ctx4.lineTo(x+5,y+20),
     ctx4.closePath(),
     ctx4.fill();
     } 
// //canvas 6 Seconds : Ones
const canvas6 = document.querySelector('#canvas6');
let ctx5 = canvas6.getContext('2d');
ctx5.fillStyle = 'rgb(0, 0, 0)';
ctx5.beginPath(); 
const drawHorizontal5=(x,y)=>{
     ctx5.beginPath(),
     ctx5.moveTo(x,y),
     ctx5.lineTo(x+10,y-5),
     ctx5.lineTo(x+30,y-5),
     ctx5.lineTo(x+40,y),
     ctx5.lineTo(x+30,y+5),
     ctx5.lineTo(x+10,y+5),
     ctx5.closePath(),
     ctx5.fill()
     }
const drawVertical5=(x,y) => {
     ctx5.beginPath();
     ctx5.moveTo(x,y),
     ctx5.lineTo(x-5,y+20),
     ctx5.lineTo(x-5,y+40),
     ctx5.lineTo(x,y+50),
     ctx5.lineTo(x+5,y+40),
     ctx5.lineTo(x+5,y+20),
     ctx5.closePath(),
     ctx5.fill();
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
drawHorizontal7(5,5) //a
drawVertical7(35,5) //b
drawVertical7(35,30) //c
drawVertical7(5,30) //e
drawVertical7(5,5) //f
drawVertical7(20,10) 
drawVertical7(20,18) 
// const new Date() = new Date();
const clock = {
    hours: new Date().getHours()%12||12,
    minutes: new Date().getMinutes().toString().padStart(2,"0").split(''),
    seconds: new Date().getSeconds().toString().padStart(2,"0").split(''),
    get hoursFormatted (){
       return this.hours.toString().padStart(2,"0").split('')
    },
    displayAP(){
         if (new Date().getHours()>=12){
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
    },
    displayHoursTens (){
     if (this.hoursFormatted[0]==='0'){
          drawHorizontal0(5,5),drawVertical0(45,5),drawVertical0(45,50),drawHorizontal0(5,100),drawVertical0(5,50)
     } 
     else if (this.hoursFormatted[0]==='1'){
          drawVertical0(45,5),drawVertical0(45,50)} 
    else {}},
    displayHoursOnes(){
        if (this.hoursFormatted[1]==='0'){
          drawHorizontal1(5,5),drawVertical1(45,5),drawVertical1(45,50),drawHorizontal1(5,100),drawVertical1(5,50),drawVertical1(5,5)
        } 
        else if (this.hoursFormatted[1]==='1'){
          drawVertical1(45,5),drawVertical1(45,50)
        } 
        else if (this.hoursFormatted[1]==='2'){
          drawHorizontal1(5,5),drawVertical1(45,5),drawHorizontal1(5,100),drawVertical1(5,50),drawHorizontal1(5,50)
        }
        else if (this.hoursFormatted[1]==='3'){
          drawHorizontal1(5,5),drawVertical1(45,5),drawVertical1(45,50),drawHorizontal1(5,100),drawHorizontal1(5,50)
        }
        else if (this.hoursFormatted[1]==='4'){
          drawVertical1(45,5),drawVertical1(45,50),drawVertical1(5,5),drawHorizontal1(5,50)
        }
        else if (this.hoursFormatted[1]==='5'){
          drawHorizontal1(5,5),drawVertical1(45,50),drawHorizontal1(5,100),drawVertical1(5,5),drawHorizontal1(5,50)
        }
        else if (this.hoursFormatted[1]==='6'){
          drawHorizontal1(5,5),drawVertical1(45,50),drawHorizontal1(5,100),drawVertical1(5,50),drawVertical1(5,5),drawHorizontal1(5,50)
        }
        else if (this.hoursFormatted[1]==='7'){
          drawHorizontal1(5,5),drawVertical1(45,5),drawVertical1(45,50)
        }
        else if (this.hoursFormatted[1]==='8'){
          drawHorizontal1(5,5) //a
          drawVertical1(45,5) //b
          drawVertical1(45,50) //c
          drawHorizontal1(5,100) //d
          drawVertical1(5,50) //e
          drawVertical1(5,5) //f
          drawHorizontal1(5,50) //g
        }
        else if (this.hoursFormatted[1]==='9'){
          drawHorizontal1(5,5),drawVertical1(45,5),drawVertical1(45,50),drawHorizontal1(5,100),drawVertical1(5,5),drawHorizontal1(5,50)
        }
    else {}},
    displayMinutesTens (){
     if (this.minutes[0]==='0'){
          drawHorizontal2(5,5),drawVertical2(45,5),drawVertical2(45,50),drawHorizontal2(5,100),drawVertical2(5,50),drawVertical2(5,5)
          } 
          else if (this.minutes[0]==='1'){
          drawVertical2(45,5),drawVertical2(45,50)
          } 
          else if (this.minutes[0]==='2'){
          drawHorizontal2(5,5),drawVertical2(45,5),drawHorizontal2(5,100),drawVertical2(5,50),drawHorizontal2(5,50)
          }
          else if (this.minutes[0]==='3'){
          drawHorizontal2(5,5),drawVertical2(45,5),drawVertical2(45,50),drawHorizontal2(5,100),drawHorizontal2(5,50)
          }
          else if (this.minutes[0]==='4'){
          drawVertical2(45,5),drawVertical2(45,50),drawVertical2(5,5),drawHorizontal2(5,50)
          }
          else if (this.minutes[0]==='5'){
          drawHorizontal2(5,5),drawVertical2(45,50),drawHorizontal2(5,100),drawVertical2(5,5),drawHorizontal2(5,50)
          }
    else {}},
    displayMinutesOnes (){
     if (this.minutes[1]==='0'){
          drawHorizontal3(5,5),drawVertical3(45,5),drawVertical3(45,50),drawHorizontal3(5,100),drawVertical3(5,50),drawVertical3(5,5)
        } 
        else if (this.minutes[1]==='1'){
          drawVertical3(45,5),drawVertical3(45,50)
        } 
        else if (this.minutes[1]==='2'){
          drawHorizontal3(5,5),drawVertical3(45,5),drawHorizontal3(5,100),drawVertical3(5,50),drawHorizontal3(5,50)
        }
        else if (this.minutes[1]==='3'){
          drawHorizontal3(5,5),drawVertical3(45,5),drawVertical3(45,50),drawHorizontal3(5,100),drawHorizontal3(5,50)
        }
        else if (this.minutes[1]==='4'){
          drawVertical3(45,5),drawVertical3(45,50),drawVertical3(5,5),drawHorizontal3(5,50)
        }
        else if (this.minutes[1]==='5'){
          drawHorizontal3(5,5),drawVertical3(45,50),drawHorizontal3(5,100),drawVertical3(5,5),drawHorizontal3(5,50)
        }
        else if (this.minutes[1]==='6'){
          drawHorizontal3(5,5),drawVertical3(45,50),drawHorizontal3(5,100),drawVertical3(5,50),drawVertical3(5,5),drawHorizontal3(5,50)
        }
        else if (this.minutes[1]==='7'){
          drawHorizontal3(5,5),drawVertical3(45,5),drawVertical3(45,50)
        }
        else if (this.minutes[1]==='8'){
          drawHorizontal3(5,5) //a
          drawVertical3(45,5) //b
          drawVertical3(45,50) //c
          drawHorizontal3(5,100) //d
          drawVertical3(5,50) //e
          drawVertical3(5,5) //f
          drawHorizontal3(5,50) //g
        }
        else if (this.minutes[1]==='9'){
          drawHorizontal3(5,5),drawVertical3(45,5),drawVertical3(45,50),drawHorizontal3(5,100),drawVertical3(5,5),drawHorizontal3(5,50)}
    else {}},
    displaySecondsTens (){
     if (this.seconds[0]==='0'){
          drawHorizontal4(5,5),drawVertical4(45,5),drawVertical4(45,50),drawHorizontal4(5,100),drawVertical4(5,50),drawVertical4(5,5)
        } 
        else if (this.seconds[0]==='1'){
          drawVertical4(45,5),drawVertical4(45,50)
        } 
        else if (this.seconds[0]==='2'){
          drawHorizontal4(5,5),drawVertical4(45,5),drawHorizontal4(5,100),drawVertical4(5,50),drawHorizontal4(5,50)
        }
        else if (this.seconds[0]==='3'){
          drawHorizontal4(5,5),drawVertical4(45,5),drawVertical4(45,50),drawHorizontal4(5,100),drawHorizontal4(5,50)
        }
        else if (this.seconds[0]==='4'){
          drawVertical4(45,5),drawVertical4(45,50),drawVertical4(5,5),drawHorizontal4(5,50)
        }
        else if (this.seconds[0]==='5'){
          drawHorizontal4(5,5),drawVertical4(45,50),drawHorizontal4(5,100),drawVertical4(5,5),drawHorizontal4(5,50)
        }
        else if (this.seconds[0]==='6'){
          drawHorizontal4(5,5),drawVertical4(45,50),drawHorizontal4(5,100),drawVertical4(5,50),drawVertical4(5,5),drawHorizontal4(5,50)
        }
        else if (this.seconds[0]==='7'){
          drawHorizontal4(5,5),drawVertical4(45,5),drawVertical4(45,50)
        }
        else if (this.seconds[0]==='8'){
          drawHorizontal4(5,5) //a
          drawVertical4(45,5) //b
          drawVertical4(45,50) //c
          drawHorizontal4(5,100) //d
          drawVertical4(5,50) //e
          drawVertical4(5,5) //f
          drawHorizontal4(5,50) //g
        }
        else if (this.seconds[0]==='9'){
          drawHorizontal4(5,5),drawVertical4(45,5),drawVertical4(45,50),drawHorizontal4(5,100),drawVertical4(5,5),drawHorizontal4(5,50)}
    else {}},
    displaySecondsOnes (){
     if (this.seconds[1]==='0'){
          drawHorizontal5(5,5),drawVertical5(45,5),drawVertical5(45,50),drawHorizontal5(5,100),drawVertical5(5,50),drawVertical5(5,5)
        } 
        else if (this.seconds[1]==='1'){
          drawVertical5(45,5),drawVertical5(45,50)
        } 
        else if (this.seconds[1]==='2'){
          drawHorizontal5(5,5),drawVertical5(45,5),drawHorizontal5(5,100),drawVertical5(5,50),drawHorizontal5(5,50)
        }
        else if (this.seconds[1]==='3'){
          drawHorizontal5(5,5),drawVertical5(45,5),drawVertical5(45,50),drawHorizontal5(5,100),drawHorizontal5(5,50)
        }
        else if (this.seconds[1]==='4'){
          drawVertical5(45,5),drawVertical5(45,50),drawVertical5(5,5),drawHorizontal5(5,50)
        }
        else if (this.seconds[1]==='5'){
          drawHorizontal5(5,5),drawVertical5(45,50),drawHorizontal5(5,100),drawVertical5(5,5),drawHorizontal5(5,50)
        }
        else if (this.seconds[1]==='6'){
          drawHorizontal5(5,5),drawVertical5(45,50),drawHorizontal5(5,100),drawVertical5(5,50),drawVertical5(5,5),drawHorizontal5(5,50)
        }
        else if (this.seconds[1]==='7'){
          drawHorizontal5(5,5),drawVertical5(45,5),drawVertical5(45,50)
        }
        else if (this.seconds[1]==='8'){
          drawHorizontal5(5,5) //a
          drawVertical5(45,5) //b
          drawVertical5(45,50) //c
          drawHorizontal5(5,100) //d
          drawVertical5(5,50) //e
          drawVertical5(5,5) //f
          drawHorizontal5(5,50) //g
        }
        else if (this.seconds[1]==='9'){
          drawHorizontal5(5,5),drawVertical5(45,5),drawVertical5(45,50),drawHorizontal5(5,100),drawVertical5(5,5),drawHorizontal5(5,50)}
    else {}},
};
// clock.displayHoursTens()
// clock.displayHoursOnes()
// clock.displayMinutesTens()
// clock.displayMinutesOnes()
// clock.displaySecondsTens()
// clock.displaySecondsOnes()

console.log(clock.hoursFormatted)
console.log(clock.minutes)
console.log(clock.seconds)

setInterval(() => {
     clock.displaySecondsTens()
     clock.displaySecondsOnes()
     clock.displayAP()
}, 1000);

