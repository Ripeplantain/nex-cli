import fs from 'fs-extra';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

import { initializeGitRepository, addGitIgnore } from './git.js';
import addEsLint from './lint.js';
import {
  inquireAddGit,
  inquireLinting,
  inquireDatabase,
  inquireDatabaseType,
} from './prompt.js';
import tsConfig from '../constants/tsConfig.js';
import handleDatabaseCreation from './database.js';

const fileName = fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

export default function generateExpressProject(projectName) {
  const templateDir = path.join(dirname, '..', 'templates', 'express-with-ejs');
  const targetDir = path.resolve(process.cwd(), projectName);

  fs.copySync(templateDir, targetDir);

  const templateFiles = fs.readdirSync(targetDir);

  templateFiles.forEach(file => {
    const filePath = path.resolve(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const template = fs.readFileSync(filePath, 'utf-8');
      const content = ejs.render(template, { projectName });
      fs.writeFileSync(filePath, content);
    }
  });
}

export function generateJsBackendApi(projectName) {
  const templateDir = path.join(dirname, '..', 'templates', 'webapi-with-js');
  const targetDir = path.resolve(process.cwd(), projectName);

  fs.copySync(templateDir, targetDir);

  const templateFiles = fs.readdirSync(targetDir);

  templateFiles.forEach(file => {
    const filePath = path.resolve(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const template = fs.readFileSync(filePath, 'utf-8');
      const content = ejs.render(template, { projectName });
      fs.writeFileSync(filePath, content);
    }
  });
}

export function generateTsBackendApi(projectName) {
  const templateDir = path.join(dirname, '..', 'templates', 'webapi-with-ts');
  const targetDir = path.resolve(process.cwd(), projectName);

  fs.copySync(templateDir, targetDir);

  const templateFiles = fs.readdirSync(targetDir);

  templateFiles.forEach(file => {
    const filePath = path.resolve(targetDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile()) {
      const template = fs.readFileSync(filePath, 'utf-8');
      const content = ejs.render(template, { projectName });
      fs.writeFileSync(filePath, content);
    }
  });
}

const inititalizeTypescript = program => {
  fs.writeFileSync(`${program}/.prettierrc`, tsConfig);
};

export const handleProjectCreation = async (name, projectType) => {
  switch (projectType) {
    case 'express-with-ejs':
      await generateExpressProject(name);
      break;
    case 'webapi-with-js':
      await generateJsBackendApi(name);
      break;
    case 'webapi-with-ts':
      await generateTsBackendApi(name);
      await inititalizeTypescript(name);
      break;
    default:
      console.log('Unknown project type');
      return;
  }

  const gitAnswer = await inquireAddGit();
  if (gitAnswer.addGit) {
    await initializeGitRepository(name);
    await addGitIgnore(name);
  }

  const lintingAnswer = await inquireLinting();
  if (lintingAnswer.addLinting) {
    await addEsLint(name);
    console.log('Lint added successfully! 🎉');
  }

  const databaseAnswer = await inquireDatabase();
  if (databaseAnswer.database) {
    if (databaseAnswer.database !== 'mongoose') {
      const databaseTypeAnswer = await inquireDatabaseType();
      handleDatabaseCreation(databaseTypeAnswer.databaseType, name);
    }
  }
};
