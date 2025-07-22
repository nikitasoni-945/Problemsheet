const express = require('express');
const app = express();
app.use(express.json());

// A route that throws an error
app.get('/error', (req, res, next) => {
    next(new Error('Something went wrong!'));
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
