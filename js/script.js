var saveBtn = $("#save");
var eventEl = $("#event");
var currentDayEl = $("#currentDay");


currentDayEl = moment().format("dddd MMM Do, YYYY");





saveBtn.on(function(){
    localStorage.setItem("event", eventEl);
})