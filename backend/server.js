const express = require('express');
const app = express();
const PORT = 5000;

// Handle both /api and /api/
app.get(['/api', '/api/'], (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
