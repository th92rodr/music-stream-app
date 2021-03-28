import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

import { translateMusic } from './translators';
import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import IMusicsIntegration from '@integrations/MusicsIntegration/interface';
import { getFileStatus } from '@utils/index';

export default class MusicsController {
  private musicsIntegration: IMusicsIntegration;

  constructor(musicsIntegration: IMusicsIntegration) {
    this.musicsIntegration = musicsIntegration;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const music = await this.musicsIntegration.getMusic({ id });

      return response.status(HttpStatusCode.OK).render('', {
        music: translateMusic(music),
      });
    } catch (error) {
      return response.status(HttpStatusCode.NOT_FOUND).render('404');
    }
  }

  public async stream(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const music = await this.musicsIntegration.getMusic({ id });

      const musicFile = path.resolve(Config.storage.path, music.file);

      const fileStatus = await getFileStatus(musicFile);

      response.writeHead(HttpStatusCode.OK, {
        'Content-Type': 'audio/mp3',
        'Content-Length': fileStatus.size,
      });

      const stream = fs.createReadStream(musicFile);
      stream.pipe(response);
    } catch (error) {
      response.end();
    }
  }
}
