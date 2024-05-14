import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);
const templateDir = path.resolve(dirname, '..', 'templates');

export default function getDirectoriesInTemplates() {
  return fs.readdirSync(templateDir);
}

export function doesProjectExist(filePath) {
  return fs.existsSync(filePath, { recursive: true });
}
