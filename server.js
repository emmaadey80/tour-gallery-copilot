const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/api/tours', async (req, res) => {
  try {
    const response = await fetch('https://course-api.com/react-tours-project');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});

app.listen(5000, () => {
  console.log('Proxy server running on http://localhost:5000');
});