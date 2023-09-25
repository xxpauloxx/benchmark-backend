const express = require('express');
const app = express();
const port = 8080; // Escolha a porta desejada, por exemplo, 3000

app.get('/', (req, res) => {
  res.send('Hello, World from Node.js!');
});

app.listen(port, () => {
  console.log(`Running: http://localhost:${port}`);
});
