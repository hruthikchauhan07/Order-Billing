const express = require('express');
const bodyParser = require('body-parser');
const connectMongoDB = require('./config/mongoConfig');
const sqlConnection = require('./config/mysqlConfig');

const app = express();
app.use(bodyParser.json());

// Connect to databases
connectMongoDB();
sqlConnection;

app.get('/', (req, res) => res.send('Backend is running'));

app.listen(3000, () => console.log('Server running on port 3000'));
