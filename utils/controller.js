import fs from 'fs';
import {
  javascriptControllerTemplate,
  typescriptControllerTemplate,
} from '../constants/controllerTemplate.js';
import { doesProjectExist } from './file.js';

export default function addController(name) {
  const controllerName = name.charAt(0).toLowerCase() + name.slice(1);
  const controllerFunctionName = name.charAt(0).toUpperCase() + name.slice(1);
  const controllersDirectory = 'src/controllers';
  const isTypescript = doesProjectExist('tsconfig.json');

  try {
    if (!fs.existsSync(controllersDirectory)) {
      fs.mkdirSync(controllersDirectory, { recursive: true });
    }

    fs.writeFileSync(
      `${controllersDirectory}/${controllerName}.controller.${isTypescript ? 'ts' : 'js'}`,
      isTypescript
        ? typescriptControllerTemplate(controllerFunctionName)
        : javascriptControllerTemplate(controllerFunctionName)
    );
  } catch (error) {
    console.error('Error creating controller:', error.message);
  }
}
