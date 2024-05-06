import inquirer from 'inquirer';
import getDirectoriesInTemplates from './file.js';

export default function inquireProjectTypePrompt() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'What type of project would you like to create?',
      choices: getDirectoriesInTemplates(),
    },
  ]);
}

export function inquireAddGit() {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'addGit',
      message: 'Would you like to add a git repository?',
      default: true,
    },
  ]);
}

export function inquireLinting() {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'addLinting',
      message: 'Would you like to add linting?',
      default: true,
    },
  ]);
}
