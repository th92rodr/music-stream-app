import 'dotenv/config';

import { AlbumsTable, ArtistsTable, MusicsTable, Genre } from '@constants/index';
import { database } from '@database/index';
import Album from '@entities/Album';
import Artist from '@entities/Artist';
import Music from '@entities/Music';
import { idProvider } from '@providers/index';
import { albumsRepository, artistsRepository, musicsRepository } from '@repositories/index';

export async function seed(deleteData: boolean): Promise<void> {
  if (deleteData) {
    const dbConnection = database.getConnection();

    await dbConnection(MusicsTable).del();
    await dbConnection(AlbumsTable).del();
    await dbConnection(ArtistsTable).del();
  }

  async function amonAmarth() {
    const amonAmarth = new Artist({
      id: idProvider.generate(),
      name: 'Amon Amarth',
      country: 'Sweden',
      foundationDate: new Date(1992, 0),
      members: ['Olavi Mikkonen', 'Johan Hegg', 'Ted Lundström', 'Johan Söderberg', 'Jocke Wallgren'],
      description: `Amon Amarth is a Swedish melodic death metal band from Tumba, formed in 1992. The band takes its name from the Sindarin name of Mount Doom, a volcano in J. R. R. Tolkien′s Middle-earth.\nTheir lyrics mostly deal with Viking mythology and history, and so they have been linked with Viking metal, although the band themselves prefer to be referred to as melodic death metal.\nThe band is composed of lead guitarist Olavi Mikkonen, vocalist Johan Hegg, bassist Ted Lundström, rhythm guitarist Johan Söderberg, and drummer Jocke Wallgren.\nAmon Amarth has released eleven studio albums, one compilation album, one EP, one video album, and ten music videos. Their first studio album, Once Sent from the Golden Hall, debuted in 1998. Five more studio releases followed, before the band saw its breakthrough with the 2008 album Twilight of the Thunder God, which debuted at No. 10 on the Swedish album charts and No. 50 on the US Billboard 200. Four more albums, Surtur Rising, Deceiver of the Gods, Jomsviking, and Berserker followed in 2011, 2013, 2016, and 2019 respectively.`,
      genre: Genre['Death Metal'],
      photos: ['amon-amarth/artist_profile_amon-amarth.jpg', 'amon-amarth/artist_full_amon-amarth.jpg', 'amon-amarth/artist_vertical_amon-amarth.jpg'],
      facebookUrl: 'https://www.facebook.com/amonamarth',
      twitterUrl: 'https://twitter.com/AmonAmarthband',
      instagramUrl: 'https://www.instagram.com/amonamarth/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Amon_Amarth',
      favorites: 0,
      followers: 0,
    });

    const twilightOfTheThunderGod = new Album({
      id: idProvider.generate(),
      name: 'Twilight of the Thunder God',
      releaseDate: new Date(2008, 8),
      studio: 'Fascination Street Studio',
      producers: ['Jens Bogren'],
      cover: 'amon-amarth/album_cover_twilight-of-the-thunder-god.jpg',
      artistId: amonAmarth.id,
    });

    const surturRising = new Album({
      id: idProvider.generate(),
      name: 'Surtur Rising',
      releaseDate: new Date(2011, 2),
      studio: 'Fascination Street Studio',
      producers: ['Jens Bogren'],
      cover: 'amon-amarth/album_cover_surtur-rising.jpg',
      artistId: amonAmarth.id,
    });

    const deceiverOfTheGods = new Album({
      id: idProvider.generate(),
      name: 'Deceiver of the Gods',
      releaseDate: new Date(2013, 5),
      studio: 'Backstage Productions',
      producers: ['Andy Sneap'],
      cover: 'amon-amarth/album_cover_deceiver-of-the-gods.jpg',
      artistId: amonAmarth.id,
    });

    const jomsviking = new Album({
      id: idProvider.generate(),
      name: 'Jomsviking',
      releaseDate: new Date(2016, 2),
      studio: 'Backstage Productions',
      producers: ['Andy Sneap'],
      cover: 'amon-amarth/album_cover_jomsviking.jpg',
      artistId: amonAmarth.id,
    });

    const berserker = new Album({
      id: idProvider.generate(),
      name: 'Berserker',
      releaseDate: new Date(2019, 4),
      studio: 'Backstage Productions',
      producers: ['Jay Ruston'],
      cover: 'amon-amarth/album_cover_berserker.jpg',
      artistId: amonAmarth.id,
    });

    const withOdenOnOurSide = new Album({
      id: idProvider.generate(),
      name: 'With Oden On Our Side',
      releaseDate: new Date(2006, 8),
      studio: 'Fascination Street Studio',
      producers: ['Jens Bogren'],
      cover: 'amon-amarth/album_cover_with-oden-on-our-side.jpg',
      artistId: amonAmarth.id,
    });

    const fateOfNorns = new Album({
      id: idProvider.generate(),
      name: 'Fate of Norns',
      releaseDate: new Date(2004, 8),
      studio: 'Berno Studios',
      producers: ['Berno Paulsson'],
      cover: 'amon-amarth/album_cover_fate-of-norns.jpg',
      artistId: amonAmarth.id,
    });

    const versusTheWorld = new Album({
      id: idProvider.generate(),
      name: 'Versus the World',
      releaseDate: new Date(2002, 10),
      studio: 'Berno Studios',
      producers: ['Berno Paulsson'],
      cover: 'amon-amarth/album_cover_versus-the-world.jpg',
      artistId: amonAmarth.id,
    });

    const theCrusher = new Album({
      id: idProvider.generate(),
      name: 'The Crusher',
      releaseDate: new Date(2001, 4),
      studio: 'The Abyss',
      producers: ['Peter Tägtgren'],
      cover: 'amon-amarth/album_cover_the-crusher.jpg',
      artistId: amonAmarth.id,
    });

    const theAvenger = new Album({
      id: idProvider.generate(),
      name: 'The Avenger',
      releaseDate: new Date(1999, 8),
      studio: 'The Abyss',
      producers: ['Peter Tägtgren'],
      cover: 'amon-amarth/album_cover_the-avenger.jpeg',
      artistId: amonAmarth.id,
    });

    const onceSentFromTheGoldenHall = new Album({
      id: idProvider.generate(),
      name: 'Once Sent from the Golden Hall',
      releaseDate: new Date(1998, 1),
      studio: 'The Abyss',
      producers: ['Peter Tägtgren'],
      cover: 'amon-amarth/album_cover_once-sent-from-the-golden-hall.jpg',
      artistId: amonAmarth.id,
    });

    const twilightOfTheThunderGodTrack = new Music({
      id: idProvider.generate(),
      title: 'Twilight of the Thunder God',
      durationInSeconds: 248,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const freeWillSacrifice = new Music({
      id: idProvider.generate(),
      title: 'Free Will Sacrifice',
      durationInSeconds: 248,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const guardiansOfAsgaard = new Music({
      id: idProvider.generate(),
      title: 'Guardians of Asgaard',
      durationInSeconds: 263,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const whereIsYourGod = new Music({
      id: idProvider.generate(),
      title: 'Where Is Your God?',
      durationInSeconds: 191,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const varyagsOfMiklagaard = new Music({
      id: idProvider.generate(),
      title: 'Varyags of Miklagaard',
      durationInSeconds: 258,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const tatteredBannersAndBloodyFlags = new Music({
      id: idProvider.generate(),
      title: 'Tattered Banners and Bloody Flags',
      durationInSeconds: 270,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const noFearForTheSettingSun = new Music({
      id: idProvider.generate(),
      title: 'No Fear for the Setting Sun',
      durationInSeconds: 234,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const theHero = new Music({
      id: idProvider.generate(),
      title: 'The Hero',
      durationInSeconds: 242,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const liveForTheKill = new Music({
      id: idProvider.generate(),
      title: 'Live for the Kill',
      durationInSeconds: 250,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    const embraceOfTheEndlessOcean = new Music({
      id: idProvider.generate(),
      title: 'Embrace of the Endless Ocean',
      durationInSeconds: 404,
      file: '',
      composers: ['Johan Söderberg'],
      lyrics: '',
      albumId: twilightOfTheThunderGod.id,
      views: 0,
    });

    twilightOfTheThunderGod.setTracks([
      twilightOfTheThunderGodTrack,
      freeWillSacrifice,
      guardiansOfAsgaard,
      whereIsYourGod,
      varyagsOfMiklagaard,
      tatteredBannersAndBloodyFlags,
      noFearForTheSettingSun,
      theHero,
      liveForTheKill,
      embraceOfTheEndlessOcean,
    ]);

    amonAmarth.setAlbums([
      berserker,
      jomsviking,
      deceiverOfTheGods,
      surturRising,
      twilightOfTheThunderGod,
      withOdenOnOurSide,
      fateOfNorns,
      versusTheWorld,
      theCrusher,
      theAvenger,
      onceSentFromTheGoldenHall,
    ]);

    await artistsRepository.store(amonAmarth);

    await albumsRepository.store(berserker);
    await albumsRepository.store(jomsviking);
    await albumsRepository.store(deceiverOfTheGods);
    await albumsRepository.store(surturRising);
    await albumsRepository.store(twilightOfTheThunderGod);
    await albumsRepository.store(withOdenOnOurSide);
    await albumsRepository.store(fateOfNorns);
    await albumsRepository.store(versusTheWorld);
    await albumsRepository.store(theCrusher);
    await albumsRepository.store(theAvenger);
    await albumsRepository.store(onceSentFromTheGoldenHall);

    await musicsRepository.store(twilightOfTheThunderGodTrack);
    await musicsRepository.store(freeWillSacrifice);
    await musicsRepository.store(guardiansOfAsgaard);
    await musicsRepository.store(whereIsYourGod);
    await musicsRepository.store(varyagsOfMiklagaard);
    await musicsRepository.store(tatteredBannersAndBloodyFlags);
    await musicsRepository.store(noFearForTheSettingSun);
    await musicsRepository.store(theHero);
    await musicsRepository.store(liveForTheKill);
    await musicsRepository.store(embraceOfTheEndlessOcean);
  }

  async function ironMaiden() {
    const ironMaiden = new Artist({
      id: idProvider.generate(),
      name: 'Iron Maiden',
      country: 'England',
      foundationDate: new Date(1975, 0),
      members: ['Steve Harris', 'Dave Murray', 'Adrian Smith', 'Bruce Dickinson', 'Nicko McBrain', 'Janick Gers'],
      description: `Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. The band's discography has grown to thirty-nine albums, including sixteen studio albums, twelve live albums, four EPs, and seven compilations.`,
      genre: Genre['Heavy Metal'],
      photos: ['iron-maiden/artist_profile_iron-maiden.jpg', 'iron-maiden/artist_full_iron-maiden.jpeg', 'iron-maiden/artist_vertical_iron-maiden.jpg'],
      facebookUrl: 'https://www.facebook.com/ironmaiden',
      twitterUrl: 'https://twitter.com/ironmaiden',
      instagramUrl: 'https://www.instagram.com/ironmaiden/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Iron_Maiden',
      favorites: 0,
      followers: 0,
    });

    const ironMaidenAlbum = new Album({
      id: idProvider.generate(),
      name: 'Iron Maiden',
      releaseDate: new Date(1980, 3),
      studio: 'Kingsway',
      producers: ['Wil Malone'],
      cover: 'iron-maiden/album_cover_iron-maiden.jpg',
      artistId: ironMaiden.id,
    });

    const theNumberOfTheBeast = new Album({
      id: idProvider.generate(),
      name: 'The Number of the Beast',
      releaseDate: new Date(1982, 2),
      studio: 'Battery',
      producers: ['Martin Birch'],
      cover: 'iron-maiden/album_cover_the-number-of-the-beast.jpg',
      artistId: ironMaiden.id,
    });

    const fearOfTheDark = new Album({
      id: idProvider.generate(),
      name: 'Fear of the Dark',
      releaseDate: new Date(1992, 4),
      studio: 'Barnyard',
      producers: ['Martin Birch', 'Steve Harris'],
      cover: 'iron-maiden/album_cover_fear-of-the-dark.jpg',
      artistId: ironMaiden.id,
    });

    const braveNewWorld = new Album({
      id: idProvider.generate(),
      name: 'Brave New World',
      releaseDate: new Date(2000, 4),
      studio: 'EMI, Portrait',
      producers: ['Kevin Shirley', 'Steve Harris'],
      cover: 'iron-maiden/album_cover_brave-new-world.jpg',
      artistId: ironMaiden.id,
    });

    const fearOfTheDarkTrack = new Music({
      id: idProvider.generate(),
      title: 'Fear of the Dark',
      durationInSeconds: 525,
      file: '',
      composers: ['Steve Harris'],
      lyrics: '',
      albumId: fearOfTheDark.id,
      views: 0,
    });

    const wickerMan = new Music({
      id: idProvider.generate(),
      title: 'The Wicker Man',
      durationInSeconds: 275,
      file: '',
      composers: ['Smith', 'Harris', 'Dickinson'],
      lyrics: '',
      albumId: braveNewWorld.id,
      views: 0,
    });

    const ghostNavigator = new Music({
      id: idProvider.generate(),
      title: 'Ghost of the Navigator',
      durationInSeconds: 410,
      file: '',
      composers: ['Gers', 'Dickinson', 'Harris'],
      lyrics: '',
      albumId: braveNewWorld.id,
      views: 0,
    });

    fearOfTheDark.setTracks([fearOfTheDarkTrack]);
    braveNewWorld.setTracks([wickerMan, ghostNavigator]);

    ironMaiden.setAlbums([ironMaidenAlbum, theNumberOfTheBeast, fearOfTheDark, braveNewWorld]);

    await artistsRepository.store(ironMaiden);

    await albumsRepository.store(ironMaidenAlbum);
    await albumsRepository.store(theNumberOfTheBeast);
    await albumsRepository.store(fearOfTheDark);
    await albumsRepository.store(braveNewWorld);

    await musicsRepository.store(fearOfTheDarkTrack);
    await musicsRepository.store(wickerMan);
    await musicsRepository.store(ghostNavigator);
  }

  async function sabaton() {
    const sabaton = new Artist({
      id: idProvider.generate(),
      name: 'Sabaton',
      country: 'Sweden',
      foundationDate: new Date(1999, 0),
      members: ['Joakim Brodén', 'Pär Sundström', 'Chris Rörland', 'Hannes Van Dahl', 'Tommy Johansson'],
      description: `In the two decades since their launch, Swedish metallers Sabaton have carved out a reputation as one of the hardest working bands in the business – gaining a legion of loyal fans across the globe, delivering nine highly-rated studio albums (including 5 gold and 2 platinum certified sellers), and scoring multiple industry award wins and nominations. Not to mention launching their own annual festival and cruise.\nCombining soaring power riffs with vocalist Joakim Brodén’s instantly-recognisable gruff baritone, the band refuses to be simply slotted into a genre. Fans need only know them as Sabaton: the heavy metal band that sings of real life wars and the people who played a part in them – of gruelling campaigns and dazzling acts of bravery, of magnificent victories and touching personal struggles – true stories more fantastic than any fiction.\nSabaton are perhaps best known for their electrifying live shows, combining accomplished musical performances and a finely-crafted stage show – including their full-sized tank drum-riser – with energy and laughter. The band has headlined as far afield as North America, Australia and Japan, and regularly fills arenas and takes top-billed slots at festivals across Europe. They are also a favourite support act for metal titans Iron Maiden and Scorpions. Sabaton’s live show has won top industry accolades in Germany (Metal Hammer Award), Sweden (Bandit Rock Award), as well as being nominated for two Metal Hammer Golden Gods awards in the UK.`,
      genre: Genre['Power Metal'],
      photos: ['sabaton/artist_profile_sabaton.jpg', 'sabaton/artist_full_sabaton.jpg', 'sabaton/artist_vertical_sabaton.jpg'],
      facebookUrl: 'https://www.facebook.com/sabaton',
      twitterUrl: 'https://twitter.com/sabaton',
      instagramUrl: 'https://www.instagram.com/sabatonofficial/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Sabaton_(band)',
      favorites: 0,
      followers: 0,
    });

    const theArtOfWar = new Album({
      id: idProvider.generate(),
      name: 'The Art of War',
      releaseDate: new Date(2008, 4),
      studio: 'The Abyss Studios',
      producers: ['Tommy Tägtgren', 'Peter Tägtgren'],
      cover: 'sabaton/album_cover_the-art-of-war.jpg',
      artistId: sabaton.id,
    });

    const heroes = new Album({
      id: idProvider.generate(),
      name: 'Heroes',
      releaseDate: new Date(2014, 4),
      studio: 'The Abyss Studios',
      producers: ['Peter Tägtgren'],
      cover: 'sabaton/album_cover_heroes.jpg',
      artistId: sabaton.id,
    });

    const theLastStand = new Album({
      id: idProvider.generate(),
      name: 'The Last Stand',
      releaseDate: new Date(2016, 7),
      studio: 'The Abyss Studios',
      producers: ['Peter Tägtgren'],
      cover: 'sabaton/album_cover_the-last-stand.jpg',
      artistId: sabaton.id,
    });

    const theGreatWar = new Album({
      id: idProvider.generate(),
      name: 'The Great War',
      releaseDate: new Date(2019, 6),
      studio: 'The Abyss Studios',
      producers: ['Tommy Tägtgren', 'Peter Tägtgren'],
      cover: 'sabaton/album_cover_the-great-war.jpg',
      artistId: sabaton.id,
    });

    const priceOfAMile = new Music({
      id: idProvider.generate(),
      title: 'Price of a Mile',
      durationInSeconds: 355,
      file: 'sabaton/music_the-price-of-a-mile.mp3',
      composers: ['Joakim Brodén'],
      lyrics: '',
      albumId: theArtOfWar.id,
      views: 0,
    });

    theArtOfWar.setTracks([priceOfAMile]);

    sabaton.setAlbums([theArtOfWar, heroes, theLastStand, theGreatWar]);

    await artistsRepository.store(sabaton);

    await albumsRepository.store(theArtOfWar);
    await albumsRepository.store(heroes);
    await albumsRepository.store(theLastStand);
    await albumsRepository.store(theGreatWar);

    await musicsRepository.store(priceOfAMile);
  }

  async function kreator() {
    const kreator = new Artist({
      id: idProvider.generate(),
      name: 'Kreator',
      country: 'Germany',
      foundationDate: new Date(1982, 0),
      members: ['Miland Mille Petrozza', 'Jürgen Ventor Reil', 'Sami Yli-Sirniö', 'Frédéric Leclercq'],
      description: `Kreator is a German thrash metal band from Essen, formed in 1982. Their current lineup consists of lead vocalist and rhythm guitarist Miland "Mille" Petrozza, drummer Jürgen "Ventor" Reil, lead guitarist Sami Yli-Sirniö, and bassist Frédéric Leclercq. The band's lineup has changed multiple times over its 39-year career, most noticeably with their bassists and lead guitarists. Petrozza and Reil are the only two original members left in Kreator, though the latter had been out of the band from 1994 to 1996. Yli-Sirniö has been the lead guitarist of Kreator since 2001, while Leclercq joined in 2019 as the replacement of Christian "Speesy" Giesler, who had been a member of the band since 1994.`,
      genre: Genre['Thrash Metal'],
      photos: ['kreator/artist_profile_kreator.jpg', 'kreator/artist_full_kreator.jpg', 'kreator/artist_vertical_kreator.jpg'],
      facebookUrl: 'https://www.facebook.com/KreatorOfficial/',
      twitterUrl: 'https://twitter.com/kreator?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
      instagramUrl: 'https://www.instagram.com/kreatorofficial/?hl=en',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Kreator',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(kreator);
  }

  async function avantasia() {
    const avantasia = new Artist({
      id: idProvider.generate(),
      name: 'Avantasia',
      country: 'Germany',
      foundationDate: new Date(1999, 0),
      members: ['Tobias Sammet', 'Sascha Paeth', 'Miro', 'Felix Bohnke'],
      description: `Avantasia is a German supergroup metal opera project created by Tobias Sammet, vocalist of the band Edguy. It has been characterized as a rock opera, as it features the contributions of various vocalists and musicians and it consists of concept albums.\nConceived in 1999 as studio-only, two-album project, Avantasia has since released six other studio albums and has toured the world multiple times. It can be divided into four periods of activity. The first, 1999–2002, saw the release of a self-titled single and the full-length albums The Metal Opera and The Metal Opera Part II. The second, 2006–2011, consists of the EPs Lost in Space Part I & II and The Wicked Trilogy, composed of the albums The Scarecrow, The Wicked Symphony and Angel of Babylon. The third, 2013–2016, includes the albums The Mystery of Time and Ghostlights. The fourth period began with the release of the Moonglow album in 2019.`,
      genre: Genre['Power Metal'],
      photos: ['avantasia/artist_profile_avantasia.jpg', 'avantasia/artist_full_avantasia.jpg', 'avantasia/artist_vertical_avantasia.jpg'],
      facebookUrl: 'https://www.facebook.com/avantasia/',
      twitterUrl: 'https://twitter.com/_avantasia?lang=en',
      instagramUrl: 'https://www.instagram.com/tobiassammetofficial/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Avantasia',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(avantasia);
  }

  async function slayer() {
    const slayer = new Artist({
      id: idProvider.generate(),
      name: 'Slayer',
      country: 'USA',
      foundationDate: new Date(1981, 0),
      members: ['Kerry King', 'Tom Araya', 'Jeff Hanneman', 'Dave Lombardo', 'Paul Bostaph', 'Jon Dette', 'Gary Holt'],
      description: `Slayer was an American thrash metal band from Huntington Park, California. The band was formed in 1981 by guitarists Kerry King and Jeff Hanneman, drummer Dave Lombardo, and bassist and vocalist Tom Araya. Slayer's fast and aggressive musical style made them one of the "big four" bands of thrash metal, alongside Metallica, Megadeth, and Anthrax.`,
      genre: Genre['Thrash Metal'],
      photos: ['slayer/artist_profile_slayer.jpg', 'slayer/artist_full_slayer.jpg', 'slayer/artist_vertical_slayer.jpg'],
      facebookUrl: 'https://www.facebook.com/slayer',
      twitterUrl: 'https://twitter.com/Slayer',
      instagramUrl: 'https://www.instagram.com/slayerbandofficial/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Slayer',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(slayer);
  }

  async function korpiklaani() {
    const korpiklaani = new Artist({
      id: idProvider.generate(),
      name: 'Korpiklaani',
      country: 'Finland',
      foundationDate: new Date(1993, 0),
      members: ['Jonne Järvelä', 'Kalle "Cane" Savijärvi', 'Jarkko Aaltonen', 'Tuomas Rounakari', 'Sami Perttula', 'Samuli Mikkonen'],
      description: `The foundation of Korpiklaani in 2003 in Lahti, Finland brought the traditional folk music back to life. No one could have foreseen that such a large audience would be interested in Finnish and English mythological texts.`,
      genre: Genre['Folk Metal'],
      photos: ['korpiklaani/artist_profile_korpiklaani.jpg', 'korpiklaani/artist_full_korpiklaani.jpg', 'korpiklaani/artist_vertical_korpiklaani.jpg'],
      facebookUrl: 'https://www.facebook.com/korpiklaani',
      twitterUrl: 'https://twitter.com/_korpiklaani',
      instagramUrl: 'https://www.instagram.com/official_korpiklaani/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Korpiklaani',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(korpiklaani);
  }

  async function blackSabbath() {
    const blackSabbath = new Artist({
      id: idProvider.generate(),
      name: 'Black Sabbath',
      country: 'England',
      foundationDate: new Date(1968, 0),
      members: ['Tony Iommi', 'Bill Ward', 'Terence Geezer Butler', 'Ozzy Osbourne', 'Ronnie James Dio', 'Geoff Nicholls'],
      description: `Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. They are often cited as pioneers of heavy metal music. The band helped define the genre with releases such as Black Sabbath (1970), Paranoid (1970), and Master of Reality (1971). The band had multiple line-up changes following Osbourne's departure in 1979, with Iommi being the only constant member throughout its history.`,
      genre: Genre['Heavy Metal'],
      photos: ['black-sabbath/artist_profile_black-sabbath.jpg', 'black-sabbath/artist_full_black-sabbath.jpg', 'black-sabbath/artist_vertical_black-sabbath.jpg'],
      facebookUrl: 'https://www.facebook.com/BlackSabbath',
      twitterUrl: 'https://twitter.com/BlackSabbath',
      instagramUrl: 'https://www.instagram.com/blacksabbath/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Black_Sabbath',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(blackSabbath);
  }

  async function alestorm() {
    const alestorm = new Artist({
      id: idProvider.generate(),
      name: 'Alestorm',
      country: 'Scotland',
      foundationDate: new Date(2004, 0),
      members: ['Christopher Bowes', 'Gareth Murdock', 'Peter Alcorn', 'Elliot Vernon', 'Máté Bodor'],
      description: `Alestorm is a Scottish heavy metal band formed in Perth, Scotland. Their music is characterised by a pirate theme, and as a result, they have been dubbed a "pirate metal" band by many critics and their fanbase. The group currently consists of lead vocalist Christopher Bowes, who also plays the keytar, guitarist Máté Bodor, bassist Gareth Murdock, drummer Peter Alcorn, and keyboardist Elliot Vernon, who also provides screamed vocals.\nAfter signing to Napalm Records in 2007, their debut album Captain Morgan's Revenge, was released on 25 January 2008. Black Sails at Midnight, the band's second album, was released on 27 May 2009. The band's third album, Back Through Time, was released on 3 June 2011. The fourth album from the band, Sunset on the Golden Age, was released in August 2014. Their fifth album No Grave But the Sea was released on 26 May 2017. Their sixth and latest album, Curse of the Crystal Coconut, was released on 29 May 2020. The band has also released one live album and five EPs. The lead vocalist Christopher Bowes provides the announcer voice for the Pirate team in the video game "Pirates, Vikings and Knights II".`,
      genre: Genre['Power Metal'],
      photos: ['alestorm/artist_profile_alestorm.jpg', 'alestorm/artist_full_alestorm.jpg', 'alestorm/artist_vertical_alestorm.jpg'],
      facebookUrl: 'https://www.facebook.com/alestormband',
      twitterUrl: 'https://twitter.com/alestormband',
      instagramUrl: 'https://www.instagram.com/alestormofficial/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Alestorm',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(alestorm);
  }

  async function metallica() {
    const metallica = new Artist({
      id: idProvider.generate(),
      name: 'Metallica',
      country: 'USA',
      foundationDate: new Date(1981, 0),
      members: ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
      description: `Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer.`,
      genre: Genre['Heavy Metal'],
      photos: ['metallica/artist_profile_metallica.jpg', 'metallica/artist_full_metallica.jpg', 'metallica/artist_vertical_metallica.jpg'],
      facebookUrl: 'https://www.facebook.com/Metallica',
      twitterUrl: 'https://twitter.com/Metallica',
      instagramUrl: 'https://www.instagram.com/metallica/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Metallica',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(metallica);
  }

  async function blindGuardian() {
    const blindGuardian = new Artist({
      id: idProvider.generate(),
      name: 'Blind Guardian',
      country: 'Germany',
      foundationDate: new Date(1984, 0),
      members: ['Hansi Kürsch', 'André Olbrich', 'Marcus Siepen', 'Frederik Ehmke'],
      description: `Blind Guardian is a German power metal band formed in 1984 in Krefeld, West Germany. They are often credited as one of the seminal and most influential bands in the power metal and speed metal subgenres. Nine musicians have been a part of the band's line-up in its history, which has consisted of singer Hansi Kürsch, guitarists André Olbrich and Marcus Siepen, and drummer Frederik Ehmke since 2005.`,
      genre: Genre['Power Metal'],
      photos: ['blind-guardian/artist_profile_blind-guardian.jpg', 'blind-guardian/artist_full_blind-guardian.jpg', 'blind-guardian/artist_vertical_blind-guardian.jpg'],
      facebookUrl: 'https://www.facebook.com/blindguardian/',
      twitterUrl: 'https://twitter.com/blind_guardian',
      instagramUrl: 'https://www.instagram.com/blindguardian/?hl=en',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Blind_Guardian',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(blindGuardian);
  }

  async function sonataArctica() {
    const sonataArctica = new Artist({
      id: idProvider.generate(),
      name: 'Sonata Arctica',
      country: 'Finland',
      foundationDate: new Date(1995, 0),
      members: ['Tommy Portimo', 'Tony Kakko', 'Henrik Klingenberg', 'Elias Viljanen', 'Pasi Kauppinen'],
      description: `Sonata Arctica is a Finnish power metal band from the town of Kemi, Finland. Created as a hard rock band named Tricky Beans, they later changed to Tricky Means and finally to Sonata Arctica, when they shifted to power metal.`,
      genre: Genre['Power Metal'],
      photos: ['sonata-arctica/artist_profile_sonata-arctica.jpg', 'sonata-arctica/artist_full_sonata-arctica.jpg', 'sonata-arctica/artist_vertical_sonata-arctica.jpg'],
      facebookUrl: 'https://www.facebook.com/sonataarctica',
      twitterUrl: 'https://twitter.com/SonataArctica',
      instagramUrl: 'https://www.instagram.com/sonataarcticaofficial/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Sonata_Arctica',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(sonataArctica);
  }

  async function blackLabelSociety() {
    const blackLabelSociety = new Artist({
      id: idProvider.generate(),
      name: 'Black Label Society',
      country: 'USA',
      foundationDate: new Date(1998, 0),
      members: ['Zakk Wylde', 'John DeServio', 'Dario Lorina', 'Jeff Fabb'],
      description: `Black Label Society is an American heavy metal band from Los Angeles, California, formed in 1998 by guitarist/singer Zakk Wylde. To date, the band has released ten studio albums, two live albums, two compilation albums, one EP, and three video albums.`,
      genre: Genre['Heavy Metal'],
      photos: ['black-label-society/artist_profile_black-label-society.jpg', 'black-label-society/artist_full_black-label-society.jpg', 'black-label-society/artist_vertical_black-label-society.jpg'],
      facebookUrl: 'https://www.facebook.com/blacklabelsociety',
      twitterUrl: 'https://twitter.com/ZakkWyldeBLS',
      instagramUrl: 'https://www.instagram.com/zakkwyldebls/',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/Black_Label_Society',
      favorites: 0,
      followers: 0,
    });

    await artistsRepository.store(blackLabelSociety);
  }

  await amonAmarth();
  await ironMaiden();
  await sabaton();
  await kreator();
  await avantasia();
  await slayer();
  await korpiklaani();
  await blackSabbath();
  await alestorm();
  await metallica();
  await blindGuardian();
  await sonataArctica();
  await blackLabelSociety();

  console.log('ok');
}

seed(true);
