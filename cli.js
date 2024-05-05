#!/usr/bin/env node

import { program } from 'commander';

import addModel from './utils/model.js';
import addController from './utils/controller.js';
import addRoute from './utils/route.js';
import addService from './utils/service.js';
import inquireProjectTypePrompt from './utils/prompt.js';
import { handleProjectCreation } from './utils/generator.js';

program
  .version('0.0.1')
  .description('Nex-cli is the next generation of cli tools🤖👾🐱‍🏍');

program
  .command('create')
  .argument('<name>')
  .description('Create a new project')
  .option('-e, --ejs', 'Create ejs project')
  .option('-j, --js', 'Create js backend project')
  .option('-t, --ts', 'Create typescript backend project')
  .action(async (name, options) => {
    if (options.ejs) {
      handleProjectCreation(name, 'express-with-ejs');
    } else if (options.js) {
      handleProjectCreation(name, 'webapi-with-ts');
    } else if (options.ts) {
      handleProjectCreation(name, 'webapi-with-js');
    } else {
      console.log('Creating a new project:', name, '🚀');
      const answers = await inquireProjectTypePrompt();
      await handleProjectCreation(name, answers.projectType);
    }
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
