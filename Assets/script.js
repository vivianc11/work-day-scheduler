// When the document is ready (fully loaded), the following function executes
$(document).ready(function() {

        // current day and time is displayed at the top of calendar
    var timer = setInterval (function () {
        var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#currentDay').text(currentDay);
    },1000);


    // each time-block is color coded based on past, present, or future
    function updateHour () {
        // using .each function to target each time-block
        $('.row').each(function () {
            var currentHour = moment().hours();
            var blockHour = parseInt($(this).attr('id'));
            // conditional statement to compare currentHour and blockHour
            if (blockHour < currentHour){
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('past');
            } else {
                $(this).addClass('future');
                $(this).removeClass('present');
            }
        })
    }
    updateHour();
    // using setInterval to update the hour every 15 minutes
    var hourInterval = setInterval(updateHour, 15000);


    // can enter an event into time block and when save button is clicked, saved into localStorage
    $('.saveBtn').on('click', function() {
        var userInputVal = $(this).siblings('.description').val();
        var time =  $(this).parent().attr('id');
        // userInput is stored in localStorage
        localStorage.setItem(time, userInputVal);
    })

    // Retrieving content from localStorage to display on page
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));


});

