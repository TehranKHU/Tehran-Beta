const express = require('express');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on Port ${port}`));
