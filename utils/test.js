import fs from 'fs';
import { exec } from 'child_process';
import ora from 'ora';
import { unitTest, integrationTest } from '../constants/testTemplate.js';
import { doesProjectExist } from './file.js';
import updatePackageJson from './updatePackageJson.js';

export default function addTest() {
  const isTypescript = doesProjectExist('tsconfig.json');
  try {
    if (fs.existsSync('tests/integration') || fs.existsSync('tests/unit')) {
      console.log('Tests already exist in your project');
      return;
    }
    if (!fs.existsSync('tests')) {
      fs.mkdirSync('tests', { recursive: true });
      fs.mkdirSync('tests/integration', { recursive: true });
      fs.mkdirSync('tests/unit', { recursive: true });
    }
    if (isTypescript) {
      const spinner = ora('Installing Jest and Supertest').start();
      exec('npm install --save-dev jest ts-est supertest types/jest');
      fs.writeFileSync('tests/unit/index.test.ts', unitTest);
      fs.writeFileSync('tests/integration/index.test.ts', integrationTest);
      spinner.succeed('Jest and Supertest installed successfully! 🎉');
    } else {
      const spinner = ora('Installing Jest and Supertest').start();
      exec('npm install --save-dev jest supertest');
      fs.writeFileSync('tests/unit/index.test.js', unitTest);
      fs.writeFileSync('tests/integration/index.test.js', integrationTest);
      spinner.succeed('Jest and Supertest installed successfully! 🎉');
    }
    updatePackageJson({
      test: 'NODE_OPTIONS=--experimental-vm-modules jest --watch',
    });
  } catch (error) {
    console.error('Error creating test:', error.message);
  }
}
