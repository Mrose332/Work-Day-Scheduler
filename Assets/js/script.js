$(document).ready(function() {

      $('.saveBtn').on('click', function() {
        userEntry = $(this).siblings('.description').val();
        timeKey = $(this).parent().attr('id');
        localStorage.setItem(timeKey, userEntry);
      }) 
    })
     

      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));


function timeStamp() {
    
  const currentDate = dayjs().format('MMM D, YYYY');
  const currentTime = dayjs().format('hh:mm:ss a');
$('#currentDate').text(currentDate);
$('#currentTime').text(currentTime);

}
function hourTracker () {
      
  var currentTime = dayjs().hour();
  console.log(currentTime);
  
  
  
  $('.time-block').each(function() {
    
    let blockTime = parseInt($(this).attr('id').split("hour-")[1])
    console.log(timeId);
    
    if (blockTime < currentTime) {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }
    else if (blockTime === currentTime) {
      
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');  
    }
    else {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('future');  
    }
  })
}
