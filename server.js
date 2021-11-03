const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.listen(PORT, () => {
    `App is listening on port ${PORT}`;
})