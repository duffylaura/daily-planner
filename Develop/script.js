// Display time at the top of the calendar 
var timeDisplayEl = $('#currentDay');
function displayTime () {
    var now = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(now)
};
setInterval (displayTime, 1000); 

// Function to that determines colors based on hour. Colors used: PRESENT = #A0E1F0  // PAST = #F0B9AD  // FUTURE = #F0D595

function timeColors () {

    var now = moment().format('H');   

    if (now == 9) { 
        document.getElementById("9-color").style.backgroundColor =  '#A0E1F0'; // Now
        document.getElementById("10-color").style.backgroundColor = '#F0D595';
        document.getElementById("11-color").style.backgroundColor = '#F0D595';
        document.getElementById("12-color").style.backgroundColor = '#F0D595';
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';
    }
    else if (now == 10) {
        document.getElementById("9-color").style.backgroundColor  = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("11-color").style.backgroundColor = '#F0D595';
        document.getElementById("12-color").style.backgroundColor = '#F0D595';
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';
    }
    else if (now == 11) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("12-color").style.backgroundColor = '#F0D595';
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';      
    }
    else if (now == 12) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';          
    }
    else if (now == 13) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';    
    }
    else if (now == 14) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("14-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';    
    }
    else if (now == 15) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("14-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("15-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595';    
    }
    else if (now == 16) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("14-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("15-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("16-color").style.backgroundColor = '#A0E1F0'; // Now
        document.getElementById("17-color").style.backgroundColor = '#F0D595';    
    }
    else if (now == 17) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("14-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("15-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("16-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("17-color").style.backgroundColor = '#A0E1F0'; // Now    
    }

    else if (now > 17 && now < 24) {
        document.getElementById("9-color").style.backgroundColor = '#F0B9AD'; // all in the past
        document.getElementById("10-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("11-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("12-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("13-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("14-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("15-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("16-color").style.backgroundColor = '#F0B9AD';
        document.getElementById("17-color").style.backgroundColor = '#F0B9AD';   
    } 
    
    else if (now > 0 && now < 9) {
        document.getElementById("9-color").style.backgroundColor =  '#F0D595'; // all in the future 
        document.getElementById("10-color").style.backgroundColor = '#F0D595';
        document.getElementById("11-color").style.backgroundColor = '#F0D595';
        document.getElementById("12-color").style.backgroundColor = '#F0D595';
        document.getElementById("13-color").style.backgroundColor = '#F0D595';
        document.getElementById("14-color").style.backgroundColor = '#F0D595';
        document.getElementById("15-color").style.backgroundColor = '#F0D595';
        document.getElementById("16-color").style.backgroundColor = '#F0D595';
        document.getElementById("17-color").style.backgroundColor = '#F0D595'; 
    }
    
    };

timeColors();

// function that allows text to be entered and saved to local storage 

//Define variables for each hour  
 
var nineEvent = document.querySelector('#nineEvent');
var nineButton = document.querySelector('#nineButton');

renderSavedEvents (); 

function renderSavedEvents () {
    var nineStorage = localStorage.getItem("nineKey");
    if (nineStorage == null) {return} else {nineEvent.textContent=nineStorage};
};


nineButton.addEventListener("click", function(event){
    event.preventDefault();
    var nineStorage = document.getElementById("nineText").value;
    nineEvent.textContent = nineStorage;
    localStorage.setItem("nineKey", nineStorage);
    renderSavedEvents();
});