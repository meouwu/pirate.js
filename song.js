var NOTE_C4 = 262;
var NOTE_D4 = 294;
var NOTE_E4 = 330;
var NOTE_F4 = 349;
var NOTE_G4 = 392;
var NOTE_A4 = 440;
var NOTE_B4 = 494;
var NOTE_C5 = 523;
var NOTE_D5 = 587;
var NOTE_E5 = 659;
var NOTE_F5 = 698;
var NOTE_G5 = 784;
var NOTE_A5 = 880;
var NOTE_B5 = 988;

var btn = document.getElementById('btn');
var beep = new Beep();

btn.onclick = function() {
    (new AudioContext).resume(); // fix for chrome >= 66
    
    beep.init();
    beep.beep([[1000, 100]])
      .then(function () {
          
        return beep.beep([

            [NOTE_E4, 125], [NOTE_G4, 125], [NOTE_A4, 250], [NOTE_A4, 125], [0, 125], 
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_C5, 125], [NOTE_D5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_A4, 125], [NOTE_G4, 125], [NOTE_A4, 375], [0,       125],
           
            [NOTE_E4, 125], [NOTE_G4, 125], [NOTE_A4, 250], [NOTE_A4, 125], [0, 125], 
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_C5, 125], [NOTE_D5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_A4, 125], [NOTE_G4, 125], [NOTE_A4, 375], [0,       125],
           
            [NOTE_E4, 125], [NOTE_G4, 125], [NOTE_A4, 250], [NOTE_A4, 125], [0, 125], 
            [NOTE_A4, 125], [NOTE_C5, 125], [NOTE_D5, 250], [NOTE_D5, 125], [0, 125], 
            [NOTE_D5, 125], [NOTE_E5, 125], [NOTE_F5, 250], [NOTE_F5, 125], [0, 125],
            [NOTE_E5, 125], [NOTE_D5, 125], [NOTE_E5, 125], [NOTE_A4, 250], [0, 125],
           
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_D5, 250], [NOTE_E5, 125], [NOTE_A4, 250], [0,       125], 
            [NOTE_A4, 125], [NOTE_C5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_C5, 125], [NOTE_A4, 125], [NOTE_B4, 375], [0,       375],

            [NOTE_A4, 250], [NOTE_A4, 125],
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_C5, 125], [NOTE_D5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_A4, 125], [NOTE_G4, 125], [NOTE_A4, 375], [0,       125],

            [NOTE_E4, 125], [NOTE_G4, 125], [NOTE_A4, 250], [NOTE_A4, 125], [0, 125], 
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_C5, 125], [NOTE_D5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_A4, 125], [NOTE_G4, 125], [NOTE_A4, 375], [0,       125],
           
            [NOTE_E4, 125], [NOTE_G4, 125], [NOTE_A4, 250], [NOTE_A4, 125], [0, 125], 
            [NOTE_A4, 125], [NOTE_C5, 125], [NOTE_D5, 250], [NOTE_D5, 125], [0, 125], 
            [NOTE_D5, 125], [NOTE_E5, 125], [NOTE_F5, 250], [NOTE_F5, 125], [0, 125],
            [NOTE_E5, 125], [NOTE_D5, 125], [NOTE_E5, 125], [NOTE_A4, 250], [0, 125],
           
            [NOTE_A4, 125], [NOTE_B4, 125], [NOTE_C5, 250], [NOTE_C5, 125], [0, 125], 
            [NOTE_D5, 125], [NOTE_E5, 125], [NOTE_A4, 250], [0,       125], 
            [NOTE_A4, 125], [NOTE_C5, 125], [NOTE_B4, 250], [NOTE_B4, 125], [0, 125],
            [NOTE_C5, 125], [NOTE_A4, 125], [NOTE_B4, 375], [0,       375],

            [NOTE_E5, 250], [0, 125],       [0, 375],       [NOTE_F5, 250], [0, 125], [0,       375],
            [NOTE_E5, 125], [NOTE_E5, 125], [0, 125],       [NOTE_G5, 125], [0, 125], [NOTE_E5, 125], [NOTE_D5, 125], [0, 125], [0, 375],
            [NOTE_D5, 250], [0, 125],       [0, 375],       [NOTE_C5, 250], [0, 125], [0,       375],
            [NOTE_B4, 125], [NOTE_C5, 125], [0, 125],       [NOTE_B4, 125], [0, 125], [NOTE_A4, 500],
            
            [NOTE_E5, 250], [0,       125], [0, 375],       [NOTE_F5, 250], [0, 125], [0,       375],
            [NOTE_E5, 125], [NOTE_E5, 125], [0, 125],       [NOTE_G5, 125], [0, 125], [NOTE_E5, 125], [NOTE_D5, 125], [0, 125], [0, 375],
            [NOTE_D5, 250], [0,       125], [0, 375],       [NOTE_C5, 250], [0, 125], [0,       375],
            [NOTE_B4, 125], [NOTE_C5, 125], [0, 125],       [NOTE_B4, 125], [0, 125], [NOTE_A4, 500]

        ]);
    });
};