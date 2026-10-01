const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from node-js implementing in CI-CD project 🚀' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;