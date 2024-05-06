import fs from 'fs';
import {
  jsMiddlewareTemplate,
  tsMiddlewareTemplate,
} from '../constants/middlewareTemplate.js';
import { doesProjectExist } from './file.js';

export default function addMiddleware(name) {
  const middlewareName = name.toLowerCase();
  const middlewareDirectory = 'src/middleware';
  const isTypescript = doesProjectExist('tsconfig.json');

  try {
    if (!fs.existsSync(middlewareDirectory)) {
      fs.mkdirSync(middlewareDirectory, {
        recursive: true,
      });
    }

    fs.writeFileSync(
      `${middlewareDirectory}/${middlewareName}.middleware.${isTypescript ? 'ts' : 'js'}`,
      isTypescript
        ? tsMiddlewareTemplate(middlewareName)
        : jsMiddlewareTemplate(middlewareName)
    );
  } catch (error) {
    console.error('Error creating middleware:', error.message);
  }
}
