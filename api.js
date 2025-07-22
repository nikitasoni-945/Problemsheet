const express = require('express');
const app = express();
app.use(express.json());

// GET
app.get('/hello', (req, res) => {
    res.send('Hello from GET!');
});

// POST
app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send(`Hello, ${req.body.name}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
