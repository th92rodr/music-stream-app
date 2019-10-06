const express = require('express');

const app = express();

const PORT = 5000;
const HOST = '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${server.address().port}`);
});