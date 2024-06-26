const express = require('express');
const app = express();
const quotesRouter = require('./quotes.js');
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {

});

app.use('/api/quotes', quotesRouter);