import ora from 'ora';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import { sqliteTemplate, sqlTemplate } from '../constants/sequelizeTemplate.js';
import { doesProjectExist } from './file.js';

const execAsync = promisify(exec);

const addSqlConfig = async directory => {
  const isTypescript = doesProjectExist(`${directory}/tsconfig.json`);

  if (!doesProjectExist(directory)) {
    return;
  }

  fs.writeFileSync(
    `${directory}/src/helper/database.${isTypescript ? 'ts' : 'js'}`,
    sqlTemplate
  );

  const appData = fs.readFileSync(
    `${directory}/src/app.${isTypescript ? 'ts' : 'js'}`,
    'utf-8'
  );

  const appDataArray = appData.split('\n');

  appDataArray.splice(
    6,
    0,
    `import { connectDatabase } from './helper/database.js';`
  );
  appDataArray.splice(27, 0, `connectDatabase();`);
  const updatedAppData = appDataArray.join('\n');

  fs.writeFileSync(
    `${directory}/src/app.${isTypescript ? 'ts' : 'js'}`,
    updatedAppData
  );
};

const addSequlizeConfig = async directory => {
  const isTypescript = doesProjectExist(`${directory}/tsconfig.json`);

  if (!doesProjectExist(directory)) {
    return;
  }

  fs.writeFileSync(
    `${directory}/src/helper/database.${isTypescript ? 'ts' : 'js'}`,
    sqliteTemplate
  );

  const appData = fs.readFileSync(
    `${directory}/src/app.${isTypescript ? 'ts' : 'js'}`,
    'utf-8'
  );

  const appDataArray = appData.split('\n');

  appDataArray.splice(
    6,
    0,
    `import { connectDatabase } from './helper/database.js';`
  );
  appDataArray.splice(27, 0, `connectDatabase();`);
  const updatedAppData = appDataArray.join('\n');

  fs.writeFileSync(
    `${directory}/src/app.${isTypescript ? 'ts' : 'js'}`,
    updatedAppData
  );
};

const sqlIntegration = async directory => {
  const spinner = ora('Setting up Sequelize').start();
  try {
    await execAsync(`cd ${directory} && npm install sequelize mysql2 --save`);
    spinner.succeed('Sequelize setup completed successfully! 🎉');
    await addSqlConfig(directory);
  } catch (error) {
    console.error(error.message);
  }
};

const postgresIntegration = async directory => {
  const spinner = ora('Setting up Sequelize').start();
  try {
    await execAsync(`cd ${directory} && npm install sequelize pg --save`);
    spinner.succeed('Sequelize setup completed successfully! 🎉');
    await addSqlConfig(directory);
  } catch (error) {
    console.error(error.message);
  }
};

const mssqlIntegration = async directory => {
  const spinner = ora('Setting up Sequelize').start();
  try {
    await execAsync(`cd ${directory} && npm install sequelize tedious --save`);
    spinner.succeed('Sequelize setup completed successfully! 🎉');
    await addSqlConfig(directory);
  } catch (error) {
    console.error(error.message);
  }
};

const sqliteIntegration = async directory => {
  const spinner = ora('Setting up Sequelize').start();
  try {
    await execAsync(`cd ${directory} && npm install sequelize sqlite3 --save`);
    spinner.succeed('Sequelize setup completed successfully! 🎉');
    await addSequlizeConfig(directory);
  } catch (error) {
    console.error(error.message);
  }
};

const handleDatabaseCreation = async (databaseType, directory) => {
  switch (databaseType) {
    case 'sqlite':
      sqliteIntegration(directory);
      break;
    case 'mysql':
      sqlIntegration(directory);
      break;
    case 'postgres':
      postgresIntegration(directory);
      break;
    case 'mssql':
      mssqlIntegration(directory);
      break;
    default:
      console.log('Unknown database type');
  }
};

export default handleDatabaseCreation;
