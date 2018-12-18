function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beep = function () {

  function Beep() {
    var volume = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var waveType = arguments.length <= 1 || arguments[1] === undefined ? 'square' : arguments[1];

    _classCallCheck(this, Beep);

    this._volume = volume;
    this._waveType = waveType;
  }

  Beep.prototype.init = function init() {
    if (typeof this._audioContext === 'undefined') {
      this._audioContext = this._getAudioContext();
      return Promise.resolve();
    } else {
      return Promise.resolve();
    }
  };

  Beep.prototype.beep = function beep(freqArray) {
    var _this = this;

    return this.init().then(function () {
      return new Promise(function (resolve, reject) {
        var gainNode = _this._createGainNode(_this._volume);
        var oscillatorNode = _this._createOscillatorNode(_this._waveType);
        oscillatorNode.onended = function () {
          return resolve();
        }; // Call resolve() when the beep is completely finished

        var startTime = _this._audioContext.currentTime;

        var _freqArray$shift = freqArray.shift();

        var firstFreq = _freqArray$shift[0];
        var firstTime = _freqArray$shift[1]; // Shift off the first element of the array as the first note

        var cumulativeTime = startTime + _this._msToS(firstTime);
        oscillatorNode.frequency.value = firstFreq;

        // Loop over the rest of the notes and tell the oscillatorNode to set the freq at the appropriate time
        // If there was only one sound/duration tuple then there will be 0 elements in the array at this point and it will be skipped
        freqArray.forEach(function (_ref) {
          var freq = _ref[0];
          var time = _ref[1];

          oscillatorNode.frequency.setValueAtTime(freq, cumulativeTime);
          cumulativeTime += _this._msToS(time);
        });

        // Connect the oscillatorNode to the destination (speaker output)
        oscillatorNode.connect(gainNode);
        gainNode.connect(_this._audioContext.destination);

        // And finally start and stop the beep at the correct times
        oscillatorNode.start(startTime);
        oscillatorNode.stop(cumulativeTime);
      });
    });
  };

  Beep.prototype._createOscillatorNode = function _createOscillatorNode(waveType) {
    var oscillatorNode = this._audioContext.createOscillator();

    oscillatorNode.start = oscillatorNode.noteOn || oscillatorNode.start;
    oscillatorNode.stop = oscillatorNode.noteOff || oscillatorNode.stop;

    oscillatorNode.type = waveType;

    return oscillatorNode;
  };

  Beep.prototype._createGainNode = function _createGainNode(volume) {
    var gainNode = this._audioContext.createGain();

    gainNode.start = gainNode.noteOn || gainNode.start;
    gainNode.stop = gainNode.noteOff || gainNode.stop;

    gainNode.gain.value = volume;

    return gainNode;
  };

  Beep.prototype._getAudioContext = function _getAudioContext() {
    return new (window.AudioContext || window.webkitAudioContext)();
  };

  Beep.prototype._msToS = function _msToS(ms) {
    return ms / 1000;
  };

  return Beep;
}();