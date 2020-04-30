var bandLists = document.getElementsByClassName('band__list-item');
var albumLists = document.getElementsByClassName('album__list-item');


const wrapper = document.querySelector('.wrapper');
const music_box = document.querySelector('.music-box');
//music_box.style.visibility = 'hidden';


/*
let cover;
  fetch('/album/1/cover')
    .then((response) => response.blob())
    .then((image) => {
      // Then create a local URL for that image
      cover = URL.createObjectURL(image);
      console.log(cover);
      //$('.music-box .album .photo img').attr('src', cover);
      cards();
    });
*/

function cards() {
  for (let i = 0; i < bandLists.length; i++) {
    const bgImage = `url('https://source.unsplash.com/random/300x300?sig=${i}')`;
    bandLists[i].style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${bgImage}`;
  
    //bandLists[i].style.backgroundImage = `linear-gradient(
    //  rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${cover}`;
    bandLists[i].style.opacity = 0.8;
  }

  for (let i = 0; i < albumLists.length; i++) {
    const bgImage = `url('https://source.unsplash.com/random/300x300?sig=${i}')`;
    albumLists[i].style.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${bgImage}`;
  
    //albumLists[i].style.backgroundImage = `linear-gradient(
    //  rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${cover}`;
    albumLists[i].style.opacity = 0.8;
  }
}



function onclickBand(id) {
  console.log('on click band ', id);
  $(location).attr('href', `/band/${id}`);
}

function onclickAlbum(id) {
  console.log('on click album ', id);
  $(location).attr('href', `/album/${id}`);
}

function onclickMusic(id) {
  console.log('on click music ', id);
  //$(location).attr('href', `/album/${id}`);

  wrapper.style.opacity = 0.5;
  music_box.style.visibility = 'visible';
}



var _data = JSON.parse(`{"lyrics":[{"line":"","time":-1},{"line":"Hey, let's all go into the forest","note":"Verse 1","time":16000},{"line":"Nobody will notice for a while","time":20000},{"line":"There we can visit all the creatures","time":24000},{"line":"Maybe they can teach us facts of life","time":27500},{"line":"","time":32000},{"line":"Or we can travel to the ocean","note":"Verse 2","time":55500},{"line":"Don't forget your lotion","time":59500},{"line":"It's quite hot","time":61500},{"line":"I once met seven lovely crabs","time":64000},{"line":"They said I should go back and join them for tea","time":67500},{"line":"","time":72000},{"line":"Oh wait, the forest got demolished","note":"Verse 3","time":95500},{"line":"When they built the airport years ago","time":99000},{"line":"But we can still go see the ocean","time":103500},{"line":"Cause they put it in a bowl at the mall","time":107500},{"line":"","time":112000}]}`);
var currentLine = "";

function align() {
   var a = $(".highlighted").height();
   var c = $(".content").height();
   var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
   var e = d + (a/2) - (c/2);
   $(".content").animate(
       {scrollTop: e + "px"}, {easing: "swing", duration: 250}
   );
}

var lyricHeight = $(".lyrics").height();
$(window).on("resize", function() {
   if ($(".lyrics").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
      lyricHeight = $(".lyrics").height();
      align();
   }
});

$(document).ready(function(){
  $('#audio-tag').on('timeupdate', function(e){
      console.log('timeupdate');
      var time = this.currentTime*1000;
      var past = _data["lyrics"].filter(function (item) {
         return item.time < time;
      });
      if (_data["lyrics"][past.length] != currentLine) {
         currentLine = _data["lyrics"][past.length];
         $(".lyrics div").removeClass("highlighted");
         $(`.lyrics div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
         align();
      }
   });
});

generate();

function generate() {
   var html = "";
   for(var i = 0; i < _data["lyrics"].length; i++) {
      html += "<div";
      if(i == 0) {
         html+=` class="highlighted"`;
         currentLine = 0;
      }
      if(_data["lyrics"][i]["note"]) {
         html += ` note="${_data["lyrics"][i]["note"]}"`;
      }
      html += ">";
      html += _data["lyrics"][i]["line"] == "" ? "•" : _data["lyrics"][i]["line"];
      html += "</div>"
   }
   $(".lyrics").html(html);
   align();
}