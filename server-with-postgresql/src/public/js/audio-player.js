(function() {
  $('.list-btn').click(function() {
    $(this)
      .parent()
      .toggleClass('active');
    return $('.lists').toggleClass('active');
  });

  $('.action-button')
    .find('a')
    .click(function() {
      if (
        $(this).hasClass('random') ||
        $(this).hasClass('play-pause') ||
        $(this).hasClass('repeat')
      ) {
        return $(this).toggleClass('active');
      }
    });
}.call(this));

$(document).ready(function() {
  /*
  $.ajax({
    url: '/audio',
    type: 'GET',
    success: (result) => {
      console.log('RES ', result);
      audio.src=result;
    },
    error: (error) => console.error('Error')
  });
  

  // Fetch Data

  let cover;
  fetch('/cover')
    .then((response) => response.blob())
    .then((image) => {
      // Then create a local URL for that image
      cover = URL.createObjectURL(image);
      console.log(cover);
      $('.music-box .album .photo img').attr('src', cover);
    });

  fetch('/band')
    .then((response) => response.blob())
    .then((image) => {
      // Then create a local URL for that image
      cover = URL.createObjectURL(image);
      console.log(cover);
      $('.artist-box .album .photo img').attr('src', cover);
    });

  */


  // Control Buttons

  // Play / Pause Button
  $('.action-button .play-pause').click(function() {
    console.log('play pause clicked');
    if ($('#audio-tag')[0].paused) {
      console.log('PLAY');
      $('#audio-tag')[0].play();
      $('.action-button .play-pause i').removeClass('fa-play');
      $('.action-button .play-pause i').addClass('fa-pause');
    } else {
      console.log('PAUSE');
      $('#audio-tag')[0].pause();
      $('.action-button .play-pause i').removeClass('fa-pause');
      $('.action-button .play-pause i').addClass('fa-play');
    }
  });

  // Stop Button
  $('.action-button .stop').click(function() {
    console.log('STOP');
    $('#audio-tag')[0].pause();
    $('#audio-tag')[0].currentTime = 0;
    $('.action-button .play-pause i').removeClass('fa-pause');
    $('.action-button .play-pause i').addClass('fa-play');
  });

  // Audio Listeners

  $('#audio-tag')[0].addEventListener('canplay', () => {
    console.log('Ready to play');
    console.log('Duration: ' + $('#audio-tag')[0].duration + ' seconds');
    console.log('Source: ' + $('#audio-tag')[0].src);
  });

  $('#audio-tag')[0].addEventListener('timeupdate', () => {
    console.log('Current: ', $('#audio-tag')[0].currentTime);
    $('.player .time .current').text($('#audio-tag')[0].currentTime);

    //var position = $('#audio-tag')[0].currentTime / $('#audio-tag')[0].duration;
    //console.log('pos ', position);
  });
});

/*
$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
  
  audioElement.addEventListener('ended', function() {
      this.play();
  }, false);
  
  audioElement.addEventListener("canplay",function(){
      $("#length").text("Duration:" + audioElement.duration + " seconds");
      $("#source").text("Source:" + audioElement.src);
      $("#status").text("Status: Ready to play").css("color","green");
  });
  
  audioElement.addEventListener("timeupdate",function(){
      $("#currentTime").text("Current second:" + audioElement.currentTime);
  });
  
  $('#play').click(function() {
      audioElement.play();
      $("#status").text("Status: Playing");
  });
  
  $('#pause').click(function() {
      audioElement.pause();
      $("#status").text("Status: Paused");
  });
  
  $('#restart').click(function() {
      audioElement.currentTime = 0;
  });
});
*/
