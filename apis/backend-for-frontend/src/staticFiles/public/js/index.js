document.addEventListener('DOMContentLoaded', function () {
  initSidebar();
  initCarousel();
});

function initCarousel() {
  const carouselViewport = document.querySelector('.carousel .carousel__viewport');

  const slidePreviousButtons = document.querySelectorAll('.carousel .carousel__viewport .carousel__prev');
  const slideNextButtons = document.querySelectorAll('.carousel .carousel__viewport .carousel__next');
  const navigationButtons = document.querySelectorAll('.carousel .carousel__navigation .carousel__navigation__button');

  let currentSlide = 1;
  let okToMove = true;

  slidePreviousButtons.forEach(element => element.addEventListener('click', scrollHorizontally));
  slideNextButtons.forEach(element => element.addEventListener('click', scrollHorizontally));
  navigationButtons.forEach(element => element.addEventListener('click', scrollHorizontally));

  function scrollHorizontally(event) {
    event.preventDefault();

    let targetElement = event.target || event.srcElement;

    if (targetElement.tagName == 'svg') {
      targetElement = targetElement.parentNode;
    } else if (targetElement.tagName == 'path') {
      targetElement = targetElement.parentNode.parentNode;
    }

    const link = targetElement.href;
    const internalLink = link.split('#')[1];
    const slideNumber = internalLink[internalLink.length - 1];

    const destinationElement = document.querySelector(`#${internalLink}`);

    if (destinationElement) {
      const leftPosition = destinationElement.offsetLeft;

      carouselViewport.scrollLeft = leftPosition;

      currentSlide = slideNumber;
    }
  }

  carouselViewport.addEventListener('mouseenter', event => {
    okToMove = false;
  });

  carouselViewport.addEventListener('mouseleave', event => {
    okToMove = true;
  });

  window.setInterval(() => {
    if (okToMove) {
      slideNextButtons[currentSlide - 1].click();
    }
  }, 5000);
}

function initSidebar() {
  const getPlaylistsUrl = 'http://localhost:8080/api/playlists';

  const playlistsList = document.querySelector('.sidebar .sidebar__playlists');

  function getPlaylists() {
    fetch(getPlaylistsUrl)
      .then(response => {
        return response.json();
      })
      .then(playlists => {
        for (const playlist of playlists) {
          let playlistsListItem = document.createElement('li');
          playlistsListItem.innerHTML = `<li><a href="#">${playlist}</a></li>`;
          playlistsList.appendChild(playlistsListItem);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  getPlaylists();
}

// Listeners

function OnClickBand(id) {
  $(location).attr('href', `/web/band/${id}`);
}

function OnClickAlbum(id) {
  const getAlbumUrl = `http://localhost:8080/api/album/${id}`;

  const albumModal = document.querySelector('.album__modal');

  const albumImg = albumModal.querySelector('.album__info__img img');
  const albumReleaseYear = albumModal.querySelector('.album__year');
  const albumName = albumModal.querySelector('.album__name');
  const albumProducers = albumModal.querySelector('.album__producers');
  const albumStudio = albumModal.querySelector('.album__studio');
  const albumDurationNumberOfTracks = albumModal.querySelector('.album__duration__number__tracks');
  const albumDurationTime = albumModal.querySelector('.album__duration__time');

  const tracksList = albumModal.querySelector('.tracks');

  fetch(getAlbumUrl)
    .then(response => {
      return response.json();
    })
    .then(album => {
      albumImg.src = `/web/files/?file=${album.cover}`;

      albumReleaseYear.innerHTML = album.releaseDateStr;
      albumName.innerHTML = album.name;
      albumProducers.innerHTML = `Producers: ${album.producersStr}`;
      albumStudio.innerHTML = `Studio: ${album.studio}`;

      albumDurationNumberOfTracks.innerHTML = `${album.numberOfTracks} songs`;
      albumDurationTime.innerHTML = album.fullDuration;

      tracksList.innerHTML = '';

      for (const [index, track] of album.tracks.entries()) {
        let trackItem = document.createElement('div');
        trackItem.className = 'track';
        trackItem.id = track.id;

        trackItem.innerHTML = `
          <div class="track__number">${index}</div>
          <div class="track__title">${track.title}</div>
          <div class="track__length">${track.durationStr}</div>
        `;

        trackItem.addEventListener('click', OnClickMusic.bind(trackItem, track.id));

        tracksList.appendChild(trackItem);
      }

      // albumModal.style['z-index'] = '$z-index-modal-0';
      albumModal.style['z-index'] = '100';
    })
    .catch(error => {
      console.error(`Error fetching album ${id}:`, error);
    });
}

// close album modal when click outside of it
document.addEventListener('click', event => {
  const albumModal = document.querySelector('.album__modal');
  const albumModalContent = albumModal.querySelector('.album__modal__content');

  const isClickInside = albumModalContent.contains(event.target);

  if (!isClickInside) {
    albumModal.style['z-index'] = '-1';
  }
});

function OnClickMusic(id) {
  $(location).attr('href', `/web/music/${id}/audio`);
}
