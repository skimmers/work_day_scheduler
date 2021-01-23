$(document).ready(function () {

    //creating the date, got code from moment.js
    var today = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").append(today);

    function timeColor() {
        //creating theHour
        var theHour = moment().hours();

        $(".timeBlock").each(function () {
            var hourNum = parseInt($(this).attr("id"));

            //changing row color depending on time
            if (hourNum < theHour) {
                $(this).addClass("past");
            } else if (hourNum === theHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    timeColor();

    //this is checking the current time 
    //var interval = setInterval(timeColor, 15000);

    //Save txt input into local storage
    $(".saveBtn").click(function () {

        var text = $(this).siblings(".storage").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);

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

    $(".btn-danger").click(function () {
        $("textarea").val("");
    });
});