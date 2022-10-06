var saveBtn = $(".save");
var eventEl = $(".description");
var timeP = $("#time")

var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H : mm a");
$("#currentTime").text(currentTime);

var savedEvent = eventEl.text()
console.log(savedEvent)

localStorage.getItem(time, description);


saveBtn.on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).siblings(".time").text().trim();
    
    localStorage.setItem(time, description);
});

//parseInt   .split   moment.(hours)

//if > grey
//if === red
//if < green



// if (curTime < schedulerTime) {
//     !("#row").addClass("row-grey");
//     !("#event").addClass("row-grey");
// }