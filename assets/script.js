$(document).ready(function() {

    //creating the date, got code from moment.js
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("currentDay").append(today);
    console.log(today);

    function timeColor() {
        //creating theHour
        var theHour = moment().hours();
        console.log(theHour);

        $(".timeBlock").each(function() {
            var hourNum = parseInt($(this).attr("id"));
            console.log(hourNum,theHour);

            //changing row color depending on time
            if(hourNum < theHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else{
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    timeColor();

    $(".saveBtn").click(function() {
        
    }
    
    )
});