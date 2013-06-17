        google.load("jquery", "1.3.2");     
        google.setOnLoadCallback(function() {
            function render_time(classes) {
                // reset
                $('span').removeClass('lightup');
                //toggle_sec();
                
                for (var i in classes) {
                    $(classes[i]).addClass('lightup');
                }
            }
            
            function toggle_sec() {                
                if ($('.sec').hasClass('seclightup')) {
                    $('.sec').removeClass('seclightup')
                } else {
                    $('.sec').addClass('seclightup')
                }
            }
            
            function check_time() {
                var classes = ['.it_is']
                
                toggle_sec();
                
                var date = new Date();
                var hours = date.getHours()%12;
                if (hours==0) hours = 12;
                var minutes = date.getMinutes()-(date.getMinutes()%5);
                if (date.getMinutes()%5 > 2) minutes = minutes + 5;
                if (minutes == 60) { minutes = 0; hours = hours+1;}
                
                // stupid switch logic...
                if (minutes == 0) {
                    // o'clock!
                    classes.push('.'+hours);
                    classes.push('.oclock');
                } else if (minutes == 30) {
                    // half past
                    classes.push('.'+hours);
                    classes.push('.half');
                    classes.push('.past');
                } else if (minutes == 15) {
                    // quarter past
                    classes.push('.'+hours);
                    classes.push('.past');
                    classes.push('.quarter');
                } else if (minutes == 45) {
                    // quarter to
                    if (hours==12) hours = 0;
                    classes.push('.'+(hours+1));
                    classes.push('.quarter');
                    classes.push('.to');
                } else if (minutes < 30) {
                    // X past
                    classes.push('.'+hours);
                    classes.push('.'+minutes+'to');
                    classes.push('.past');
                    classes.push('.minutes');
                } else if (minutes > 30) {
                    // X to
                    if (hours==12) hours = 0;
                    classes.push('.'+(hours+1));
                    classes.push('.'+(60-minutes)+'to');
                    classes.push('.to');
                    classes.push('.minutes');
                }
                
                render_time(classes);
                
            }
            
            setInterval(check_time, 1000);
      });