#!/usr/bin/env node

import { program } from 'commander';

program
  .version('0.0.1')
  .description('Nex-cli is the next generation of cli tools');

program
  .command('create <project-name>')
  .description('Create a new project')
  .action(name => {
    console.log('Creating a new project:', name);
  });

program.parse(process.argv);
