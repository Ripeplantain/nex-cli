// templates/app.js

// eslint-disable-next-line import/no-unresolved
import express from 'express';
import config from 'config';
import logger from './helper/logger.js';

const appUrl = config.get('appUrl');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static('./src/public'));

app.get('/', (req, res) => {
  res.render('index', { projectName: '<%= projectName %>' });
});

app.listen(3000, () => {
  logger.info(`Server is running on ${appUrl} 😎...`);
});
