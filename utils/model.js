import fs from 'fs';
import { doesProjectExist } from './file.js';
import {
  javascriptModelTemplate,
  typescriptModelTemplate,
} from '../constants/modelTemplate.js';

export default function addModel(name) {
  const modelName = name.charAt(0).toUpperCase() + name.slice(1);
  const modelsDirectory = 'src/models';
  const isTypescript = doesProjectExist('tsconfig.json');

  try {
    if (!fs.existsSync(modelsDirectory)) {
      fs.mkdirSync(modelsDirectory, { recursive: true });
    }

    fs.writeFileSync(
      `${modelsDirectory}/${modelName}.${isTypescript ? 'ts' : 'js'}`,
      isTypescript
        ? typescriptModelTemplate(modelName)
        : javascriptModelTemplate(modelName)
    );
  } catch (error) {
    console.error('Error creating model:', error.message);
  }
}
