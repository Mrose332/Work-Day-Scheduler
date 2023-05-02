$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss"));

let updateTime = setInterval(function () {
    let currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss")
    $("#currentDay").text(currentTime)
}, 1000);


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

$(document).ready(function() {

      $('.saveBtn').on('click', function() {
        userEntry = $(this).siblings('.description').val();
        timeKey = $(this).parent().attr('id');
        localStorage.setItem(timeKey, userEntry);
      })})

      function TimeTracker() {
       
        let currentHour = moment().hour();
        $(".time-block").each(function () {
            let timeHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( timeHour, currentHour)