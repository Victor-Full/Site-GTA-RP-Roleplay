var novidade = document.getElementsByClassName('btn')[0]
novidade.addEventListener ("click", function() {
    open('https://www.google.com.br')
  });

var regras = document.getElementsByClassName('btn')[1]
regras.addEventListener ("click", function() {
    open('https://www.google.com.br')
})

var discord = document.getElementsByClassName('btn')[2]
discord.addEventListener ("click", function() {
    open('https://www.google.com.br')
  });

var loja = document.getElementsByClassName('btn')[3]
loja.addEventListener ("click", function() {
      open('https://www.google.com.br')
  })


var nft = document.getElementsByClassName('btn')[4]
nft.addEventListener ("click", function() {
    open('https://www.google.com')
})


// ------------ JOGAR -------------- //
var jogar = document.getElementsByClassName('btnjogar')[0]
jogar.addEventListener ("click", function() {
    open('https://www.google.com.br')
})


// AUDIO //

var audio = new Audio('Sound/Etheracity Roleplay.mp3')
audio.play()
audio.volume = 0.1;


var upSound = 0.1;
var downSound = 0.01;


document.addEventListener("keypress", event => {
    //console.log(event);
    if (!event) return;

    var keyP = event.key.toLowerCase();
    var cod = event.keyCode;

    if (keyP == "p") {
      //p
      if (audio.paused) return audio.play();
      else return audio.pause();
    }

    if (keyP == "w" && audio.volume + upSound <= 1)
      //w
      return (audio.volume += upSound);
    else if (keyP == "w" && audio.volume + upSound >= 1)
      return (audio.volume = 1);
    else if (keyP == "s" && audio.volume - upSound >= 0)
      //s
      return (audio.volume -= upSound);
    else if (keyP == "s" && audio.volume - upSound <= 0)
      return (audio.volume = 0);
    else if (keyP == "a")
      //a
      return (audio.currentTime -= 3);
    else if (keyP == "d")
      //d
      return (audio.currentTime += 3);
  });

  function audioVolumeIn(q) {
    if (q.volume || q.volume == 0) {
      var InT = 0;
      var setVolume = firstPlayed ? lastVolume : 0.3; 
      var speed = 0.01; 
      q.volume = InT;
      var eAudio = setInterval(function() {
        InT += speed;
        q.volume = InT.toFixed(1);
        if (InT.toFixed(1) >= setVolume) {
          clearInterval(eAudio);

        }
      }, 25);
    }
  }

  function audioVolumeOut(q) {
    lastVolume = q.volume;
    if (q.volume || q.volume == 0) {
      var InT = q.volume;
      var setVolume = 0; 
      var speed = 0.002; 
      q.volume = InT;
      var fAudio = setInterval(function() {
        InT -= speed;
        q.volume = InT.toFixed(1);
        if (InT.toFixed(1) <= setVolume) {
          clearInterval(fAudio);

        }
      }, 25);
    }
  }




