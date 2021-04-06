import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import { getFileExtension } from '@utils/index';

export default class ImagesController {
  constructor() {}

  public async files(request: Request, response: Response) {
    const { file } = request.query;

    if (!file) {
      return response.end();
    }

    const filePath = path.resolve(Config.storage.path, file as string);

    response.writeHead(HttpStatusCode.OK, {
      'Content-Type': `image/${getFileExtension(filePath)}`,
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(response);
  }
}
