const sqliteTemplate = `import { Sequelize } from 'sequelize';
import logger from '../helper/logger.js';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite',
    });

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};
`;

const sqlTemplate = `import { Sequelize } from 'sequelize';
import logger from '../helper/logger.js';

const sequelize = new Sequelize('enter database url');

export const connectDatabase = async () => {
    try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
}
`;

export { sqliteTemplate, sqlTemplate };
