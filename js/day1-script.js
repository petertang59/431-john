var localStorage = localStorage.getItem('message');
// localStorage.message="Type Here";

var $new = $('.josh');
$('#retrieve').append($new);
$new.show('slow');

$(document).ready(function () {
        document.getElementById("retrieve").innerHTML = 
        localStorage.getItem('message');
    });

// <----- First Input Steps: ------>

// 1) Click Button
$('#text-button').on('click', function(){

// 1.5) disable answers
    $(".answers").css("opacity","0");
    $(".answers").css("pointer-events","none");

// 2) Store typed input
    localStorage.setItem("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterFirst.value)+"</b></p></div>");
       document.getElementById("retrieve").innerHTML = localStorage.getItem("message"); 

// 3) Change answers        
       $(".text-input").css("display","none");
       $("#d1-14").css("display","block");
       $("#d1-2").css("display","block");    

// 4) Show and hide john is typing first message       
    $(".typing").delay(1000).show('fast');
    $(".typing").delay(1000).hide('fast');

// 5) Add first message
    $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>Hi Josh :)</b></p></div>");
        next(); 
        // $(this > '.john').css("display","none");
        // $(this > '.john').show('slow');
        });

// 6) Show and hide john is typing second message     
     $(".typing").delay(1000).show('fast');
     $(".typing").delay(1000).hide('fast');

// 7) Add second message
     $('#retrieve').delay(2500).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>nice to meet you</b></p></div>");
        next();
        
// 8) Store messages
          localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>Hi Josh :)</b></p></div>");
        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>nice to meet you</b></p></div>");      
        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");    
        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto"); 
        });



     });


// D1-2

      $("#d1-2").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Nice to meet you too! Where are you from?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
    
        // $('#retrieve').append("<div class='john'><img src='img/avatar.png'><p>You: <b>How are you?</b></p></div>");
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>fort mcmurray, haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>fort mcmurray, haha</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>alberta</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>alberta</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

            $(".answers").css("opacity","1");
            $(".answers").css("pointer-events","auto");
            $("#d1-14").css("display","none");
            $("#d1-2").css("display","none");

            $("#d1-3").css("display","block");
            $("#d1-4").css("display","block");
            $("#d1-5").css("display","block");    
        });
    });
});
    


// D1-3

     $("#d1-3").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Is it super cold there?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>freezing lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>freezing lol</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>how about you? where you from originally?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>how about you? where you from originally?</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
            $("#d1-3").css("display","none");
            $("#d1-4").css("display","none");
            $("#d1-5").css("display","none");

            $("#d1-6").css("display","block");
        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto"); 
        });
    });        
});

// D1-4

    $("#d1-4").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

          localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>I've never heard of it. What's it like there?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>freezing lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>freezing lol</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>how about you? where you from originally?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>how about you? where you from originally?</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
            $("#d1-3").css("display","none");
            $("#d1-4").css("display","none");
            $("#d1-5").css("display","none");

            $("#d1-6").css("display","block");

        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
         });
        });
    });

// D1-5

    $("#d1-5").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Cool! What brings you to Vancouver?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'm a construction worker</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'm a construction worker</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>I got relocated here a few weeks ago for some road work</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>I got relocated here a few weeks ago for some road work</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>pretty nice here so far :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>pretty nice here so far :)</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
            $("#d1-3").css("display","none");
            $("#d1-4").css("display","none");
            $("#d1-5").css("display","none");

            $("#d1-7").css("display","block");
            $("#d1-11").css("display","block");
            $(".answers").css("opacity","1");
            $(".answers").css("pointer-events","auto");
                    });
                });
            });        
        });

// D1-6

    $('#d1-6 > button').on('click', function(){

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterSix.value)+"</b></p></div>");

           document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

           $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh nice</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>oh nice</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'm living out in surrey right now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'm living out in surrey right now</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard its pretty dangerous here, people dying, haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard its pretty dangerous here, people dying, haha</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>but whatever. not a big deal, people die all the time</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>but whatever. not a big deal, people die all the time</b></p></div>");

        next();
         
        
        $("#d1-6").css("display","none");

        $("#d1-8").css("display","block");
        $("#d1-9").css("display","block");

        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
               });
            });
            });
        });

    });

// D1-7

    $('#d1-7').on('click', function(){

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Where in Vancouver you staying?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

           $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'm living out in surrey right now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'm living out in surrey right now</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard its pretty dangerous here, people dying, haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard its pretty dangerous here, people dying, haha</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>but whatever. not a big deal, people die all the time</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>but whatever. not a big deal, people die all the time</b></p></div>");

        next();
         
        
        $("#d1-7").css("display","none");
        $("#d1-11").css("display","none");

        $("#d1-8").css("display","block");
        $("#d1-9").css("display","block");

        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
               });
            });
            });


    });



// D1-8

$('#d1-8').on('click', function(){

    $(".answers").css("opacity","0");
    $(".answers").css("pointer-events","none");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Yeah Surrey's pretty bad.</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>yea</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>yea</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast')

         localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>but it'll do</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>but it'll do</b></p></div>");
        next();
            });
        });

        $("#d1-8").css("display","none");
        $("#d1-9").css("display","none");

        $("#d1-11").css("display","block");

        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
});

// D1-9

$('#d1-9').on('click', function(){

    $(".answers").css("opacity","0");
    $(".answers").css("pointer-events","none");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>uh that's pretty dark John.</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>lol sorry just thinking out loud</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>lol sorry just thinking out loud</b></p></div>");
        next();
        $(".answers").css("opacity","1");
    $(".answers").css("pointer-events","auto");
        });

        $("#d1-8").css("display","none");
        $("#d1-9").css("display","none");

        $("#d1-10").css("display","block");
});

// D1-10

$('#d1-10').on('click', function(){

$(".answers").css("opacity","1");
    $(".answers").css("pointer-events","auto");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>No worries :)</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $("#d1-10").css("display","none");
        $("#d1-11").css("display","block");
        $(".answers").css("opacity","1");
    $(".answers").css("pointer-events","auto");
});


// D1-11

$('#d1-11').on('click', function(){

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>That's good to hear :) so what do you do for fun?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>I used to be really into cooking and working out</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>I used to be really into cooking and working out</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast')

         localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>haven't really been motivated to do it recently though</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>haven't really been motivated to do it recently though</b></p></div>");
        next();

        $(".answers").css("opacity","1");
    $(".answers").css("pointer-events","auto");
            });

        $("#d1-11").css("display","none");

        $("#d1-12").css("display","block");
        $("#d1-13").css("display","block");

        });

        
});

// D12

$('#d1-12').on('click', function(){

    $(".answers").css("opacity","0");
    $(".answers").css("pointer-events","none");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Ah I see.</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>how about you?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>how about you?</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast')

         localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>what do you like to do?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>what do you like to do?</b></p></div>");
        next();

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
            });
        });

        $("#d1-12").css("display","none");
        $("#d1-13").css("display","none");

        $("#d1-20").css("display","block");
});

// D13

$('#d1-13').on('click', function(){

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

     localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Oh, why not?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>no big reason</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>no big reason</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast')

         localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>just been hard to find motivation, haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>just been hard to find motivation, haha</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>how about you?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>how about you?</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast')

         localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>what do you like to do?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>what do you like to do?</b></p></div>");
        next();
        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
                        });
                    });
                });
$("#d1-12").css("display","none");
        $("#d1-13").css("display","none");

        $("#d1-20").css("display","block");        
            });        
});

// D1-14

     $("#d1-14").click(function () {

                $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>How are you?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'm alright. you?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>You: <b>i'm alright. you?</b></p></div>");
        next();

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-14").css("display","none");
        $("#d1-2").css("display","none");

        $("#d1-15").css("display","block");
        $("#d1-16").css("display","block");
        $("#d1-17").css("display","block");

    });

// D1-15

$("#d1-15").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>I'm doing great!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>nice haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>You: <b>nice haha</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

        });
        $("#d1-15").css("display","none");
        $("#d1-16").css("display","none");
        $("#d1-17").css("display","none");

        $("#d1-18").css("display","block");
        $("#d1-19").css("display","block");

    });

// D1-16

$("#d1-16").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Not bad, not bad</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>nice haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>nice haha</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");           
        });
        $("#d1-15").css("display","none");
        $("#d1-16").css("display","none");
        $("#d1-17").css("display","none");

        $("#d1-18").css("display","block");
        $("#d1-19").css("display","block");

    });

// D1-17

$("#d1-17").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Could be better, haha</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>lol</b></p></div>");
        next();

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i feel you man</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i feel you man</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");  

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");         
        });
        });
        $("#d1-15").css("display","none");
        $("#d1-16").css("display","none");
        $("#d1-17").css("display","none");

        $("#d1-18").css("display","block");
        $("#d1-19").css("display","block");

    });

// d1-18

$("#d1-18").click(function () {

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>So where are you from?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>fort mcmurray, haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>fort mcmurray, haha</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>alberta</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>alberta</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
        $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

            $("#d1-18").css("display","none");
            $("#d1-19").css("display","none");

            $("#d1-3").css("display","block");
            $("#d1-4").css("display","block");
            $("#d1-5").css("display","block");
        
        });
    });
});

// d1-19

$("#d1-19").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>So what brings you to Vancouver?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      
        
       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'm a construction worker</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'm a construction worker</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>I got relocated here a few weeks ago for some road work</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>I got relocated here a few weeks ago for some road work</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>pretty nice here so far :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>pretty nice here so far :)</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
                    $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

            $("#d1-18").css("display","none");
            $("#d1-19").css("display","none");

            $("#d1-7").css("display","block");
            $("#d1-11").css("display","block");
                    });
                });
            });
        });

// D1-20

$('#d1-20 > button').on('click', function(){

        $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterTwenty.value)+"</b></p></div>");

           document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

           $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>that's cool</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>that's cool</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you like music?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you like music?</b></p></div>");
        next();

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

         // $(".typing").delay(1000).show('fast');
         // $(".typing").delay(1000).hide('fast');
         
        
        $("#d1-20").css("display","none");

        $("#d1-21").css("display","block");
        $("#d1-23").css("display","block");
        $("#d1-24").css("display","block");
            });
        });
    });

// D1-21

$("#d1-21").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Yeah. I'm actually a musician and producer!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh cool, what kind of music?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>john: <b>oh cool, what kind of music?</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message"); 

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");          
        });
        $("#d1-21").css("display","none");
        $("#d1-23").css("display","none");
        $("#d1-24").css("display","none");

        $("#d1-22").css("display","block");

    });

// d1-22

$('#d1-22 > button').on('click', function(){
            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");

        localStorage.message+=("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterTwentytwo.value)+"</b></p></div>");

           document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

           $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>nice</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>nice</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");
        next();
        
         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");
        next();
                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

        
        $("#d1-22").css("display","none");

        $("#d1-25").css("display","block");
        $("#d1-26").css("display","block");
            });
            });
        });        
        });
    });

// D1-23

$("#d1-23").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
          localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Yeah, music's great!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");       

                  $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>nice</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>nice</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");
        next();
        
         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");  

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");         
        });
        $("#d1-21").css("display","none");
        $("#d1-23").css("display","none");
        $("#d1-24").css("display","none");

        $("#d1-25").css("display","block");
        $("#d1-26").css("display","block");

    });
    });
});
});

// D1-24

$("#d1-24").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
          localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Nah, music's not really my thing.</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");       

                  $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh ok</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>oh ok</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm an old music fan. the beatles, the stones, all that stuff</b></p></div>");
        next();
        
         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>keeps me going when the times are tough haha</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>my bro got me the help! album for my bday when i was 12, i never stopped listening to it lol</b></p></div>");
        next();

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-21").css("display","none");
        $("#d1-23").css("display","none");
        $("#d1-24").css("display","none");

        $("#d1-25").css("display","block");
        $("#d1-26").css("display","block");

    });
    });
});
});

// D1-25

$("#d1-25").click(function () {

            $(".answers").css("opacity","0");
        $(".answers").css("pointer-events","none");
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Oh, you have a brother?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

       $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>yeah</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>john: <b>yeah</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>his name is bryan</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>his name is bryan</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>we don't talk too much right now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>we don't talk too much right now</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>actually me and the whole family aren't too close</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>actually me and the whole family aren't too close</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });

                $(".answers").css("opacity","1");
        $(".answers").css("pointer-events","auto");
        $("#d1-25").css("display","none");
        $("#d1-26").css("display","none");

        $("#d1-27").css("display","block");
        $("#d1-28").css("display","block");

            });
        });
    });
});

// D1-26

$("#d1-26").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>What's your brother like?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>his name is bryan</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>his name is bryan</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>we don't talk too much right now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>we don't talk too much right now</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>actually me and the whole family aren't too close</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>actually me and the whole family aren't too close</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-25").css("display","none");
        $("#d1-26").css("display","none");

        $("#d1-27").css("display","block");
        $("#d1-28").css("display","block");

        });
    });
});

// D1-27

$("#d1-27").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>I'm sorry to hear that...</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>it's ok</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>it's ok</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i still love them. we just don't talk too much</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i still love them. we just don't talk too much</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-27").css("display","none");
        $("#d1-28").css("display","none");

        $("#d1-29").css("display","block");
        $("#d1-30").css("display","block");

    });
});

// D1-28

$("#d1-28").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Is there any particular reason why?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>not something I really wanna talk about</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>not something I really wanna talk about</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i just met you lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i just met you lol</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>no offence</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>no offence</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-27").css("display","none");
        $("#d1-28").css("display","none");

        $("#d1-31").css("display","block");
        $("#d1-32").css("display","block");

        });
        });
});

// D1-29

$("#d1-29").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>That's nice to hear :)</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>yeah</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>yeah</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh, by the way</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>oh, by the way</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-29").css("display","none");
        $("#d1-30").css("display","none");

        $("#d1-33").css("display","block");

        });
        });
        });
});

// D1-30

$("#d1-30").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>I see. Let me know if you need someone to talk to about it :)</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>Thanks, I appreciate it :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>Thanks, I appreciate it :)</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh by the way</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>oh by the way</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });        
        $("#d1-29").css("display","none");
        $("#d1-30").css("display","none");

        $("#d1-33").css("display","block");

        });
        });
});
});

// D1-31

$("#d1-31").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Alright, but let me know if you need a listening ear :)</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>Thanks, I appreciate it :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>Thanks, I appreciate it :)</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>oh by the way</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>oh by the way</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });        
        $("#d1-31").css("display","none");
        $("#d1-32").css("display","none");

        $("#d1-33").css("display","block");

        });
        });
});
});

// D1-32

$("#d1-32").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>That's understandable, haha. So what've you been up to in Vancouver lately?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>not much. haven't met too many people yet</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>not much. haven't met too many people yet</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>mostly just work</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>mostly just work</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>and cleaning the apartment</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>and cleaning the apartment</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>actually</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>actually</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>that reminds me</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>that reminds me</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i heard theres a lot of good ramen places in vancouver</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you have any recommendations? fridge is running low lol</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });        
        $("#d1-31").css("display","none");
        $("#d1-32").css("display","none");

        $("#d1-33").css("display","block");

        });
        });
        });
        });
        });
});
});

$('#d1-33 > button').on('click', function(){

        localStorage.message+=("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterThirtythree.value)+"</b></p></div>");

           document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

           $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>thanks</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>thanks</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>that sounds good. I think i'll try it tomorrow</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>that sounds good. I think i'll try it tomorrow</b></p></div>");
        next();
        
         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>no point in grocery shopping now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>no point in grocery shopping now</b></p></div>");
        next();

        
        $("#d1-33").css("display","none");

        $("#d1-34").css("display","block");
        $("#d1-35").css("display","block");
        });        
        });
        });
    });

// D1-34

$("#d1-34").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>No problem :) anything else you want to know?</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>not right now</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>not right now</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>will let you know if anything comes up tho, thanks :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>will let you know if anything comes up tho, thanks :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm pretty tired from work</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm pretty tired from work</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>think i'm gonna head off and sleep soon</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>think i'm gonna head off and sleep soon</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-34").css("display","none");
        $("#d1-35").css("display","none");

        $("#d1-36").css("display","block");
        $("#d1-37").css("display","block");

        });
        });
});
});

// D1-35

$("#d1-35").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Let me know how it tastes!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>will do :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>will do :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm pretty tired from work</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>well, i'm pretty tired from work</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>think i'm gonna head off and sleep soon</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>think i'm gonna head off and sleep soon</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-34").css("display","none");
        $("#d1-35").css("display","none");

        $("#d1-36").css("display","block");
        $("#d1-37").css("display","block");

   
        });
});
});

// D1-36

$("#d1-36").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Alright, good night!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>thanks haha</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>thanks haha</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>hey i know i'm pretty awkward but thanks for talking with me :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>hey i know i'm pretty awkward but thanks for talking with me :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>means a lot</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>means a lot</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you think i can add you on facebook?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you think i can add you on facebook?</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-36").css("display","none");
        $("#d1-37").css("display","none");

        $("#d1-38").css("display","block");
        $("#d1-39").css("display","block");

   
        });
        });
});
});

// D1-37

$("#d1-37").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>It was nice talking to you :)</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>yeah, you too :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>yeah, you too :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>hey i know i'm pretty awkward but thanks for talking with me :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>hey i know i'm pretty awkward but thanks for talking with me :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>means a lot</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>means a lot</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>do you think i can add you on facebook?</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>do you think i can add you on facebook?</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-36").css("display","none");
        $("#d1-37").css("display","none");

        $("#d1-38").css("display","block");
        $("#d1-39").css("display","block");

   
        });
        });
});
});

// D1-38

$("#d1-38").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Sure!</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>awesome :)</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>awesome :)</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>josh randall right? i'll find you</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>josh randall right? i'll find you</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>anyway yeah, thanks for talking</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>anyway yeah, thanks for talking</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'll talk to you tomorrow i guess, same time</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'll talk to you tomorrow i guess, same time</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>good night!</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>good night!</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-38").css("display","none");
        $("#d1-39").css("display","none");

        $("#d1-40").css("display","block");
   
        });
        });
        });
});
});

// D1-39

$("#d1-39").click(function () {
        
         localStorage.message+=('message',"<div class='Josh'><img src='img/avatar.png'><p>You: <b>Uh, maybe not...</b></p></div>");
         document.getElementById("retrieve").innerHTML = localStorage.getItem("message");      

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>ok lol</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>ok lol</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>maybe some other time</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>maybe some other time</b></p></div>");
        next();

          $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>anyway yeah, thanks for talking</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>anyway yeah, thanks for talking</b></p></div>");
        next();

         $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>i'll talk to you tomorrow i guess, same time</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>i'll talk to you tomorrow i guess, same time</b></p></div>");
        next();

        $(".typing").delay(1000).show('fast');
         $(".typing").delay(1000).hide('fast');

        localStorage.message+=('message',"<div class='john'><img src='img/avatar.png'><p>John: <b>good night!</b></p></div>");

        $('#retrieve').delay(2000).queue(function (next) {
        $(this).append("<div class='john'><img src='img/avatar.png'><p>John: <b>good night!</b></p></div>");
        next();

        document.getElementById("retrieve").innerHTML = localStorage.getItem("message");           
        });
        $("#d1-38").css("display","none");
        $("#d1-39").css("display","none");

        $("#d1-40").css("display","block");
   
        });
        });
        });
});
});

// d1-40

$('#d1-40 > button').on('click', function(){

        localStorage.message+=("message","<div class='josh'><img src='img/avatar.png'><p>You: <b>" +(enterForty.value)+"</b></p></div>");

           document.getElementById("retrieve").innerHTML = localStorage.getItem("message");

           $("#d1-40").css("display","none");
    });


// Clear Chatlog

    $("#delete").click(function () {        
         localStorage.clear();
    document.getElementById("retrieve").innerHTML = localStorage.getItem("message");
    });



// </script>