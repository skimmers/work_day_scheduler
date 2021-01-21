$(document).ready(function() {

    //creating the date, got code from moment.js
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(today);
    //console.log(today);

    function timeColor() {
        //creating theHour
        var theHour = moment().hours();
        //console.log(theHour);

        $(".timeBlock").each(function() {
            var hourNum = parseInt($(this).attr("id"));
            //console.log(hourNum,theHour);

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

    //Save txt input into local storage
    $(".saveBtn").click(function() {
        //console.log(this);

        var text = $(this).siblings(".storage").val();
        var time = $(this).parent().attr("id");

        //console.log(text, time);

        localStorage.setItem(time,text);
        //console.log(text);
    });

    $("#9AM .storage").val(localStorage.getItem("9AM"));
    $("#10AM .storage").val(localStorage.getItem("10AM"));
    $("#11AM .storage").val(localStorage.getItem("11AM"));
    $("#12PM .storage").val(localStorage.getItem("12PM"));
    $("#1PM .storage").val(localStorage.getItem("1PM"));
    $("#2PM .storage").val(localStorage.getItem("2PM"));
    $("#3PM .storage").val(localStorage.getItem("3PM"));
    $("#4PM .storage").val(localStorage.getItem("4PM"));
    $("#5PM .storage").val(localStorage.getItem("5PM"));
    
    $(".btn-danger").click(function() {
    $("textarea").val("");
    });
});