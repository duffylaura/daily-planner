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
 
var nineEvent = document.querySelector('#nineEvent'); var nineButton = document.querySelector('#nineButton');
var tenEvent = document.querySelector('#tenEvent'); var tenButton = document.querySelector('#tenButton');
var elevenEvent = document.querySelector('#elevenEvent'); var elevenButton = document.querySelector('#elevenButton');
var tweleveEvent = document.querySelector('#tweleveEvent'); var tweleveButton = document.querySelector('#tweleveButton');
var thirteenEvent = document.querySelector('#thirteenEvent'); var thirteenButton = document.querySelector('#thirteenButton');
var fourteenEvent = document.querySelector('#fourteenEvent'); var fourteenButton = document.querySelector('#fourteenButton');
var fifteenEvent = document.querySelector('#fifteenEvent'); var fifteenButton = document.querySelector('#fifteenButton');
var sixteenEvent = document.querySelector('#sixteenEvent'); var sixteenButton = document.querySelector('#sixteenButton');
var seventeenEvent = document.querySelector('#seventeenEvent'); var seventeenButton = document.querySelector('#seventeenButton');

renderSavedEvents (); 

function renderSavedEvents () {
    var nineStorage = localStorage.getItem("nineKey");
    if (nineStorage == null) {return} else {nineEvent.textContent = nineStorage};

    var tenStorage = localStorage.getItem("tenKey");
    if (tenStorage == null) {return} else {tenEvent.textContent = tenStorage};

    var elevenStorage = localStorage.getItem("elevenKey");
    if (elevenStorage == null) {return} else {elevenEvent.textContent = elevenStorage};

    var tweleveStorage = localStorage.getItem("tweleveKey");
    if (tweleveStorage == null) {return} else {tweleveEvent.textContent=tweleveStorage};

    var thirteenStorage = localStorage.getItem("thirteenKey");
    if (thirteenStorage == null) {return} else {thirteenEvent.textContent=thirteenStorage};

    var fourteenStorage = localStorage.getItem("fourteenKey");
    if (fourteenStorage == null) {return} else {fourteenEvent.textContent=fourteenStorage};

    var fifteenStorage = localStorage.getItem("fifteenKey");
    if (fifteenStorage == null) {return} else {fifteenEvent.textContent=fifteenStorage};

    var sixteenStorage = localStorage.getItem("sixteenKey");
    if (sixteenStorage == null) {return} else {sixteenEvent.textContent=sixteenStorage};

    var seventeenStorage = localStorage.getItem("seventeenKey");
    if (seventeenStorage == null) {return} else {seventeenEvent.textContent=seventeenStorage};
};


nineButton.addEventListener("click", function(event){
    event.preventDefault();
    var nineStorage = document.getElementById("nineText").value;
    nineEvent.textContent = nineStorage;
    localStorage.setItem("nineKey", nineStorage);
    renderSavedEvents();
});

tenButton.addEventListener("click", function(event){
    event.preventDefault();
    var tenStorage = document.getElementById("tenText").value;
    tenEvent.textContent = tenStorage;
    localStorage.setItem("tenKey", tenStorage);
    renderSavedEvents();
});

elevenButton.addEventListener("click", function(event){
    event.preventDefault();
    var elevenStorage = document.getElementById("elevenText").value;
    elevenEvent.textContent = elevenStorage;
    localStorage.setItem("elevenKey", elevenStorage);
    renderSavedEvents();
});

tweleveButton.addEventListener("click", function(event){
    event.preventDefault();
    var tweleveStorage = document.getElementById("tweleveText").value;
    tweleveEvent.textContent = tweleveStorage;
    localStorage.setItem("tweleveKey", tweleveStorage);
    renderSavedEvents();
});

thirteenButton.addEventListener("click", function(event){
    event.preventDefault();
    var thirteenStorage = document.getElementById("thirteenText").value;
    thirteenEvent.textContent = thirteenStorage;
    localStorage.setItem("thirteenKey", thirteenStorage);
    renderSavedEvents();
});

fourteenButton.addEventListener("click", function(event){
    event.preventDefault();
    var fourteenStorage = document.getElementById("fourteenText").value;
    fourteenEvent.textContent = fourteenStorage;
    localStorage.setItem("fourteenKey", fourteenStorage);
    renderSavedEvents();
});

fifteenButton.addEventListener("click", function(event){
    event.preventDefault();
    var fifteenStorage = document.getElementById("fifteenText").value;
    fifteenEvent.textContent = fifteenStorage;
    localStorage.setItem("fifteenKey", fifteenStorage);
    renderSavedEvents();
});

sixteenButton.addEventListener("click", function(event){
    event.preventDefault();
    var sixteenStorage = document.getElementById("sixteenText").value;
    sixteenEvent.textContent = sixteenStorage;
    localStorage.setItem("sixteenKey", sixteenStorage);
    renderSavedEvents();
});

seventeenButton.addEventListener("click", function(event){
    event.preventDefault();
    var seventeenStorage = document.getElementById("seventeenText").value;
    seventeenEvent.textContent = seventeenStorage;
    localStorage.setItem("seventeenKey", seventeenStorage);
    renderSavedEvents();
});