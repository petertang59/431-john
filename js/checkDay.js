// <script type='text/javascript'>

var todaysdate = new Date();
var dd = todaysdate.getDate();
var mm = todaysdate.getMonth()+1; //January is 0!
var yyyy = todaysdate.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

todaysdate = mm+'/'+dd+'/'+yyyy;
document.getElementById("date").innerHTML = "Today's date is <b>"+ todaysdate+"</b>";

function checkDay() {
    var d = new Date();
    var today = d.getDay(); 
    console.log(today);  
    // document.getElementById("date").innerHTML = today;    

    if (today == 5) {
        window.location = "test-store.html";
    }

}


window.onload = checkDay();
// window.onload = runDay();