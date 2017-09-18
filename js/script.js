//DECLARATION OF NOTE CONSTANTS
const DO_BEMOL  = {denomination: 'DO',  accidental: 'b', numVal: -1};
const DO        = {denomination: 'DO',  accidental: '',  numVal: 0};
const DO_SHARP  = {denomination: 'DO',  accidental: '#', numVal: 1};
const RE_BEMOL  = {denomination: 'RE',  accidental: 'b', numVal: 1};
const RE        = {denomination: 'RE',  accidental: '',  numVal: 2};
const RE_SHARP  = {denomination: 'RE',  accidental: '#', numVal: 3};
const MI_BEMOL  = {denomination: 'MI',  accidental: 'b', numVal: 3};
const MI        = {denomination: 'MI',  accidental: '',  numVal: 4};
const MI_SHARP  = {denomination: 'MI',  accidental: '#', numVal: 5};
const FA_BEMOL  = {denomination: 'FA',  accidental: 'b', numVal: 4};
const FA        = {denomination: 'FA',  accidental: '',  numVal: 5};
const FA_SHARP  = {denomination: 'FA',  accidental: '#', numVal: 6};
const SOL_BEMOL = {denomination: 'SOL', accidental: 'b', numVal: 6};
const SOL       = {denomination: 'SOL', accidental: '',  numVal: 7};
const SOL_SHARP = {denomination: 'SOL', accidental: '#', numVal: 8};
const LA_BEMOL  = {denomination: 'LA',  accidental: 'b', numVal: 8};
const LA        = {denomination: 'LA',  accidental: '',  numVal: 9};
const LA_SHARP  = {denomination: 'LA',  accidental: '#', numVal: 10};
const SI_BEMOL  = {denomination: 'SI',  accidental: 'b', numVal: 10};
const SI        = {denomination: 'SI',  accidental: '',  numVal: 11};
const SI_SHARP  = {denomination: 'SI',  accidental: '#', numVal: 0};

//DECLARATION OF MAJOR SCALE CONSTANTS
const DO_BEMOL_MAJ  = [DO_BEMOL, RE_BEMOL, MI_BEMOL, FA_BEMOL, SOL_BEMOL, LA_BEMOL, SI_BEMOL];
const DO_MAJ        = [DO, RE, MI, FA, SOL, LA, SI];
const DO_SHARP_MAJ  = [DO_SHARP, RE_SHARP, MI_SHARP, FA_SHARP, SOL_SHARP, LA_SHARP, SI_SHARP];
const RE_BEMOL_MAJ  = [RE_BEMOL, MI_BEMOL, FA, SOL_BEMOL, LA_BEMOL, SI_BEMOL, DO_BEMOL];
const RE_MAJ        = [RE, MI, FA_SHARP, SOL, LA, SI, DO_SHARP];
const RE_SHARP_MAJ  = [RE_SHARP, MI_SHARP, FA, SOL_SHARP, LA_SHARP, SI_SHARP, DO];
const MI_BEMOL_MAJ  = [MI_BEMOL, FA, SOL, LA_BEMOL, SI_BEMOL, DO, RE];
const MI_MAJ        = [MI, FA_SHARP, SOL_SHARP, LA, SI, DO_SHARP, RE_SHARP];
const MI_SHARP_MAJ  = [FA, SOL, LA, SI_BEMOL, DO, RE, MI];
const FA_BEMOL_MAJ  = [MI, FA_SHARP, SOL_SHARP, LA, SI, DO_SHARP, RE_SHARP];
const FA_MAJ        = [FA, SOL, LA, SI, DO, RE, MI];
const FA_SHARP_MAJ  = [FA_SHARP, SOL_SHARP, LA_SHARP, SI, DO_SHARP, RE_SHARP, MI_SHARP];
const SOL_BEMOL_MAJ = [SOL_BEMOL, LA_BEMOL, SI_BEMOL, DO_BEMOL, RE_BEMOL, MI_BEMOL, FA];
const SOL_MAJ       = [SOL, LA, SI, DO, RE, MI, FA_SHARP];
const SOL_SHARP_MAJ = [SOL_SHARP, LA_SHARP, SI_SHARP, DO_SHARP, RE_SHARP, MI_SHARP, SOL_SHARP];
const LA_BEMOL_MAJ  = [LA_BEMOL, SI_BEMOL, DO, RE_BEMOL, MI_BEMOL, FA, SOL];
const LA_MAJ        = [LA, SI, DO_SHARP, RE, MI, FA_SHARP, SOL_SHARP];
const LA_SHARP_MAJ  = [LA_SHARP, SI_SHARP, DO, RE_SHARP, MI_SHARP, SOL, LA];
const SI_BEMOL_MAJ  = [SI_BEMOL, DO, RE, MI_BEMOL, FA, SOL, LA];
const SI_MAJ        = [SI, DO_SHARP, RE_SHARP, MI, FA_SHARP, SOL_SHARP, LA_SHARP];
const SI_SHARP_MAJ  = [DO, RE, MI, FA, SOL, LA, SI];

//DECLARATION OF MINOR SCALE CONSTANTS
const DO_BEMOL_MIN  = [DO_BEMOL, RE_BEMOL, RE, FA_BEMOL, SOL_BEMOL, SOL, LA];
const DO_MIN        = [DO, RE, MI_BEMOL, FA, SOL, LA_BEMOL, SI_BEMOL];
const DO_SHARP_MIN  = [DO_SHARP, RE_SHARP, MI, FA_SHARP, SOL_SHARP, LA, SI];
const RE_BEMOL_MIN  = [RE_BEMOL, MI_BEMOL, FA_BEMOL, SOL_BEMOL, LA_BEMOL, LA, DO_BEMOL];
const RE_MIN        = [RE, MI, FA, SOL, LA, SI_BEMOL, DO];
const RE_SHARP_MIN  = [RE_SHARP, MI_SHARP, FA_SHARP, SOL_SHARP, LA_SHARP, SI, DO_SHARP];
const MI_BEMOL_MIN  = [MI_BEMOL, FA, SOL_BEMOL, LA_BEMOL, SI_BEMOL, DO_BEMOL, RE_BEMOL];
const MI_MIN        = [MI, FA_SHARP, SOL, LA, SI, DO, RE];
const MI_SHARP_MIN  = [FA, SOL, LA_BEMOL, SI_BEMOL, DO, RE_BEMOL, MI_BEMOL];
const FA_BEMOL_MIN  = [MI, FA_SHARP, SOL, LA, SI, DO, RE];
const FA_MIN        = [FA, SOL, LA_BEMOL, SI_BEMOL, DO, RE_BEMOL, MI_BEMOL];
const FA_SHARP_MIN  = [FA_SHARP, SOL_SHARP, LA, SI, DO_SHARP, RE, MI];
const SOL_BEMOL_MIN = [SOL_BEMOL, LA_BEMOL, LA, DO_BEMOL, RE_BEMOL, RE, FA_BEMOL];
const SOL_MIN       = [SOL, LA, SI_BEMOL, DO, RE, MI_BEMOL, FA];
const SOL_SHARP_MIN = [SOL_SHARP, LA_SHARP, SI, DO_SHARP, RE_SHARP, MI, FA_SHARP];
const LA_BEMOL_MIN  = [LA_BEMOL, SI_BEMOL, DO_BEMOL, RE_BEMOL, MI_BEMOL, FA_BEMOL, SOL_BEMOL];
const LA_MIN        = [LA, SI, DO, RE, MI, FA, SOL];
const LA_SHARP_MIN  = [LA_SHARP, SI_SHARP, DO_SHARP, RE_SHARP, MI_SHARP, FA_SHARP, SOL_SHARP];
const SI_BEMOL_MIN  = [SI_BEMOL, DO, RE_BEMOL, MI_BEMOL, FA, SOL_BEMOL, LA_BEMOL];
const SI_MIN        = [SI, DO_SHARP, RE, MI, FA_SHARP, SOL, LA];
const SI_SHARP_MIN  = [DO, RE, MI_BEMOL, FA, SOL, LA_BEMOL, SI_BEMOL];

//COLLECTION OF SCALES
const MAJOR_SCALES = { 'DOb' : DO_BEMOL_MAJ,
                       'DO'  : DO_MAJ,
                       'DO#' : DO_SHARP_MAJ,
                       'REb' : RE_BEMOL_MAJ,
                       'RE'  : RE_MAJ,
                       'RE#' : RE_SHARP_MAJ,
                       'MIb' : MI_BEMOL_MAJ,
                       'MI'  : MI_MAJ, 
                       'MI#' : MI_SHARP_MAJ,
                       'FAb' : FA_BEMOL_MAJ,
                       'FA'  : FA_MAJ,
                       'FA#' : FA_SHARP_MAJ,
                       'SOLb': SOL_BEMOL_MAJ,
                       'SOL' : SOL_MAJ,
                       'SOL#': SOL_SHARP_MAJ,
                       'LAb' : LA_BEMOL_MAJ, 
                       'LA'  : LA_MAJ,
                       'LA#' : LA_SHARP_MAJ,
                       'SIb' : SI_BEMOL_MAJ,
                       'SI'  : SI_MAJ,
                       'SI#' : SI_SHARP_MAJ }; 

const MINOR_SCALES = { 'DOb' : DO_BEMOL_MIN,
                       'DO'  : DO_MIN,
                       'DO#' : DO_SHARP_MIN,
                       'REb' : RE_BEMOL_MIN,
                       'RE'  : RE_MIN,
                       'RE#' : RE_SHARP_MIN,
                       'MIb' : MI_BEMOL_MIN,
                       'MI'  : MI_MIN, 
                       'MI#' : MI_SHARP_MIN,
                       'FAb' : FA_BEMOL_MIN,
                       'FA'  : FA_MIN,
                       'FA#' : FA_SHARP_MIN,
                       'SOLb': SOL_BEMOL_MIN,
                       'SOL' : SOL_MIN,
                       'SOL#': SOL_SHARP_MIN,
                       'LAb' : LA_BEMOL_MIN, 
                       'LA'  : LA_MIN,
                       'LA#' : LA_SHARP_MIN,
                       'SIb' : SI_BEMOL_MIN,
                       'SI'  : SI_MIN,
                       'SI#' : SI_SHARP_MIN }; 


function displayResults(){
    document.getElementById("chord-prog").innerHTML = ""; // Clean <div> chord prog 

    var progType = document.getElementById("slctProgType").value;
    var key      = document.getElementById("slctKey").value;
    var accident = document.getElementById("slctAccidental").value; 
    var minMaj   = document.getElementById("rBtnMaj").checked;  // TRUE = MAJOR | FALSE = MINOR

    //DISPLAYS SELECTED KEY
    strSelectedKey = getSelectedKeyString(key, accident, minMaj);
    document.getElementById("strKey").innerHTML = "Selected Key: " + strSelectedKey; 

    var strKey = strSelectedKey.split(' ')[0];
    var scale; 

    if (minMaj){
        scale = MAJOR_SCALES[strKey];
    } else {
        scale = MINOR_SCALES[strKey];
    }

    var strNotes = ""
    for(var i=0; i < scale.length; i++){
        strNotes += scale[i].denomination + scale[i].accidental + ", "; 
    }

    //DISPLAYS THE NOTES ON THE SELECTED KEY 
    document.getElementById("strNotes").innerHTML = "Notes in key: " + strNotes.slice(0, strNotes.length - 2) + "<br><br>"; 
    
    //DISPLAYS CHORDS IN CHORD PROGRESSION
    var progression = generateProgression(progType, scale, minMaj);

    playSequence(progression);
    
    //DYNAMIC CREATION OF ONE BUTTON PER CHORD 
    var divChordProg = document.getElementById("chord-prog");
    var newLabel = document.createElement("label");
    newLabel.innerText = "Chords in Progression:"
    divChordProg.appendChild(newLabel);
    divChordProg.appendChild(document.createElement("br")); // add new line after new label

    for(var i=0; i< progression.length; i++){
        var chord = progression[i];
        var strChord = "";
        strChord = chord.notes[0].denomination + chord.notes[0].accidental;
        if (!chord.type) {
            strChord += " m";
        }
        

        var newButton = document.createElement("button");
        newButton.type = "button";
        newButton.innerText = strChord;

        newButton.classList.add("btn");
        newButton.classList.add("btn-primary");
        newButton.classList.add("btn-md");
        
        var handler = handlerFunction(chord.notes);
        
        newButton.addEventListener("click", handler, false);
        divChordProg.appendChild(newButton);
    }
} 

function playChord(notes) {
    MIDI.loadPlugin({
		soundfontUrl: "./MIDI.js/soundfont/",
        instrument: "acoustic_grand_piano",
        /*
		onprogress: function(state, progress) {
			console.log(state, progress);
        },
        */ 
		onsuccess: function() {
			var delay = 0; // play one note every quarter second
            var rootNote  = 48 + notes[0].numVal; // Base note
            var thirdNote = 48 + notes[1].numVal; 
            var fifthNote = 48 + notes[2].numVal; 

            if (thirdNote > rootNote) {
                thirdNote += 12; // If the third's numVal is lower than the root's numval,  
                fifthNote += 12; // then bump the third and fifth note up an Octave
            }
            var chordNotes = [rootNote, thirdNote, fifthNote, rootNote + 12]; // add Root's Octave

			var velocity = 127; // how hard the note hits
            // play the note
            for(var i=0; i<chordNotes.length; i++){
			    MIDI.setVolume(0, 127);
			    MIDI.noteOn(0, chordNotes[i], velocity, delay);
                MIDI.noteOff(0, chordNotes[i], delay + 0.75);
            }
		}
	});
}

function playSequence(chords) {
    MIDI.loadPlugin({
		soundfontUrl: "./MIDI.js/soundfont/",
        instrument: "acoustic_grand_piano",
        /*
		onprogress: function(state, progress) {
			console.log(state, progress);
        },
        */ 
		onsuccess: function() {
            for (var i=0; i < chords.length; i++) {
                var notes = chords[i].notes; 
                var delay = 0 + i; // play one note every quarter second
                var rootNote  = 48 + notes[0].numVal; // Base note
                var thirdNote = 48 + notes[1].numVal; 
                var fifthNote = 48 + notes[2].numVal; 

                if (thirdNote > rootNote) {
                    thirdNote += 12; // If the third's numVal is lower than the root's numval,  
                    fifthNote += 12; // then bump the third and fifth note up an Octave
                }
                var chordNotes = [rootNote, thirdNote, fifthNote, rootNote + 12]; // add Root's Octave

                var velocity = 127; // how hard the note hits
                // play the note
                for(var j=0; j<chordNotes.length; j++){
                    MIDI.setVolume(0, 127);
                    MIDI.noteOn(0, chordNotes[j], velocity, delay);
                    MIDI.noteOff(0, chordNotes[j], delay + 0.75);
                }
            }
		}
	});
}

// FORCE THE SCOPE OUT FOR IN GENERATEPROGRESSION FUNCTION
function handlerFunction (notes) {
    return function() { playChord(notes) }; 
}

function generateProgression(progType, scale, minMaj) {
    var progression;
    switch(progType) {
        case "1": 
            progression = get50sProgression(scale, minMaj);
            break;
        case "2":
            progression = getCanon(scale, minMaj);
            break;
        case "3":
            progression = get12BarBlues(scale, minMaj); 
            break;
        case "4":
            progression = getSmokeOnTheWater(scale, minMaj); 
            break;
        case "5":
            progression = getSweetHomeAlabama(scale, minMaj);
            break;
        case "6":
            progression = getDescendingFlamenco(scale, minMaj);
            break;
        case "7":
            progression = getLaBamba(scale, minMaj);
            break; 
    }
    return progression; 
}

function get50sProgression(scale, minMaj) {
    // I vi IV V
    var first  = [];
    var sixth  = [];
    var fourth = [];
    var fifth  = []; 

    if (minMaj) {
        first  = getChord(true,  MAJOR_SCALES[scale[0].denomination + scale[0].accidental]);
        sixth  = getChord(false, MINOR_SCALES[scale[5].denomination + scale[5].accidental]);
        fourth = getChord(true,  MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(true,  MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } else {
        first  = getChord(false, MINOR_SCALES[scale[0].denomination + scale[0].accidental]);
        sixth  = getChord(true,  MAJOR_SCALES[scale[5].denomination + scale[5].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } 

    return [first, sixth, fourth, fifth];
}

function getCanon(scale, minMaj) {
    // I V vi iii IV I IV V
    var first  = [];
    var fifth  = [];
    var sixth  = [];
    var third  = [];
    var fourth = []; 

    if (minMaj) {
        first  = getChord(true,  MAJOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fifth  = getChord(true,  MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
        sixth  = getChord(false, MINOR_SCALES[scale[5].denomination + scale[5].accidental]);
        third  = getChord(false, MINOR_SCALES[scale[2].denomination + scale[2].accidental]);
        fourth = getChord(true,  MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
    } else {
        first  = getChord(false, MINOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
        sixth  = getChord(true,  MAJOR_SCALES[scale[5].denomination + scale[5].accidental]);
        third  = getChord(true,  MAJOR_SCALES[scale[2].denomination + scale[2].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
    }
    return [first, fifth, sixth, third, fourth, first, fourth, fifth]; 
}

function get12BarBlues(scale, minMaj) {
    // I I I I IV IV I I V V I I
    var first  = [];
    var fourth = [];
    var fifth  = []; 

    if (minMaj) {
        first  = getChord(true, MAJOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fourth = getChord(true, MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(true, MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } else {
        first  = getChord(false, MINOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } 
    return [first, first, first, first, fourth, fourth, first, first, fifth, fifth, fourth, fourth];
}

function getSmokeOnTheWater(scale, minMaj) {
    // ii IV V
    var second = [];
    var fourth = []; 
    var fifth  = [];

    if (minMaj) {
        second = getChord(false, MINOR_SCALES[scale[1].denomination + scale[1].accidental]);
        fourth = getChord(true,  MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(true,  MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } else {
        second = getChord(true,  MAJOR_SCALES[scale[1].denomination + scale[1].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
    }

    return [second, fourth, fifth];
}

function getSweetHomeAlabama(scale, minMaj) {
    // V IV I
    var fifth  = [];
    var fourth = [];
    var first  = [];

    if (minMaj) {
        fifth  = getChord(true, MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
        fourth = getChord(true, MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        first  = getChord(true, MAJOR_SCALES[scale[0].denomination + scale[0].accidental]);
    } else {
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        first  = getChord(false, MINOR_SCALES[scale[0].denomination + scale[0].accidental]);
    }
    return [fifth, fourth, first]; 
}

function getDescendingFlamenco(scale, minMaj) {
    //  vi V IV III
    var sixth  = [];
    var fifth  = [];
    var fourth = [];
    var third  = [];
    
    if (minMaj) {
        sixth  = getChord(false, MINOR_SCALES[scale[5].denomination + scale[5].accidental]);
        fifth  = getChord(true,  MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
        fourth = getChord(true,  MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        third  = getChord(true,  MAJOR_SCALES[scale[2].denomination + scale[2].accidental]);
    } else {
        sixth  = getChord(true,  MAJOR_SCALES[scale[5].denomination + scale[5].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        third  = getChord(false, MINOR_SCALES[scale[2].denomination + scale[2].accidental]);
    }

    return [sixth, fifth, fourth, third];
}

function getLaBamba(scale, minMaj) {
    // I IV V IV
    var first  = [];
    var fourth = [];
    var fifth  = [];
c
    if (minMaj) {
        first  = getChord(true, MAJOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fourth = getChord(true, MAJOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(true, MAJOR_SCALES[scale[4].denomination + scale[4].accidental]);
    } else {
        first  = getChord(false, MINOR_SCALES[scale[0].denomination + scale[0].accidental]);
        fourth = getChord(false, MINOR_SCALES[scale[3].denomination + scale[3].accidental]);
        fifth  = getChord(false, MINOR_SCALES[scale[4].denomination + scale[4].accidental]);
    }

    return [first, fourth, fifth, fourth];
}

function getChord(minMaj, scale) {
    return {type: minMaj, 
            notes: [scale[0], scale[2], scale[4]]}; 
}

function getSelectedKeyString(key, accident, minMaj) {

    var strKey = "";
    switch(key) {
        case "1":
            strKey = "DO";
            break;
        case "3":
            strKey = "RE";
            break;
        case "5":
            strKey = "MI";
            break;
        case "6":
            strKey = "FA";
            break;
        case "8":
            strKey = "SOL";
            break;
        case "10":
            strKey = "LA";
            break;
        case "12":
            strKey = "SI";
            break;
    }

    var strAccident;
    if (accident == 1){
        strAccident = "";
    } else if (accident == 2) {
        strAccident = "#"
    } else {
        strAccident = "b";
    }

    var strMinMaj;
    if (minMaj){
        strMinMaj = "MAJOR";
    } else {
        strMinMaj = "minor";
    }

    return strKey + strAccident + " " +strMinMaj;
}

class Note {
    constructor(denomination, accidental, numVal) {
        this.denomination = denomination; 
        this.accidental = accident; 
        this.numVal = numVal; 
    }
}

class Scale {
    constructor(notes) {
        this.notes = notes; 
    }
}
