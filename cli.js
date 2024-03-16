#!/usr/bin/env node

import { program } from 'commander';
import generateExpressProject from './utils/generator.js';
import inquireProjectTypePrompt from './utils/prompt.js';

program
  .version('0.0.1')
  .description('Nex-cli is the next generation of cli tools🤖👾🐱‍🏍');

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(name => {
    console.log('Creating a new project:', name, '🚀');
    inquireProjectTypePrompt().then(answers => {
      switch (answers.projectType) {
        case 'express-with-ejs':
          generateExpressProject(name, answers.projectType);
          break;
        case 'js-backend-api':
          console.log('Generating js-backend-api');
          break;
        case 'ts-backend-api':
          console.log('Generating ts-backend-api');
          break;
        default:
          console.log('Unknown project type');
      }
    });
  });

program.parse(process.argv);
