import { exec } from 'child_process';
import fs from 'fs';
import ora from 'ora';
import { promisify } from 'util';
import esLintConfig from '../constants/eslintConfig.js';
import prettierConfig from '../constants/prettierConfig.js';

const execAsync = promisify(exec);

function addEsLintConfig(directory) {
  fs.writeFileSync(`${directory}/.eslintrc.cjs`, esLintConfig);
}

function addPrettierConfig(directory) {
  fs.writeFileSync(`${directory}/.prettierrc`, prettierConfig);
}

async function addPrettier(directory) {
  const spinner = ora('Installing Prettier and plugins').start();
  try {
    await execAsync(
      `cd ${directory} && npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev`
    );
    spinner.succeed('Prettier and plugins installed successfully! 🎉');

    await addPrettierConfig(directory);

    console.log('Prettier added successfully! 🎉');
  } catch (error) {
    console.error(error.message);
  } finally {
    spinner.stop();
  }
}

export default async function addEsLint(directory) {
  const spinner = ora('Installing ESLint and plugins').start();
  try {
    await execAsync(
      `cd ${directory} && npm install eslint eslint-plugin-next --save-dev`
    );
    spinner.succeed('ESLint and plugins installed successfully! 🎉');
    const packageJsonPath = `${directory}/package.json`;
    const packageJsonData = await fs.promises.readFile(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonData);

    // Add or update lint script
    packageJson.scripts = {
      ...packageJson.scripts,
      lint: 'eslint .',
    };

    // write updated package.json file
    await fs.promises.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2)
    );

    await addEsLintConfig(directory);
    await addPrettier(directory);
  } catch (error) {
    console.error(error.message);
  } finally {
    spinner.stop();
  }
}
