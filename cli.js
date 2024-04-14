#!/usr/bin/env node

import { program } from 'commander';
import generateExpressProject from './utils/generator.js';
import inquireProjectTypePrompt, {
  inquireAddGit,
  inquireLinting,
} from './utils/prompt.js';
import { initializeGitRepository, addGitIgnore } from './utils/git.js';
import addEsLint from './utils/lint.js';
import addModel from './utils/model.js';
import addController from './utils/controller.js';
import addRoute from './utils/route.js';
import addService from './utils/service.js';

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
          inquireAddGit().then(gitAnswer => {
            if (gitAnswer.addGit) {
              initializeGitRepository(name);
              addGitIgnore(name);
            }
            inquireLinting().then(lintingAnswer => {
              if (lintingAnswer.addLinting) {
                addEsLint(name);
                console.log('Lint added successfully! 🎉');
              }
            });
          });
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

program
  .command('add:model <model-name>')
  .description('Add a new model to the project')
  .action(name => {
    addModel(name);
  });

program
  .command('add:controller <controller-name>')
  .description('Add a new controller to the project')
  .action(name => {
    addController(name);
  });

program
  .command('add:route <route-name>')
  .description('Add a new route to the project')
  .action(name => {
    addRoute(name);
  });

program
  .command('add:service <service-name>')
  .description('Add a new service to the project')
  .action(name => {
    addService(name);
  });

program.parse(process.argv);
