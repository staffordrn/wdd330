import { wavetable } from './wavetable.js';

// for cross browser compatibility
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
//grab the pad elements
const pads = document.querySelectorAll('.pads');
const allPadButtons = document.querySelectorAll('#tracks button');
allPadButtons.forEach(el => {
  el.addEventListener('click', () => {
    if (el.getAttribute('aria-checked') === 'false') {
      el.setAttribute('aria-checked', 'true');
    } else {
      el.setAttribute('aria-checked', 'false');
    }
  }, false)
})

//pass values into the createPeriodicWave method to create a periodic wave
const wave = audioCtx.createPeriodicWave(wavetable.real, wavetable.imag);
//Amplpitude control
//attack and release controls
let attackTime = 0.2;
const attackControl = document.querySelector('#attack');
attackControl.addEventListener('input', function() {
    attackTime = Number(this.value);
}, false);

let releaseTime = 0.5;
const releaseControl = document.querySelector('#release');
releaseControl.addEventListener('input', function() {
    releaseTime = Number(this.value);
}, false);
// The Sweep - create an OscillatorNode and set its wave to our wave value then allow for changing values over time
let sweepLength = 2;
function playSweep(time) {
    let osc = audioCtx.createOscillator();
    osc.setPeriodicWave(wave);
    osc.frequency.value = 440;

    let sweepEnv = audioCtx.createGain();
    sweepEnv.gain.cancelScheduledValues(time);
    sweepEnv.gain.setValueAtTime(0, time);
    // set our attack
    sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
    // set our release
    sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

    osc.connect(sweepEnv).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + sweepLength);
}




//The Pulse - create an ocsillator and modulate with a second oscillator
//set up oscillator same as sweep but with a default sine wave
//Pulse controls
let pulseHz = 880;
const hzControl = document.querySelector('#hz');
hzControl.addEventListener('input', function() {
    pulseHz = Number(this.value);
}, false);

let lfoHz = 30;
const lfoControl = document.querySelector('#lfo');
lfoControl.addEventListener('input', function() {
    lfoHz = Number(this.value);
}, false);

//The Pulse function
let pulseTime = 1;
function playPulse(time) {
    let osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = pulseHz;

    let amp = audioCtx.createGain();
    amp.gain.value = 1;

    let lfo = audioCtx.createOscillator();
    lfo.type = 'square';
    lfo.frequency.value = lfoHz;

    lfo.connect(amp.gain);
    osc.connect(amp).connect(audioCtx.destination);
    lfo.start();
    osc.start(time);
    osc.stop(time + pulseTime);
}

//Creating noise
//Noise controls
let noiseDuration = 1;
const durControl = document.querySelector('#duration');
durControl.addEventListener('input', function() {
    noiseDuration = Number(this.value);
}, false);

let bandHz = 1000;
const bandControl = document.querySelector('#band');
bandControl.addEventListener('input', function() {
    bandHz = Number(this.value);
}, false);
//noise function
function playNoise(time) {
    const bufferSize = audioCtx.sampleRate * noiseDuration; // set the time of the note
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); // create an empty buffer
    let data = buffer.getChannelData(0); // get data

    // fill the buffer with noise
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    // create a buffer source for our created data
    let noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    let bandpass = audioCtx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = bandHz;

    // connect our graph
    noise.connect(bandpass).connect(audioCtx.destination);
    noise.start(time);
}

//loading a sample sound using an async function so that the file is loaded and decoded before we use it
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
//Another function to setup the sample and work with the first async function to create a promise pattern to work when the file is loaded and buffered
async function setupSample() {
    const filePath = 'dtmf.mp3';
    const sample = await getFile(audioCtx, filePath);
    return sample;
}
function playSample(audioContext, audioBuffer, time) {
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    sampleSource.playbackRate.value = playbackRate;
    sampleSource.connect(audioContext.destination)
    sampleSource.start(time);
    return sampleSource;
}
//User controls
let playbackRate = 1;
const rateControl = document.querySelector('#rate');
rateControl.addEventListener('input', function() {
    playbackRate = Number(this.value);
}, false);

//keeping the beat - create a scheduling system to get the sounds to play in time
let tempo = 60.0;
const bpmControl = document.querySelector('#bpm');
bpmControl.addEventListener('input', function() {
    tempo = Number(this.value);
}, false)
//variables to define how far ahead to schedule
// How frequently to call scheduling function (in milliseconds)
const lookahead = 25.0; 
// How far ahead to schedule audio (sec)
const scheduleAheadTime = 0.1; 
// a function to move the note forward one beat then loops back at the 4th beat
let currentNote = 0;
let nextNoteTime = 0.0; // when the next note is due.

function nextNote() {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat; // Add beat length to last beat time

    // Advance the beat number, wrap to zero
    currentNote++;
    if (currentNote === 4) {
            currentNote = 0;
    }
}
//create a queue for notes to be played
const notesInQueue = [];
let dtmf;
function scheduleNote(beatNumber, time) {

    // push the note on the queue, even if we're not playing.
    notesInQueue.push({ note: beatNumber, time: time });

    if (pads[0].querySelectorAll('button')[beatNumber].getAttribute('aria-checked') === 'true') {
        playSweep(time)
    }
    if (pads[1].querySelectorAll('button')[beatNumber].getAttribute('aria-checked') === 'true') {
        playPulse(time)
    }
    if (pads[2].querySelectorAll('button')[beatNumber].getAttribute('aria-checked') === 'true') {
        playNoise(time)
    }
    if (pads[3].querySelectorAll('button')[beatNumber].getAttribute('aria-checked') === 'true') {
        playSample(audioCtx, dtmf, time);
    }
} 
function scheduler() {
    // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
    while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime ) {
        scheduleNote(currentNote, nextNoteTime);
        nextNote();
    }
    let timerID = window.setTimeout(scheduler, lookahead);
}

// a funtion to update the UI to show where the beat count is
let lastNoteDrawn = 3;

function draw() {
    let drawNote = lastNoteDrawn;
    let currentTime = audioCtx.currentTime;

    while (notesInQueue.length && notesInQueue[0].time < currentTime) {
        drawNote = notesInQueue[0].note;
        notesInQueue.splice(0,1);   // remove note from queue
    }

    // We only need to draw if the note has moved.
    if (lastNoteDrawn != drawNote) {
        pads.forEach(function(el, i) {
            el.children[lastNoteDrawn].style.borderColor = 'hsla(0, 0%, 10%, 1)';
            el.children[drawNote].style.borderColor = 'hsla(49, 99%, 50%, 1)';
        });

        lastNoteDrawn = drawNote;
    }
    // set up to draw again
    requestAnimationFrame(draw);

}    
// when the sample has loaded allow play
const loadingEl = document.querySelector('.loading');
const playButton = document.querySelector('[data-playing]');
let isPlaying = false;
setupSample()
  .then((sample) => {
    loadingEl.style.display = 'none';

    dtmf = sample; // to be used in our playSample function

    playButton.addEventListener('click', ev => {
      isPlaying = !isPlaying;

      if (isPlaying) { // start playing

        // check if context is in suspended state (autoplay policy)
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }

        currentNote = 0;
        nextNoteTime = audioCtx.currentTime;
        scheduler(); // kick off scheduling
        requestAnimationFrame(draw); // start the drawing loop.
        ev.target.dataset.playing = 'true';
      } else {
        window.clearTimeout(timerID);
        ev.target.dataset.playing = 'false';
      }
    })
  });

//Volume controls
//declare variables
/* const volumeControl = document.querySelector('#vol');
const gainNode = audioCtx.createGain();
//const source = audioCtx.
audioCtx.connect(gainNode).connect(audioContext.destination);

volumeControl.addEventListener('input', function() {
    gainNode.gain.value = this.value;
}, false); */