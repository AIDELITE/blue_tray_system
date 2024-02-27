const express = require('express');
const db = require('./database/db');

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM producrs');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});