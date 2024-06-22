// templates/app.js

// eslint-disable-next-line import/no-unresolved
import express from 'express';
import cors from 'cors';
import config from 'config';
import logger from './helper/logger.js';

const appUrl = config.get('appUrl');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World🤩🤗',
    info: 'https://www.npmjs.com/package/@codetanna/nex-cli',
  });
});

app.listen(3000, () => {
  logger.info(`Server is running on ${appUrl} 😎...`);
});
