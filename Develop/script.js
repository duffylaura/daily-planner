// Display time at the top of the calendar 
var timeDisplayEl = $('#currentDay');
function displayTime () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(now)
};
setInterval (displayTime, 1000); 

// time colors// 

//Save reference to DOM elements
// var nineEl = $('#9-color'); var tenEl = $('#10-color'); var elevenEl = $('#11-color'); var tweleveEl = $('#12-color'); var thirteenEl = $('#13-color'); var fourteenEl = $('#14-color'); var fifteenEl = $('#15-color'); var sixteenEl = $('#16-color'); var seventeenEl = $('#17-color'); 


// Function to that determines colors based on hour

// PRESENT = #A0E1F0  // PAST = #F0B9AD  // FUTURE = #F0D595

function timeColors () {

    var now = moment().format('H');   

    if (now == 19) { 
        document.getElementById("9-color").style.backgroundColor = '#A0E1F0';
        document.getElementById("10-color").style.backgroundColor = '#F0D595';
        document.getElementById("11-color").style.backgroundColor = '#F0D595';
        document.getElementById("12-color").style.backgroundColor = '#F0D595';
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';
    }

        



}

timeColors();