import ora from 'ora';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import { sqliteTemplate, sqlTemplate } from '../constants/sequelizeTemplate.js';
import {
  drizzleSqlTemplate,
  drizzlePostgresTemplate,
} from '../constants/drizzleTemplate.js';
import mongooseTemplate from '../constants/mongooseTemplate.js';
import { doesProjectExist } from './file.js';

const execAsync = promisify(exec);

const drizzlePostgreConfig = async directory => {
  const isTypescript = doesProjectExist(`${directory}/tsconfig.json`);
  const spinner = ora('Setting up Drizzle').start();
  try {
    await execAsync(`cd ${directory} && npm install drizzle-orm pg --save`);
    await execAsync(`cd ${directory} && npx drizzle-kit`);
    if (isTypescript) {
      await execAsync(`cd ${directory} && npm install @types/pg --save-dev`);
    }
    spinner.succeed('Drizzle setup completed successfully! 🎉');

    fs.writeFileSync(
      `${directory}/src/helper/database.${isTypescript ? 'ts' : 'js'}`,
      drizzlePostgresTemplate
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
  } catch (error) {
    console.error(error.message);
  }
};

const drizzleSqlConfig = async directory => {
  const isTypescript = doesProjectExist(`${directory}/tsconfig.json`);
  const spinner = ora('Setting up Drizzle').start();
  try {
    await execAsync(`cd ${directory} && npm install drizzle-orm mysql2 --save`);
    await execAsync(`cd ${directory} && npx drizzle-kit`);
    spinner.succeed('Drizzle setup completed successfully! 🎉');

    fs.writeFileSync(
      `${directory}/src/helper/database.${isTypescript ? 'ts' : 'js'}`,
      drizzleSqlTemplate
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
  } catch (error) {
    console.error(error.message);
  }
};

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

const addMongooseConfig = async directory => {
  const isTypescript = doesProjectExist(`${directory}/tsconfig.json`);

  if (!doesProjectExist(directory)) {
    return;
  }

  fs.writeFileSync(
    `${directory}/src/helper/database.${isTypescript ? 'ts' : 'js'}`,
    mongooseTemplate
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
    await execAsync(`cd ${directory} && touch database.sqlite`);
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

export const mongooseIntegration = async directory => {
  const spinner = ora('Setting up Mongoose').start();
  try {
    await execAsync(`cd ${directory} && npm install mongoose --save`);
    spinner.succeed('Mongoose setup completed successfully! 🎉');
    await addMongooseConfig(directory);
  } catch (error) {
    console.error(error.message);
  }
};

export const drizzleIntegration = async (database, directory) => {
  switch (database) {
    case 'mysql':
      drizzleSqlConfig(directory);
      break;
    case 'postgres':
      drizzlePostgreConfig(directory);
      break;
    default:
      console.log('Unknown database type');
  }
};

export default handleDatabaseCreation;
