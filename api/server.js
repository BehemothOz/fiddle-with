require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const dictionaryRouter = require('./routes/dictionary');
const translationRouter = require('./routes/translation');

const validationHandlerError = require('./errors/validationHandlerError');
const globalHandlerError = require('./errors/globalHandlerError');

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
app.use('/login', loginRouter);
app.use('/dictionaries', dictionaryRouter);
app.use('/translation', translationRouter)

// Validation and global error handlers
app.use(validationHandlerError);
app.use(globalHandlerError);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));