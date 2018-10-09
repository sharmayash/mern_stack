const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const app = express();

// Body Parser MiddleWare
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => {console.log('DataBase Connected')})
    .catch(err => console.log(err));

// --------Use-Routes----------
app.use('/api/items', items);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));