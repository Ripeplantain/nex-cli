const mongooseTemplate = `import mongoose from 'mongoose';
import logger from '../helper/logger';
import config from 'config';

const databaseUrl = config.get('dbUrl');

export const connectDatabase = async () => {
    try {
        await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info('Connection has been established successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error.message);
    }
}
`;

export default mongooseTemplate;
