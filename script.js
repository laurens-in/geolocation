const options = {
    enableHighAccuracy: true,
    maxiumAge: 30000,
    timeout: 27000,
}

let pattern = ["C2", "G3", "C1", "D#2"]

var x = document.getElementById("data");

let conv = new Tone.Convolver("violin.opus", console.log("file is loaded"));


function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
        alert('this does not work in your browser');
    }
}

function showPosition(position){
    x.innerHTML = 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
}

function error(){
    alert('enable location');
}
let counter = 0;

function success(position){
    x.innerHTML = 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
    playSynth();
    counter++;
}

function playSynth(){
    let index = Math.floor(Math.random() * 3)
    if (index == 0){
        synth.triggerAttackRelease(pattern[counter%pattern.length], "4n");
    } else if (index == 1){
        synth2.triggerAttackRelease(pattern[counter%pattern.length], "4n");
    } else if (index == 2){
        synth3.triggerAttackRelease(pattern[counter%pattern.length], "4n");
    }
}


const watchID = navigator.geolocation.watchPosition(success, error, options)


var synth = new Tone.MembraneSynth().chain(conv, Tone.Master);
var synth2 = new Tone.MetalSynth().chain(conv, Tone.Master);
var synth3 = new Tone.FMSynth().chain(conv, Tone.Master);