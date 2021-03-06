(function($){

    $(function(){
        
        var secondToggle = false;

        var setCurrentTime = function(){
            //establish what the time is
            var currentTime = new Date();

            var hour = currentTime.getHours();
            var minute = currentTime.getMinutes();

            //if (secondToggle) {
                switch (minute % 5) {
                    case 0:
                        $(".qdot1").removeClass("qactive");
                        $(".qdot2").removeClass("qactive");
                        $(".qdot3").removeClass("qactive");
                        $(".qdot4").removeClass("qactive");
                        break;
                    case 1:
                        $(".qdot1").addClass("qactive");;
                        break;
                    case 2:
                        $(".qdot2").addClass("qactive");;
                        break;
                    case 3:
                        $(".qdot3").addClass("qactive");;
                        break;
                    case 4:
                        $(".qdot4").addClass("qactive");;
                        break;
                }

            $(".IT").addClass("qactive");
            $(".IS").addClass("qactive");

            if (minute<35) {
                $(".PAST").addClass("qactive");
                $(".TO").removeClass("qactive");
                if(minute>=0 && minute<5){
                    $(".MFIVE").removeClass("qactive");
                    $(".PAST").removeClass("qactive");
                    $(".OCLOCK").addClass("qactive");
                }
                else if(minute >=5 && minute <10){
                    $(".OCLOCK").removeClass("qactive");
                    $(".MFIVE").addClass("qactive");
                } else if(minute >=10 && minute <15){
                    $(".MFIVE").removeClass("qactive");
                    $(".MTEN").addClass("qactive");
                } else if(minute >=15 && minute <20){
                    $(".MTEN").removeClass("qactive");
                    $(".QUARTER").addClass("qactive");
                } else if(minute >=20 && minute <25){
                    $(".QUARTER").removeClass("qactive");
                    $(".TWENTY").addClass("qactive");
                } else if(minute >=25 && minute <30){
                    $(".MFIVE").addClass("qactive");
                } else if(minute >=30 && minute <35){
                    $(".TWENTY").removeClass("qactive");
                    $(".MFIVE").removeClass("qactive");
                    $(".HALF").addClass("qactive");
                }
            }
            else {
                hour+=1;
                $(".TO").addClass("qactive"); 
                $(".PAST").removeClass("qactive");
                if(minute >=35 && minute <40){
                     $(".HALF").removeClass("qactive");
                     $(".TWENTY").addClass("qactive"); 
                     $(".MFIVE").addClass("qactive");
                } else if(minute >=40 && minute <45){
                    $(".MFIVE").removeClass("qactive");
                } else if(minute >=45 && minute <50){
                    $(".TWENTY").removeClass("qactive");
                    $(".QUARTER").addClass("qactive");
                } else if(minute >=50 && minute <55){
                    $(".QUARTER").removeClass("qactive");
                    $(".MTEN").addClass("qactive");
                } else if(minute >=55 && minute <=59){
                    $(".MTEN").removeClass("qactive");
                    $(".MFIVE").addClass("qactive");
                }
            }
            
            //support 24 hour linux time reporting
            if (hour > 12) {
            	hour -= 12;
            } else if (hour == 0) {
            	hour = 12;
            }
            
            if (hour == 1) {
                $(".ONE").addClass("qactive");
                $(".TWELVE").removeClass("qactive");
            } else if (hour == 2) {
                $(".TWO").addClass("qactive");
                $(".ONE").removeClass("qactive");
            } else if (hour == 3) {
                $(".THREE").addClass("qactive");
                $(".TWO").removeClass("qactive");
            } else if (hour == 4) {
                $(".FOUR").addClass("qactive");
                $(".THREE").removeClass("qactive");
            } else if (hour == 5) {
                $(".FIVE").addClass("qactive");
                $(".FOUR").removeClass("qactive");
            } else if (hour == 6) {
                $(".SIX").addClass("qactive");
                $(".FIVE").removeClass("qactive");
            } else if (hour == 7) {
                $(".SEVEN").addClass("qactive");
                $(".SIX").removeClass("qactive");
            } else if (hour == 8) {
                $(".EIGHT").addClass("qactive");
                $(".SEVEN").removeClass("qactive");
            } else if (hour == 9) {
                $(".NINE").addClass("qactive");
                $(".EIGHT").removeClass("qactive");
            } else if (hour == 10) {
                $(".TEN").addClass("qactive");
                $(".NINE").removeClass("qactive");
            } else if (hour == 11) {
                $(".ELEVEN").addClass("qactive");
                $(".TEN").removeClass("qactive");
            } else {
                $(".TWELVE").addClass("qactive");
                $(".ELEVEN").removeClass("qactive");
            }
        
        };
        //set the interval to run each second
        setInterval(setCurrentTime,1000);
    
    });

})(jQuery);