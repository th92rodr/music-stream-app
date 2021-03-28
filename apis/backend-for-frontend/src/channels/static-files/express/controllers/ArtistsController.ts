import { Request, Response } from 'express';

import { translateArtist, translateArtists } from './translators';
import { HttpStatusCode } from '@constants/index';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class ArtistsController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async index(request: Request, response: Response) {
    try {
      const artists = await this.musicsIntegration.getArtists();

      return response.status(HttpStatusCode.OK).render('bands', {
        artists: translateArtists(artists),
      });
    } catch (error) {
      return response.status(HttpStatusCode.NOT_FOUND).render('404');
    }
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const artist = await this.musicsIntegration.getArtist({ id });

      return response.status(HttpStatusCode.OK).render('band', {
        artist: translateArtist(artist),
      });
    } catch (error) {
      return response.status(HttpStatusCode.NOT_FOUND).render('404');
    }
  }
}
