
const express = require('express');

const app = express();
const PORT = 3000;

// Hello World API
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
