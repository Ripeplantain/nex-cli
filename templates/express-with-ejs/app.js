// templates/app.js

// eslint-disable-next-line import/no-unresolved
import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { projectName: '<%= projectName %>' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/ 😎...');
});
