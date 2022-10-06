var saveBtn = $("#save");
var eventEl = $("#event");



var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H : mm a");
$("#currentTime").text(currentTime);




saveBtn.on(function(){
    localStorage.setItem("event", eventEl);
})