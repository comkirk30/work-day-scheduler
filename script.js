$(document).ready(function () {
//current date and time
$("#currentDay").text(moment().format("MMM Do YYY, h:mm:ss a"));
$(".saveBtn").on("click", function () {

  console.log(this);
  var text = $(this)child(".description").valueOf();
  var time = $(this).parent().attr("id");

  //items in local storage
  localStorage.setItem(time, text);
}





})