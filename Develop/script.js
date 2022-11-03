
var timeDisplayEl = $('#currentDay');

function displayTime () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(now)
};

setInterval (displayTime, 1000); 
