// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
let counter = 0;



document.querySelector("#metro").checked = true;
const metro = document.querySelector("#metro")
const kick = document.querySelector("#kick")
const snare = document.querySelector("#snare")
const hi = document.querySelector("#hi")



const input_metro = document.getElementById("metro_input" )

const input_kick  = document.getElementById("kick_input")

const input_snare = document.getElementById("snare_input")

const input_hiHat = document.getElementById("hiHat_input")


// This function is called every 600ms
function update() {
    if((metro.checked &&  input_metro.value == counter)){
    tick.play();
    }
    else if((kick.checked && input_kick.value == counter )){
    kickDrum.play();
    }
    else if((snare.checked && input_snare.value == counter )){
    snareDrum.play();
    }
    else if((hi.checked) && input_hiHat.value == counter ){    
    hiHat.play()
    }
}   
function tockie() {
    tock.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
    setInterval(tockie, 2400);
    setInterval(displayCount,600)
    displayCount()
    
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

function displayCount() {
    document.querySelector(".box").innerHTML=counter;
    if(counter < 4){
    counter++
    }else (counter = 1)
    
}



