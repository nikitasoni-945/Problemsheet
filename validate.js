const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post('/user', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('Name is required!');
    }
    res.send(`Welcome ${name}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
