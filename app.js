const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your API response' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});