const express = require('express');
const app = express();

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello,the server is live!</h1>');
});


const usersRoute = require('./routes/users');
const clientsRoute = require('./routes/clients');

//applying routes
app.use('/users', usersRoute);
app.use('/clients', clientsRoute);

// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server has started and is running on port ${port}`);
});

