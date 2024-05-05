import path from 'path';
import fs from 'fs';

const dirname = path.dirname(new URL(import.meta.url).pathname);
const templateDir = path.resolve(dirname, '../templates');

export default function getDirectoriesInTemplates() {
  return fs.readdirSync(templateDir);
}

export function doesProjectExist(filePath) {
  return fs.existsSync(filePath, { recursive: true });
}
