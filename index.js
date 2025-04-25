require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/db');
const routes = require('./routes/aiIncidentRoutes');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});