# work-day-scheduler

## About the Project
Building a work day scheduler with HTML and CSS(Bootstrap) powered by JQuery that presents the user with the current date and time near the top of the page near the title. The schedule is color coded based if the hour has passed the current hour, presently the current hour, or future hours. The scheduler displays regular work day hours from 9AM to 5PM with a text area for the user to enter information, and a save button so the user is able to save their info in their localStorage. 

## Building the Scheduler
There was starter code from Xandromus on github: https://github.com/coding-boot-camp/super-disco

I added code to the HTML to create the different time blocks with the correctly associated attributes used in CSS stylesheet. I also added code to the JS file to make the page functional.

The following requirements had to be met for this project:

- The current day is displayed at the top of the calendar

- The user is presented with time blocks for standard business hours

- Rach time block is color-coded to indicate whether it is in the past, present, or future

- The user can enter an event into a time block

- When the save button is clicked, the text for that event is saved in localStorage

- The saved events still persist even when the page is refeshed

## Applied Skills/Logic
- Using Bootstrap CSS Framework to style the HTML to increase familiarity of the framework

- Using JQuery to increase the familiarity of using JQuery notation and increase efficiency/speed.

- Using setInterval to update and display current date and time on the page. setInterval was also used to update the current hour.

- Saving and retrieving content from localStorage

## Deployed Application


### References
https://heroic-cupcake-9c46a0.netlify.app/