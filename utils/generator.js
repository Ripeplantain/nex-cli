import fs from 'fs-extra';
import ejs from 'ejs';
import path from 'path';

import { initializeGitRepository, addGitIgnore } from './git.js';
import addEsLint from './lint.js';
import { inquireAddGit, inquireLinting } from './prompt.js';
import tsConfig from '../constants/tsConfig.js';

const dirname = path.dirname(new URL(import.meta.url).pathname);

export default function generateExpressProject(projectName) {
  const templateDir = path.resolve(dirname, '../templates/express-with-ejs');
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
  const templateDir = path.resolve(dirname, '../templates/webapi-with-js');
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
  const templateDir = path.resolve(dirname, '../templates/webapi-with-ts');
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
  console.log('doing something');
  fs.writeFileSync(`${program}/.prettierrc`, tsConfig);
};

export const handleProjectCreation = async (name, projectType) => {
  switch (projectType) {
    case 'express-with-ejs':
      generateExpressProject(name);
      break;
    case 'webapi-with-js':
      generateJsBackendApi(name);
      break;
    case 'webapi-with-ts':
      generateTsBackendApi(name);
      inititalizeTypescript(name);
      break;
    default:
      console.log('Unknown project type');
      return;
  }

  const gitAnswer = await inquireAddGit();
  if (gitAnswer.addGit) {
    initializeGitRepository(name);
    addGitIgnore(name);
  }

  const lintingAnswer = await inquireLinting();
  if (lintingAnswer.addLinting) {
    addEsLint(name);
    console.log('Lint added successfully! 🎉');
  }
};
