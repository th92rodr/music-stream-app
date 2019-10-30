const playImg = '/imgs/Play.png';
const pauseImg = '/imgs/Pause.png';

const audio = document.querySelector('#music-player');
const songTitle = document.getElementById('songTitle');
const fillBar = document.getElementById('fill');

audio.addEventListener('timeupdate', () => {
    var position = audio.currentTime / audio.duration;
    fillBar.style.width = position * 100 +'%';
});

function playOrPauseSong() {
    if (audio.paused){
        $('#play img').attr('src', pauseImg);
        audio.play();

    } else {
        $('#play img').attr('src', playImg);
        audio.pause();
    }
}

function playSong() {
    //console.log('play song');
    //song.src = songs[currentSong];  //set the source of 0th song 
    //songTitle.textContent = songs[currentSong]; // set the title of song
    //song.play();    // play the song

    $('#music-player').trigger('play');
}

function next() {
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $('#play img').attr('src','Pause.png');
    $('#image img').attr('src',poster[currentSong]);
    $('#bg img').attr('src',poster[currentSong]);
}

function pre() {
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $('#play img').attr('src','Pause.png');
    $('#image img').attr('src',poster[currentSong]);
    $('#bg img').attr('src',poster[currentSong]);
}
