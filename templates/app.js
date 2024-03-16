// templates/app.js

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, <%= projectName %>!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
