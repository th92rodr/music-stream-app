import { Request, Response } from 'express';

import { translateAlbum } from './translators';
import { HttpStatusCode } from '@constants/index';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';

export default class AlbumsController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const album = await this.musicsIntegration.getAlbum({ id });

      return response.status(HttpStatusCode.OK).render('album', {
        album: translateAlbum(album),
      });
    } catch (error) {
      return response.status(HttpStatusCode.NOT_FOUND).render('404');
    }
  }
}
