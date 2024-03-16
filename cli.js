#!/usr/bin/env node

import { program } from 'commander';
import generateExpressProject from './utils/generator.js';

program
  .version('0.0.1')
  .description('Nex-cli is the next generation of cli tools🤖👾🐱‍🏍');

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(name => {
    console.log('Creating a new project:', name, '🚀');
    generateExpressProject(name);
  });

program.parse(process.argv);
