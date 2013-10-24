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
            
            //remove the active class, and add it to the new time
            cHour.removeClass("active");
            cHour = hours.children(":eq(" + hour + ")").addClass("active");
            
            cMinute.removeClass("active");
            cMinute = minutes.children(":eq(" + minute + ")").addClass("active");
            
            cSecond.removeClass("active");
            cSecond = seconds.children(":eq(" + second + ")").addClass("active");
            
            $("body").removeClass("am").removeClass("pm").addClass(ampm);
        
        };
        //set the interval to run each second
        setInterval(setCurrentTime,1000);
    
    });

    $(function(){
        var temp = 0, description = "unknown", location = "unknown", image;
        image = document.getElementById('weatherIcon');
        var weatherURL = "http://api.worldweatheronline.com/free/v1/weather.ashx?q=91006&format=json&num_of_days=0&includelocation=yes&key=73czs5we6dmnqrc3vq942yn9";
        
        var setWeather = function(){
            //get weather information
        $.ajax({
            type: 'GET',
            url: msdnAPI,
            data: {
                key: "ApDsB3Y0HgxN1AJaupkRmQ0o8m-QNQWUrwDxX4hE9NjKM3JO1dd_-MgRDftB5ZmX"
            },
            jsonp: "jsonp",
            dataType: 'jsonp', // Pay attention to the dataType/contentType
            success: function (data) {
                temp = data.current_condition.temp_F;
                description = data.current_condition.weatherDesc[0].value;
                location = data.nearest_area.areaName[0].value;
                image.src = data.current_condition.weatherIconUrl[0].value;

                console.log("temp: "+temp + " description: " + description + " location: " + location);
            }
        });
        
        };
        //set the interval to run each second
        setInterval(setCurrentTime,3600);
    
    });


})(jQuery);