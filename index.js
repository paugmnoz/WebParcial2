//guardar librería en una constante
const express = require('express'),
engines = require('consolidate'),
fs = require('fs');


//crear app
var app = express();

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

var visitaContacto, visitaInicio, visitaProducto;

app.get('/', (req, res) => { 
    res.render(
        'index')

     
}); 

app.get('/contacto', (req, res) => { 
    res.render(
        'contacto')

     
}); 

app.get('/producto', (req, res) => { 
    res.render(
        'producto')

     
}); 

app.listen(7070, function () {
    console.log('done in port 7070');
});
