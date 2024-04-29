

// function clock() {

//   let monthName =[ "Jauary",
//    "February",
//    "march",
//    "April", 
//    "may",
//    "june", 
// "July",
//  "August",
// "September",
// "October",
//  "November",
// "December",]

// let dayName=["Sunday",
//  "Monday",
//   "tuesday",
//   "Wednesday",
// "Thursday", 
// "Friday",
//  "Saturday"
// ]
//   let today= new Date();

//   document.getElementById('Date').innerHTML = innerHTML= (dayName[
//  today.getDate()]+" "+
//  today.getDate()+ ' '+ monthName[ today.getDay()]+ ' ' + today.getFullYear(
//  ));
//  let h = today.getHours();
//  let m = today.getMinutes();
//  let s = today.getSeconds();
// //  let day = h <11 ? 'AM' : 'PM'
  
// //  h = h<10? '0'
// //  m = m<10? '0'
// //  s = s<10? '0'
// //  <li id="hours">05</li>
// //         <li id="point">:</li>
// //         <li id="main">20</li>
// //         <li id="point">20</li>
// //         <li id="sec">20</li>

// console.log()
//  document.querySelector("#hours").innerHTML=h;
//  document.getElementById('min').innerHTML=m;
//  document.getElementById('sec').innerHTML=s;
// } 


// setInterval(clock , 1000)











// -------------------


function clock(){
                
  var monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ]; 
  var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  var today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
  today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

  
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h<11 ? 'AM': 'PM';

  h = h<10? '0'+h: h;
  m = m<10? '0'+m: m;
  s = s<10? '0'+s: s;               

  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;

}
setInterval(clock,400);





