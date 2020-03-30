var currentDayEl = $("#currentDay");

var currentFullDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentFullDate);
currentDayEl.html(currentFullDate);