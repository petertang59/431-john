// jQuery(document).ready(function($){
// 	$('#button').click(function(){
// 		$('#myVideo').css({'display':'none'});
// 	});
// });
 jQuery(document).ready(function($){
	$('#change').click(function(){
		$('#myVideo').toggleClass('disappear');
	});
});

 /* Check if it is april fools day */
// var aprilFools = {
//   month: 10,
//   date: 6
// }

// function isItAprilFoolDay() {
//   var now = new Date();
//   return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
// }

// if(isItAprilFoolDay()){
//   // fuck with people
// } else {
//   // there is less fake stuff today
// }

// 
  
// ---- Day 1 ----

var checkDay = {
  month: 10,
  date: 6
}

function whatDay() {
  var now = new Date();
  return (now.getMonth() == checkDay.month && now.getDate() == checkDay.date);
}

if(whatDay()){
  // window.location = "http://www.google.ca";
} else {
  // window.location = "index.html";
}

// ---- Day 2 ------ 

var checkDay1 = {
  month: 10,
  date: 7
}

function whatDay1() {
  var now = new Date();
  return (now.getMonth() == checkDay.month && now.getDate() == checkDay1.date);
}

if(whatDay1()){
  // window.location = "http://www.facebook.com";
} else {
  // window.location = "index.html";
}