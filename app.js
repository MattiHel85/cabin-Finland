const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.render('home');
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});