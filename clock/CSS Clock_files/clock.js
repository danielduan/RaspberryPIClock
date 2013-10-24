/* 
Title:		CSS/JS Clock
Author: 	Daniel Ott 
            http://dtott.com
            http://twitter.com/danieltott
            
Copyright:	2010, Daniel T Ott, LLC., under the Creative Commons Attribution 3.0 License
    http://creativecommons.org/licenses/by/3.0/
    This means you are free
        to Share — to copy, distribute and transmit the work
        to Remix — to adapt the work
    Under the following conditions:
        Attribution — You must attribute the work back to me (Daniel Ott) with a link to my site (http://dtott.com)
        
        

*/

(function($){

    $(function(){
        var hours = $("#hours"), minutes = $("#minutes"), seconds = $("#seconds");
        
        //these are default grabs so that the first time it runs, it doesn't throw an error
        //after that, we use them to cache the current active arm for each group, so that we
        //don't have to waste time searching
        var cHour = $("html"), cMinute = $("html"), cSecond = $("html");
        
        var setCurrentTime = function(){
            //establish what the time is
            var currentTime = new Date();
            var hour = currentTime.getHours() - 1;
            if(hour == -1){ hour = 11; }
            var minute = currentTime.getMinutes() - 1;
            if(minute == -1){ minute = 59; }
            var second = currentTime.getSeconds() - 1;
            if(second == -1){ second = 59; }
            var ampm = "am";
            if(hour > 11){
                ampm = "pm";
                hour = hour-12;
            }
            if(hour == 11){
                ampm = "pm";
            }
            
            //circle clock
            //
            //remove the active class, and add it to the new time
            cHour.removeClass("active");
            cHour = hours.children(":eq(" + hour + ")").addClass("active");
            
            cMinute.removeClass("active");
            cMinute = minutes.children(":eq(" + minute + ")").addClass("active");
            
            cSecond.removeClass("active");
            cSecond = seconds.children(":eq(" + second + ")").addClass("active");
            
            $("body").removeClass("am").removeClass("pm").addClass(ampm);
            //
            //end circle clock

            //start qlocktwo
            //
            hour = currentTime.getHours();
            minute = currentTime.getMinutes();

            $("#qlocktwo").removeClass("qactive");

            if (minute => 35）{
                hour+=1;
                $(".TO").addClass("qactive"); 
                if(minute >=35 && minute <40){
                     $(".TWENTY").addClass("qactive"); 
                     $(".FIVE").addClass("qactive");
                } else if(minute >=40 && minute <45){
                    $(".TWENTY").addClass("qactive");
                } else if(minute >=45 && minute <50){
                    $(".QUARTER").addClass("qactive");
                } else if(minute >=50 && minute <55){
                    $(".MTEN").addClass("qactive");
                } else if(minute >=55 && minute <=59){
                    $(".MFIVE").addClass("qactive");
                }
            } else{
                $(".PAST").addClass("qactive");
                if(minute >=5 && minute <10){
                    $(".FIVE").addClass("qactive");
                } else if(minute >=10 && minute <15){
                    $(".MTEN").addClass("qactive");
                } else if(minute >=15 && minute <20){
                    $(".QUARTER").addClass("qactive");
                } else if(minute >=20 && minute <25){
                    $(".TWENTY").addClass("qactive");
                } else if(minute >=25 && minute <30){
                    $(".TWENTY").addClass("qactive");
                    $(".FIVE").addClass("qactive");
                } else if(minute >=30 && minute <35){
                    $(".HALF").addClass("qactive");
                }
                    
            }
            
            
            
            if (hour == 1) {
                $(".ONE").addClass("qactive");
            } else if (hour == 2) {
                $(".TWO").addClass("qactive");
            } else if (hour == 3) {
                $(".THREE").addClass("qactive");
            } else if (hour == 4) {
                $(".FOUR").addClass("qactive");
            } else if (hour == 5) {
                $(".FIVE").addClass("qactive");
            } else if (hour == 6) {
                $(".SIX").addClass("qactive");
            } else if (hour == 7) {
                $(".SEVEN").addClass("qactive");
            } else if (hour == 8) {
                $(".EIGHT").addClass("qactive");
            } else if (hour == 9) {
                $(".NINE").addClass("qactive");
            } else if (hour == 10) {
                $(".TEN").addClass("qactive");
            } else if (hour == 11) {
                $(".ELEVEN").addClass("qactive");
            } else {
                $(".TWELVE").addClass("qactive");
            }
            //
            //end qlocktwo clock
        
        };
        //set the interval to run each second
        setInterval(setCurrentTime,1000);
    
    });

})(jQuery);