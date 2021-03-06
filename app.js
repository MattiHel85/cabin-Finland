const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Cabin = require('./models/cabin');
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/cabin-Finland', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('DB Connected!')
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.render('home');
});

app.get('/cabins', async (req, res) => {
    const cabins = await Cabin.find({});
    res.render('cabins/index', { cabins });
});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});