const mongooseTemplate = `import mongoose from 'mongoose';
import logger from '../helper/logger.js';

export const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
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
