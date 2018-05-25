//guardar librería en una constante
const express = require('express'),
express = require('express'),
engines = require('consolidate');

//crear app
var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => { 
    
});

app.listen(7070, function () {
    console.log('done in port 7070');
});
