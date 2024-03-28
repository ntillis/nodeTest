// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome! This website is working.');
});

// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
