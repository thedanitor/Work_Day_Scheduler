# Work_Day_Scheduler

I created a simple single-day planner using jQuery and Moment.js.


## Technologies used

Using pre-made HTML and CSS sheets the planner was created dynamically using JavaScript/jQuery. 

The index.html sheet was left virtually untouched and only small tweaks were made to the CSS sheet. 

## Description

Utilizing Moment.js the current time is displayed near the top of the page when the page is loaded.

Rows for every hour from 7 AM to 5 PM are dynamically created using jQuery. Each row has an hour marker on the left hand side, an input box in the center for the user to add their appointments, and a save button on the right side which will save the appointment to local storage. 

The rows are also color-coordinated to inform the user if the hour corresponding to the row is in the past (gray), present (red), or future (green). This is done by comparing the hour of the corresponding row to the current hour using Moment.js. Note: it is much more straightforward to perform that comparison if the hours are in military time.

Each time the page is loaded the previous scheduled items still appear since they are pulled from local storage. But any item can be cleared or saved over.

## Acknowledgement

Author Dan Weikart would like to thank everyone in his UW Coding Bootcamp class for helping improve his proficiency of HTML, CSS, JavaScript, and jQuery.

Special shoutout to tutor Namita Shenai, instructor John Young and TA's Abdul Aziz and Ben Vaagen.