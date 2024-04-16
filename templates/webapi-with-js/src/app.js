// templates/app.js

// eslint-disable-next-line import/no-unresolved
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World🤩🤗' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/ 😎...');
});
