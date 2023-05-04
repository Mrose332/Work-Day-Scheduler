
function timeStamp() {
    
  const currentDate = dayjs().format('MMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss a');
$('#currentDate').text(currentDate);
$('#currentTime').text(currentTime);

}

$(document).ready(function() {


$(".saveBtn").on("click", function () {
  var id = $(this).parent().attr("id");
  var data = $(this).siblings(".description").val();
  localStorage.setItem(id, data);
});

function timeHour () {
      
  let currentHour = dayjs().hour();
  console.log(currentHour);
  
  $('.time-block').each(function() {
    
    let hour = parseInt($(this).attr('id').split("hour-")[1])
    console.log(hour);

    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#1 .description').val(localStorage.getItem('1'));
    $('#2 .description').val(localStorage.getItem('2'));
    $('#3 .description').val(localStorage.getItem('3'));
    $('#4 .description').val(localStorage.getItem('4'));
    $('#5 .description').val(localStorage.getItem('5'));


    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
timeHour();

})
  
