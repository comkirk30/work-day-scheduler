$(document).ready(function () {
//current date and time
$("#currentDay").text(moment().format("MMM Do YYY, h:mm:ss a"));
$(".saveBtn").on("click", function () {

  console.log(this);
  var text = $(this).child(".description").valueOf();
  var time = $(this).parent().attr("id");

  //items in local storage
  localStorage.setItem(time, text);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracker() {
    var currentHour = moment().hour();

    $(".time=block").each(function (){
      var blockHour = parseInt($(this).attr("id").split("hour")[i]);
      console.log(blockHour, currentHour)

      if (blockHour < currentHour){
        $(this).addClass("past");
        $(this).addClass("present");
        $(this).addClass("future");


      }

    }




  }






});