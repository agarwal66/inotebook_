const express = require('express');
const connectToMongo = require('./db');

// Set dotenv
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5050; 
const mongoURI = process.env.MONGOURI;


const cors = require('cors');
app.use(cors());

connectToMongo(mongoURI);

app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Server => http://localhost:${port}`);
});