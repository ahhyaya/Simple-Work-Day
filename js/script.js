
var saveBtn = $(".save");
// var eventEl = $(".description");
var time = $(".time").text().trim()
var description = $(".description").val();
var inputEl = $("input");

var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H : mm a");
$("#currentTime").text(currentTime);



bgColor();


onbeforeunload();
function onbeforeunload() {
for (var i = 0; i < localStorage.length; i++) {
                var storedTime = localStorage.key(i);
                var storedEvent = localStorage[storedTime];

                console.log(localStorage.getItem(localStorage[storedTime]))

                if (schedulerTime == storedTime) {
                    $(".description").text(storedEvent);
                } else if (storedEvent == null) {
                    localStorage.removeItem(storedEvent);
                }
            }
}

function bgColor() {
    var schedulerTime = "";
    $('.time').each(function () {
        for (var i = 9; i <= 17; i++) {
            var thisId = $(this).attr('id', i);

            schedulerTime = parseInt($(thisId).text(), 10);
            console.log(schedulerTime);

            var currentTimeStr = moment().format("HH");
            var currentTime = parseInt(currentTimeStr, 10);
            console.log(currentTime)

            // console.log(typeof currentTime)
            // console.log(typeof schedulerTime)

            var inputId = thisId.siblings();
            if (schedulerTime < currentTime) {
                inputId.addClass("past");
            } else if (schedulerTime == currentTime) {
                inputId.addClass("present");
                inputId.remove("past");
            } else if (schedulerTime > currentTime) {
                inputId.addClass("future");
                inputId.remove("present");
            }
        }
    });
}


saveBtn.on("click", function () {
    var description = $(this).siblings(".description").val();
    var time = $(this).siblings(".time").text().trim();
    localStorage.setItem(time, description);
});



// localStorage.clear();