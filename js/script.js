var saveBtn = $(".save");
var eventEl = $(".description");
var timeP = $("#time")

var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H : mm a");
$("#currentTime").text(currentTime);

bgColor();

var savedEvent = eventEl.text()
console.log(savedEvent)

// localStorage.getItem(time, description); 


saveBtn.on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).siblings(".time").text().trim();

    localStorage.setItem(time, description);
});


  

function bgColor() {

    var schedulerTime = "";
    $('.time').each(function () {
        for (var i = 9; i <= 17; i++) {
            var thisId = $(this).attr('id', i);
        }
        schedulerTime = parseInt($(thisId).text(), 10);
        console.log(schedulerTime);
    });

    currentTime = moment().format("HH");
    console.log(currentTime)

    if(schedulerTime < currentTime) {
        $(".row").addClass("row-grey");
        $(".description").addClass("row-grey");
    } else if (schedulerTime == currentTime){
        $(".row").addClass("row-red");
        $(".description").addClass("row-red");
    } else if (schedulerTime > currentTime){
        $(".row").addClass("row-green");
        $(".description").addClass("row-green");
    }
       
}
//parseInt   .split   moment.(hours)

//if > grey
//if === red
//if < green



