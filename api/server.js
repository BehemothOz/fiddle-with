require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const registrationRouter = require('./routes/registration');

// Connect to DB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to DB'));

app.use(cors());
app.use(express.json());

// Routes
app.use('/registration', registrationRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));