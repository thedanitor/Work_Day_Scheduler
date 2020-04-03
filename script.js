var currentDayEl = $("#currentDay");
var hourEl = $(".hour");
var descriptionEl = $(".description")

var currentHour = moment().format("HH");
var currentFullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.html(currentFullDate);

var timeChunks = [
    {
        hourBlock: 7,
        schedItem: "new item at 7"
    },
    {
        hourBlock: 8,
        schedItem: "new item at 8"
    },
    {
        hourBlock: 9,
        schedItem: "new item at 9"
    },
    {
        hourBlock: 10,
        schedItem: "new item at 10"
    },
    {
        hourBlock: 11,
        schedItem: "new item at 11"
    },
    {
        hourBlock: 12,
        schedItem: "new item at 12"
    },
    {
        hourBlock: 1,
        schedItem: "new item at 1"
    },
    {
        hourBlock: 2,
        schedItem: "new item at 2"
    },
    {
        hourBlock: 18,
        schedItem: "new item at 3"
    },
    {
        hourBlock: 19,
        schedItem: "new item at 4"
    },
    {
        hourBlock: 20,
        schedItem: "new item at 5"
    },
]
console.log(Object.values(timeChunks));

function createRow(){
var timeBLockEl = $("<div>", {"class": "time-block"});
var rowEl = $("<div>", {"class": "row"});
hourEl = $("<div>", {"class": "hour"});
descriptionEl = $("<form>", {"class": "description"});
var saveBtnEl = $("<div>", {"class": "saveBtn"});
var saveButton = $("<i>", {"class": "far fa-save"});

saveBtnEl.append(saveButton);
rowEl.append(hourEl, descriptionEl, saveBtnEl);
timeBLockEl.append(rowEl);
$(".container").append(timeBLockEl);

};

for (var i=0; i < timeChunks.length; i++) {
    createRow();
    var objectTimeBlock = timeChunks[i];
    hourEl.text(`${objectTimeBlock.hourBlock} AM`);
    descriptionEl.text(`${objectTimeBlock.schedItem}`);
    if (objectTimeBlock.hourBlock < currentHour)
        {
       descriptionEl.addClass("past");
    } else if (objectTimeBlock.hourBlock == currentHour) {
        descriptionEl.addClass("present");
    } else {
    descriptionEl.addClass("future");
    }
}


//Need to populate cells with hour and event details (from timeChunks array? and localStorage)
//need to show if event block is past, present, or future (hourBlock < currentHour, >, or else?)
//Need to make each event block a form to input
//save text from input form when cal icon clicked--> send to localStorage


