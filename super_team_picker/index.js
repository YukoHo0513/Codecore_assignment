const express = require('express');
const app = express();

const path = require('path');
app.set(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/cohorts/new', (request, response) => {
    console.log(request.query);
    response.render('new_cohorts')
})

const PORT = 3500;
const DOMAIN = "localhost"
app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http://${DOMAIN}:${PORT}`);
})