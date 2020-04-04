//global variables
var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var descriptionEl = $(".description")
var inputEl = $("input");
var saveBtn = $("i");
var currentHour = moment().format("HH");
var currentFullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.html(currentFullDate);
//array of objects that will correspond to rows in scheduler
var timeChunks = [
    {
        hourBlock: 7,
        schedItem: "",
        milTime: 7
    },
    {
        hourBlock: 8,
        schedItem: "",
        milTime: 8
    },
    {
        hourBlock: 9,
        schedItem: "",
        milTime: 9
    },
    {
        hourBlock: 10,
        schedItem: "",
        milTime: 10
    },
    {
        hourBlock: 11,
        schedItem: "",
        milTime: 11
    },
    {
        hourBlock: 12,
        schedItem: "",
        milTime: 12
    },
    {
        hourBlock: 1,
        schedItem: "",
        milTime: 13
    },
    {
        hourBlock: 2,
        schedItem: "",
        milTime: 14
    },
    {
        hourBlock: 3,
        schedItem: "",
        milTime: 15
    },
    {
        hourBlock: 4,
        schedItem: "",
        milTime: 16
    },
    {
        hourBlock: 5,
        schedItem: "",
        milTime: 17
    },
]
//dynamically create rows for scheduler
function createRow() {
    var timeBLockEl = $("<div>", { "class": "time-block" });
    var rowEl = $("<div>", { "class": "row" });
    hourEl = $("<div>", { "class": "hour" });
    inputEl = $("<input>", { "type": "text" });
    inputEl.addClass("description");
    var saveBtnEl = $("<div>", { "class": "saveBtn" });
    saveButton = $("<i>", { "class": "far fa-save" });
    saveBtnEl.append(saveButton);
    rowEl.append(hourEl, inputEl, saveBtnEl);
    timeBLockEl.append(rowEl);
    $(".time").append(timeBLockEl);
};
//populate each row with properties of each object
//get previous entries from local storage
for (var i = 0; i < timeChunks.length; i++) {
    createRow();
    var objectTimeBlock = timeChunks[i];
    if (`${objectTimeBlock.milTime}` < 12) {
        hourEl.text(`${objectTimeBlock.hourBlock} AM`);
    } else {
        hourEl.text(`${objectTimeBlock.hourBlock} PM`);
    }
    var hourID1 = hourEl.text();
    localStorage.getItem(hourID1);
    inputEl.attr("placeholder", `${objectTimeBlock.schedItem}`);
    inputEl.attr("value", localStorage.getItem(hourID1));
    if (objectTimeBlock.milTime < currentHour) {
        inputEl.addClass("past");
    } else if (objectTimeBlock.milTime == currentHour) {
        inputEl.addClass("present");
    } else {
        inputEl.addClass("future");
    }
}
//when save button is clicked the description that the user has input for the corresponding hour is saved in local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var inputText = $(this).siblings(".description").val();
    var hourID = $(this).siblings(".hour").text();
    localStorage.setItem(hourID, inputText);
});



