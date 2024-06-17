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

export function inquireDatabase() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'database',
      message: 'What ORM would you like to use?',
      choices: ['sequelize', 'mongoose', 'prisma', 'drizzle'],
    },
  ]);
}

export function inquireDatabaseType() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'databaseType',
      message: 'What type of database would you like to use?',
      choices: ['mysql', 'postgres', 'sqlite', 'mssql'],
    },
  ]);
}

export function inquireGeneralDatabase() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'database',
      message: 'What type of database would you like to use?',
      choices: ['mysql', 'postgres', 'sqlite', 'mssql', 'mongodb'],
    },
  ]);
}

export function inquireDrizzleDatabase() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'database',
      message: 'What type of database would you like to use?',
      choices: ['mysql', 'postgres'],
    },
  ]);
}
