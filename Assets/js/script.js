$(function () {
    //Variable declarations
    let curDateEl = $("#currentDay");
    let saveBtnEl = $(".saveBtn");
    let container = $(".container-lg");
    let now = dayjs();
    
    //Save function 
    saveBtnEl.click(save);
    
    //Load Page
    load();
    function load(){
      
      
     //Applies the classes and displays the time 
      applyClasses();
      displayTime();  
  
      setInterval(function(){ 
          now = dayjs(); 
          applyClasses();
          displayTime();
        }, 1000);

        
        
      //Local storage Values
      Object.keys(localStorage).forEach((key) => {
          let keyStr = "#" + key;
          let item = localStorage.getItem(key);
          $(keyStr).children("textarea").val(item);
      })
  
    }
  
    //Function to display time
    function displayTime() {
      let nowText = now.format('MMM DD, YYYY [at] hh:mm:ss a');
      curDateEl.text(nowText);
    }
  
    //Aaves the current textarea value 
    function save(){
      let input = $(this).siblings("textarea").val();
      let id = $(this).parent().attr("id");
      localStorage.setItem(id, input);
    }
  
    //Applies the classes past, present, and future based on the current hour
    function applyClasses(){
      let offset = 9;
      let hour = now.hour();
  
      container.children().each(function(){
        if(offset < hour){
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past")
        }else if(offset == hour){
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present")
        }else{
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future")
        }
        offset++;
      });
    }
  
  });