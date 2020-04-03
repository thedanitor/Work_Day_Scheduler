var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var descriptionEl = $(".description")
var inputEl = $("input")

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
console.log(Object.values(timeChunks));

function createRow(){
var timeBLockEl = $("<div>", {"class": "time-block"});
var rowEl = $("<div>", {"class": "row"});
hourEl = $("<div>", {"class": "hour"});
descriptionEl = $("<form>", {"class": "description"}, {"method": "POST"});
inputEl = $("<input>", {"type": "text"}, {"class": "description"});
var saveBtnEl = $("<div>", {"class": "saveBtn"});
var saveButton = $("<i>", {"class": "far fa-save"});

saveBtnEl.append(saveButton);
descriptionEl.append(inputEl);
rowEl.append(hourEl, descriptionEl, saveBtnEl);
timeBLockEl.append(rowEl);
$(".container").append(timeBLockEl);

};

for (var i=0; i < timeChunks.length; i++) {
    createRow();
    var objectTimeBlock = timeChunks[i];
    if (`${objectTimeBlock.milTime}` < 12){
        hourEl.text(`${objectTimeBlock.hourBlock} AM`);
    } else {
        hourEl.text(`${objectTimeBlock.hourBlock} PM`);
    }
    inputEl.text(`${objectTimeBlock.schedItem}`);
    if (objectTimeBlock.milTime < currentHour)
        {
       descriptionEl.addClass("past");
       inputEl.addClass("past");
    } else if (objectTimeBlock.milTime == currentHour) {
        descriptionEl.addClass("present");
        inputEl.addClass("present");
    } else {
    descriptionEl.addClass("future");
    inputEl.addClass("future");
    }
}


//Need to populate cells with hour and event details (from timeChunks array? and localStorage)
//need to show if event block is past, present, or future (hourBlock < currentHour, >, or else?)
//Need to make each event block a form to input
//save text from input form when cal icon clicked--> send to localStorage


