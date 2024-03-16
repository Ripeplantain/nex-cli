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
