var currentDayEl = $("#currentDay");
// var hourEl = $(".hour");
// var descriptionEl = $(".description")

var currentHour = moment().format("HH");
var currentFullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
currentDayEl.html(currentFullDate);


var timeChunks = [
    {
        hourBlock: 7,
        schedItem: ""
    },
    {
        hourBlock: 8,
        schedItem: ""
    },
    {
        hourBlock: 9,
        schedItem: ""
    },
    {
        hourBlock: 10,
        schedItem: ""
    },
    {
        hourBlock: 11,
        schedItem: ""
    },
    {
        hourBlock: 12,
        schedItem: ""
    },
    {
        hourBlock: 1,
        schedItem: ""
    },
    {
        hourBlock: 2,
        schedItem: ""
    },
    {
        hourBlock: 3,
        schedItem: ""
    },
    {
        hourBlock: 4,
        schedItem: ""
    },
    {
        hourBlock: 5,
        schedItem: ""
    },
]
function createRow(){
var timeBLockEl = $("<div>", {"class": "time-block"});
var rowEl = $("<div>", {"class": "row"});
var hourEl = $("<div>", {"class": "hour"});
var descriptionEl = $("<div>", {"class": "description"});
var saveBtnEl = $("<div>", {"class": "saveBtn"});
var saveButton = $("<i>", {"class": "far fa-save"});

saveBtnEl.append(saveButton);
rowEl.append(hourEl, descriptionEl, saveBtnEl);
timeBLockEl.append(rowEl);
$(".container").append(timeBLockEl);

}

createRow();
// function populateCal() {
//     timeChunk.hourBlock.each(function (index){
//         $(".hour").text = hourBlock;
//     })
// }
    
// populateCal;   

//Need to populate cells with hour and event details (from timeChunks array? and localStorage)
//need to show if event block is past, present, or future (hourBlock < currentHour, >, or else?)
//Need to make each event block a form to input
//save text from input form when cal icon clicked--> send to localStorage



