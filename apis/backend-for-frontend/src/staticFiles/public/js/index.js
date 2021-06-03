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

function OnClickBand(id) {
  $(location).attr('href', `/static/artists/${id}`);
}

let isArtistModalOpen = false;
let isAlbumModalOpen = false;
let isMusicModalOpen = false;

function openArtistPage(id) {
  const artistId = id;

  const artistPage = document.querySelector('.artist__page');

  const artistName = artistPage.querySelector('.band__header__name p');
  const artistCountry = artistPage.querySelector('.stats__card__content.country');
  const artistGenre = artistPage.querySelector('.stats__card__content.genre p');
  const artistFoundationDate = artistPage.querySelector('.stats__card__content.date p');
  const artistDescription = artistPage.querySelector('.band__description');
  const artistFacebook = artistPage.querySelector('.band__see__more .facebook');
  const artistTwitter = artistPage.querySelector('.band__see__more .twitter');
  const artistInstagram = artistPage.querySelector('.band__see__more .instagram');
  const artistWikipedia = artistPage.querySelector('.band__see__more .wikipedia');
  const artistFullImg = artistPage.querySelector('.artist__page__full__img__wrapper img');
  const artistVerticalImg = artistPage.querySelector('.band__info__img__wrapper img');

  const playButton = artistPage.querySelector('.band__actions__play');
  const playMixButton = artistPage.querySelector('.band__actions__mix');
  const favoriteArtistButton = artistPage.querySelector('.band__header__favorite .favorite');
  const followArtistButton = artistPage.querySelector('.band__header__favorite .follow');

  const popularTracksList = artistPage.querySelector('.band__popular__tracks .tracks');
  const albumsList = artistPage.querySelector('.albums__list');

  function fetchArtist() {
    fetchArtist.cache = fetchArtist.cache || {};

    if (fetchArtist.cache[artistId]) {
      buildArtistPage(fetchArtist.cache[artistId]);
    } else {
      const getArtistUrl = `http://localhost:8080/api/artists/${artistId}`;

      fetch(getArtistUrl)
        .then(response => {
          return response.json();
        })
        .then(artist => {
          fetchArtist.cache[artistId] = artist;
          buildArtistPage(artist);
        })
        .catch(error => {
          console.error(`Error fetching artist ${artistId}:`, error);
        });
    }
  }

  function buildArtistPage(artist) {
    console.log(artist);

    artistFullImg.src = `/static/files?file=${artist.full_img}`;
    artistFullImg.alt = artist.name;

    artistVerticalImg.src = `/static/files?file=${artist.vertical_img}`;
    artistVerticalImg.alt = artist.name;

    artistName.innerHTML = artist.name;
    artistFacebook.href = artist.facebook_url;
    artistTwitter.href = artist.twitter_url;
    artistInstagram.href = artist.instagram_url;
    artistWikipedia.href = artist.wikipedia_url;

    artistCountry.innerHTML = `
      {{> icon-sweden}}
      <p>${artist.country}</p>
    `;
    artistGenre.innerHTML = artist.genre;
    artistFoundationDate.innerHTML = `${new Date(artist.foundation_date).getFullYear()}`;

    artistDescription.innerHTML = artist.description;

    popularTracksList.innerHTML = '';

    for (const track of artist.popularTracks) {
      let trackItem = document.createElement('div');
      trackItem.className = 'track';
      trackItem.id = track.id;

      trackItem.innerHTML = `
        <div class="track__play">{{> icon-play-outline}}</div>
        <div class="track__title">${track.title}</div>
        <div class="track__length">${getMusicDuration(track.duration)}</div>
      `;

      trackItem.addEventListener('click', openMusicModal.bind(trackItem, track.id));

      popularTracksList.appendChild(trackItem);
    }

    albumsList.innerHTML = '';

    for (const album of artist.albums) {
      let albumItem = document.createElement('li');
      albumItem.className = 'albums__list__item';
      albumItem.id = album.id;

      albumItem.innerHTML = `
        <img src="/static/files?file=${album.cover}" alt=${album.name} loading="lazy" />
        <div class="albums__list__item__info">
          <span class="album__title">${album.name}</span>
          <span class="album__year">${`${convertMonthToString(new Date(album.release_date).getMonth())}, ${new Date(album.release_date).getFullYear()}`}</span>
        </div>
      `;

      albumItem.addEventListener('click', openAlbumModal.bind(albumItem, album.id));

      albumsList.appendChild(albumItem);
    }

    artistPage.style['z-index'] = '100';

    isArtistModalOpen = true;
  }

  fetchArtist();
}

function openAlbumModal(id) {
  const albumId = id;

  const albumModal = document.querySelector('.album__modal');
  const albumModalContent = albumModal.querySelector('.album__modal__content');

  const albumImg = albumModal.querySelector('.album__info__img img');
  const albumReleaseYear = albumModal.querySelector('.album__year');
  const albumName = albumModal.querySelector('.album__name');
  const albumProducers = albumModal.querySelector('.album__producers');
  const albumStudio = albumModal.querySelector('.album__studio');
  const albumDurationNumberOfTracks = albumModal.querySelector('.album__duration__number__tracks');
  const albumDurationTime = albumModal.querySelector('.album__duration__time');

  const tracksList = albumModal.querySelector('.tracks');

  function fetchAlbum() {
    fetchAlbum.cache = fetchAlbum.cache || {};

    if (fetchAlbum.cache[albumId]) {
      buildAlbumModal(fetchAlbum.cache[albumId]);
    } else {
      const getAlbumUrl = `http://localhost:8080/api/albums/${albumId}`;

      fetch(getAlbumUrl)
        .then(response => {
          return response.json();
        })
        .then(album => {
          fetchAlbum.cache[albumId] = album;
          buildAlbumModal(album);
        })
        .catch(error => {
          console.error(`Error fetching album ${albumId}:`, error);
        });
    }
  }

  function buildAlbumModal(album) {
    albumImg.src = `/static/files?file=${album.cover}`;

    albumReleaseYear.innerHTML = `${convertMonthToString(new Date(album.release_date).getMonth())}, ${new Date(album.release_date).getFullYear()}`;
    albumName.innerHTML = album.name;
    albumProducers.innerHTML = `Producers: ${album.producers.join(', ')}`;
    albumStudio.innerHTML = `Studio: ${album.studio}`;

    albumDurationNumberOfTracks.innerHTML = `${album.number_of_tracks} songs`;
    albumDurationTime.innerHTML = album.full_duration;

    tracksList.innerHTML = '';

    for (const [index, track] of album.tracks.entries()) {
      let trackItem = document.createElement('div');
      trackItem.className = 'track';
      trackItem.id = track.id;

      trackItem.innerHTML = `
          <div class="track__number">${index + 1}</div>
          <div class="track__title">${track.title}</div>
          <div class="track__length">${getMusicDuration(track.duration)}</div>
        `;

      trackItem.addEventListener('click', openMusicModal.bind(trackItem, track.id));

      tracksList.appendChild(trackItem);
    }

    albumModal.style['z-index'] = '100';
    albumModalContent.classList.add('open');

    isAlbumModalOpen = true;

    setTimeout(function () {
      // close album modal when click outside of it
      document.addEventListener('click', checkWetherCloseAlbumModal);
    }, 2000);
  }

  function checkWetherCloseAlbumModal(event) {
    if (!isAlbumModalOpen) {
      return;
    }

    const isClickInside = albumModalContent.contains(event.target);

    if (!isClickInside) {
      closeAlbumModal();
    }
  }

  function closeAlbumModal() {
    albumModal.style['z-index'] = '-1';
    albumModalContent.classList.remove('open');

    isAlbumModalOpen = false;
    document.removeEventListener('click', checkWetherCloseAlbumModal);
  }

  fetchAlbum();
}

function openMusicModal(id) {
  const musicId = id;

  function fetchMusic() {
    fetchMusic.cache = fetchMusic.cache || {};

    if (fetchMusic.cache[musicId]) {
      buildMusicModal(fetchMusic.cache[musicId]);
    } else {
      const getMusicUrl = `http://localhost:8080/api/musics/${musicId}`;

      fetch(getMusicUrl)
        .then(response => {
          return response.json();
        })
        .then(music => {
          fetchMusic.cache[musicId] = music;
          buildMusicModal(music);
        })
        .catch(error => {
          console.error(`Error fetching music ${musicId}:`, error);
        });
    }
  }

  function buildMusicModal(music) {
    console.log(music);
  }

  fetchMusic();
}

function openArtistModal(id) {
  const artistId = id;

  const artistModal = document.querySelector('.artist__modal');
  const artistModalContent = artistModal.querySelector('.artist__modal__content');

  const artistImg = artistModal.querySelector('.artist__details__img img');
  const artistName = artistModal.querySelector('.artist__details__info__name span');

  const topTracksList = albumModal.querySelector('.top__tracks__list');

  function fetchArtist() {
    fetchArtist.cache = fetchArtist.cache || {};

    if (fetchArtist.cache[artistId]) {
      buildArtistModal(fetchArtist.cache[artistId]);
    } else {
      const getArtistUrl = `http://localhost:8080/api/artists/${artistId}`;

      fetch(getArtistUrl)
        .then(response => {
          return response.json();
        })
        .then(artist => {
          fetchArtist.cache[artistId] = artist;
          buildArtistModal(artist);
        })
        .catch(error => {
          console.error(`Error fetching artist ${artistId}:`, error);
        });
    }
  }

  function buildArtistModal(artist) {
    artistImg.src = `/static/files?file=${artist.profile_img}`;
    artistName.innerHTML = artist.name;

    topTracksList.innerHTML = '';

    for (const [index, track] of artist.popularTracks.entries()) {
      let trackItem = document.createElement('div');
      trackItem.className = 'top__tracks__item';

      trackItem.innerHTML = `
        <div class="top__tracks__item__img">
          <img src="/static/files?file=${track.cover}" alt=${track.title} loading="lazy" />
        </div>
        <div class="top__tracks__item__info">
          <span>${index}. ${track.title}</span>
        </div>
      `;

      tracksList.appendChild(trackItem);
    }

    artistModal.style['z-index'] = '100';
    artistModalContent.classList.add('open');
  }

  fetchArtist();
}

const convertMonthToString = month => {
  // prettier-ignore
  switch (month) {
    case 0: return 'Jan';
    case 1: return 'Feb';
    case 2: return 'Mar';
    case 3: return 'Apr';
    case 4: return 'May';
    case 5: return 'Jun';
    case 6: return 'Jul';
    case 7: return 'Aug';
    case 8: return 'Sep';
    case 9: return 'Oct';
    case 10: return 'Nov';
    case 11: return 'Dec';
    default: return '';
  }
};

const getMusicDuration = durationInSeconds => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  let secondsStr = seconds.toString();
  if (secondsStr.length == 1) {
    secondsStr = `0${secondsStr}`;
  }

  return `${minutes}:${secondsStr}`;
};
