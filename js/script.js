
var saveBtn = $(".save");
// var eventEl = $(".description");
var time = $(".time").text().trim()
var description = $(".description").val();
var inputEl = $("input");

var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentDay);
var currentTime = moment().format("H : mm a");
$("#currentTime").text(currentTime);


// onbeforeunload();
bgColor();

// function onbeforeunload() {
//     time.innerText = localStorage.getItem(time);
//     description.innerText = localStorage.getItem(description);
// }




// var savedEvent = eventEl.text()
// console.log(savedEvent)

// localStorage.getItem(time, description); 
// console.log(time)

saveBtn.on("click", function () {

    var description = $(this).siblings(".description").val();
    var time = $(this).siblings(".time").text().trim();

    localStorage.setItem(time, description);


});

// if (localStorage.getItem(description) != null) {
//     $('.description').val() = localStorage.getItem(description);
// }

//     $('.description').val().change(function () {
//     localStorage.setItem(description, $('.description').val());
// });

// if (localStorage.getItem(time) != null) {
//     $('.time').text().trim() = localStorage.getItem(time);
// }

//     $('.time').text().trim().change(function () {
//     localStorage.setItem(time, $('.time').val());
// });


function bgColor() {

    var schedulerTime = "";
    $('.time').each(function () {
        for (var i = 9; i <= 17; i++) {
            var thisId = $(this).attr('id', i);

        schedulerTime = parseInt($(thisId).text(), 10);
        console.log(schedulerTime);
   

    var currentTimeStr = moment().format("HH");
    var currentTime = parseInt(currentTimeStr,10);
    console.log(currentTime)
    
    // console.log(typeof currentTime)
    // console.log(typeof schedulerTime)

    var inputId = thisId.siblings();      
    if (schedulerTime < currentTime) {
        // $(".row").addClass("row-grey");
        inputId.addClass("past");
    } else if (schedulerTime == currentTime) {
        // $(".row").addClass("row-red");
        inputId.addClass("present");
        inputId.remove("past");
    } else if (schedulerTime > currentTime) {
        // $(".row").addClass("future");
        inputId.addClass("future");
        inputId.remove("present");
    }}
});

 } // $('input').each(function (idNum) {
    //     for (var j = 9; j <= 17; j++) {

// });
   

// }
    



// localStorage.clear();