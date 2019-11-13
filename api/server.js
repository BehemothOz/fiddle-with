const express = require('express');
const app = express();

app.get('/', function (_, res) {
    res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));