import { exec } from 'child_process';
import fs from 'fs';
import defaultGitIgnoreRules from '../constants/defaultIgnore.js';

export async function initializeGitRepository(directory) {
  try {
    exec(`cd ${directory} && git init`);
    console.log('Git repository initialized successfully! 🎉');
  } catch (error) {
    console.error(error.message);
  }
}

export function addGitIgnore(directory) {
  fs.writeFileSync(`${directory}/.gitignore`, defaultGitIgnoreRules);
  console.log('Added .gitignore file successfully! 🎉');
}
