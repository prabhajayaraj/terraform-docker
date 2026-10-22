const http = require('http');

const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CI/CD Demo App</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #1e3c72, #2a5298);
    }
    .card {
      background: #fff;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    h1 { margin: 0 0 0.5rem; }
    p { color: #555; }
    button {
      padding: 0.6rem 1.2rem;
      border: 0;
      border-radius: 8px;
      background: #2a5298;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello from my CI/CD demo app 🚀</h1>
    <p>Deployed automatically with GitHub Actions and Docker</p>
    <button onclick="showTime()">Show time</button>
    <p id="time"></p>
  </div>

  <script>
    function showTime() {
      document.getElementById('time').textContent = new Date().toLocaleString();
    }
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end('OK');
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(page);
});

// Start the server only when run directly (not during tests)
if (require.main === module) {
  server.listen(3000, () => console.log('Running on http://localhost:3000'));
}

module.exports = server;