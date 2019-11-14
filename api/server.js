const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (_, res) {
    res.send('Hello World!');
});

app.post('/login', async (req, res) => {
    res.status(200).send('ok')
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));