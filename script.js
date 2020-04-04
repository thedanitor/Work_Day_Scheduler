var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var descriptionEl = $(".description")
var inputEl = $("input");
var saveBtn = $("i");
var currentHour = moment().format("HH");
var currentFullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.html(currentFullDate);
var timeChunks = [
    {
        hourBlock: 7,
        schedItem: "new item at 7",
        milTime: 7
    },
    {
        hourBlock: 8,
        schedItem: "new item at 8",
        milTime: 8
    },
    {
        hourBlock: 9,
        schedItem: "new item at 9",
        milTime: 9
    },
    {
        hourBlock: 10,
        schedItem: "new item at 10",
        milTime: 10
    },
    {
        hourBlock: 11,
        schedItem: "new item at 11",
        milTime: 11
    },
    {
        hourBlock: 12,
        schedItem: "new item at 12",
        milTime: 12
    },
    {
        hourBlock: 1,
        schedItem: "new item at 1",
        milTime: 13
    },
    {
        hourBlock: 2,
        schedItem: "new item at 2",
        milTime: 14
    },
    {
        hourBlock: 3,
        schedItem: "new item at 3",
        milTime: 15
    },
    {
        hourBlock: 4,
        schedItem: "new item at 4",
        milTime: 16
    },
    {
        hourBlock: 5,
        schedItem: "new item at 5",
        milTime: 17
    },
]

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

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var inputText = $(this).siblings(".description").val();
    var hourID = $(this).siblings(".hour").text();
    localStorage.setItem(hourID, inputText);
});



