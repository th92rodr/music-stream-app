import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

import Config from '@config/index';
import { HttpStatusCode } from '@constants/index';
import { getFileExtension, getFileStatus } from '@utils/index';

export default class MusicsController {
  constructor() {}

  public async stream(request: Request, response: Response) {
    const { file } = request.query;

    if (!file) {
      return response.end();
    }

    const filePath = path.resolve(Config.storage.path, file as string);

    const fileStatus = await getFileStatus(filePath);

    response.writeHead(HttpStatusCode.OK, {
      'Content-Type': `audio/${getFileExtension(filePath)}`,
      'Content-Length': fileStatus.size,
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(response);
  }
}
