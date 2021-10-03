const express = require('express');
const app = express();

const path = require('path')
const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

app.use(methodOverride((request, response) => {
    if (request.body && request.body._method) {
        const method = request.body._method;
        return method;
    }
 }))

const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/welcome', (request, response) => {
    console.log(request.query);
    response.render('welcome')
})

const cohortRouter = require('./routes/cohorts');
app.use('/cohorts',cohortRouter);


const PORT = 2224;
const DOMAIN = "localhost";

app.listen(PORT, DOMAIN, () => {
    console.log(`Server listening on http:// ${DOMAIN}:${PORT}`);
})