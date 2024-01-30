window.onload = function () {
    setInterval(updateTime,1000);
}

function updateTime() {
    var hourEl = document.getElementById("hour");
    var minuteEl = document.getElementById("minute");
    var secondEl = document.getElementById("second");

    let d = new Date();
    let hours = d.getHours();
    
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours >= 0 && hours <= 9) hours = "0" + hours;
    if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
    if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

    const dateEl = document.getElementById('date');
    let date = d.getDate();
    if (date >= 0 && date <= 9) date = "0" + date;

    let month = d.getMonth() + 1; 
    if (month >= 0 && month <= 9) month = "0" + month;

    let year = d.getFullYear();

    dateEl.innerHTML=`${date}/${month}/${year}`;

    const dayEl = document.getElementById('day');
    let dayNumber = d.getDay();

    console.log(dayNumber);
    let day = "";
    switch (dayNumber) {
        case 0: day = "Sunday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
    }
   dayEl.innerHTML = day;




   var hourEll = document.getElementById("hour1");
   var minuteEll = document.getElementById("minute1");
   var secondEll = document.getElementById("second1");

   let d1 = new Date();
   let hours1 = d1.getHours()-2;
   
   let minutes1 = d1.getMinutes();
   let seconds1 = d1.getSeconds();
 
   if (hours1 >= 0 && hours1 <= 9) hours1 = "0" + hours1;
   if (minutes1 >= 0 && minutes1 <= 9) minutes1 = "0" + minutes1;
   if (seconds1 >= 0 && seconds1 <= 9) seconds1 = "0" + seconds1;
   hourEll.innerHTML = hours1;
   minuteEll.innerHTML = minutes1;
   secondEll.innerHTML = seconds1;
   const dateEll = document.getElementById('date1');
    let date0 = d1.getDate();
    if (date0 >= 0 && date0 <= 9) date0 = "0" + date0;

    let month1 = d1.getMonth() + 1; 
    if (month1 >= 0 && month <= 9) month1 = "0" + month1;

    let year1 = d1.getFullYear();

    dateEll.innerHTML=`${date0}/${month1}/${year1}`;

    
    const dayEll = document.getElementById('day1');

   let dayNumber1 = d.getDay();

   console.log(dayNumber1);
    let day0 = "";
    switch (dayNumber1) {
        case 0: day0 = "Sunday"; break;
        case 1: day0= "Monday"; break;
        case 2: day0 = "Tuesday"; break;
        case 3: day0 = "Wednesday"; break;
        case 4: day0 = "Thursday"; break;
        case 5: day0 = "Friday"; break;
        case 6: day0 = "Saturday"; break;
    }
   dayEll.innerHTML = day0;



 var hourElll = document.getElementById("hour2");
   var minuteElll = document.getElementById("minute2");
   var secondElll = document.getElementById("second2");

   let d2 = new Date();
   let hours2 = d2.getHours()+3;
   
   let minutes2 = d2.getMinutes();
   let seconds2 = d2.getSeconds();
 
   if (hours2 >= 0 && hours2 <= 9) hours2 = "0" + hours2;
   if (minutes2 >= 0 && minutes2 <= 9) minutes2 = "0" + minutes2;
   if (seconds2 >= 0 && seconds2 <= 9) seconds2 = "0" + seconds2;
   hourElll.innerHTML = hours2;
   minuteElll.innerHTML = minutes2;
   secondElll.innerHTML = seconds2;
   const dateElll = document.getElementById('date2');
    let date1 = d2.getDate();
    if (date1 >= 0 && date1<= 9) date1 = "0" + date1;

    let month2 = d2.getMonth() + 1; 
    if (month2>= 0 && month2 <= 9) month2 = "0" + month2;

    let year2 = d2.getFullYear();

    dateElll.innerHTML=`${date1}/${month2}/${year2}`;
    const dayElll = document.getElementById('day2');

    let dayNumber2 = d.getDay();
 
    console.log(dayNumber2);
     let day1 = "";
     switch (dayNumber2) {
         case 0: day1 = "Sunday"; break;
         case 1: day1= "Monday"; break;
         case 2: day1 = "Tuesday"; break;
         case 3: day1 = "Wednesday"; break;
         case 4: day1 = "Thursday"; break;
         case 5: day1 = "Friday"; break;
         case 6: day1 = "Saturday"; break;
     }
    dayElll.innerHTML = day1;

}



