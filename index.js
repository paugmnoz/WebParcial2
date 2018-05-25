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

var visitaContacto = 0, visitaInicio =0, visitaProducto =0;


var text = fs.readFileSync('visitas.txt', 'utf8');

function actualizartxt() {
    var nuevoTxt;
    nuevoTxt = "[Inicio: " + visitaInicio + ", Contacto: " + visitaContacto + ", Producto: " + visitaProducto + "]";
    fs.writeFileSync('visitas.txt', nuevoTxt);
}

app.get('/', (req, res) => { 
    visitaInicio+=1;
    actualizartxt();
    
    res.render(
        'index', {
            titulo: 'Inicio'
            
        })

     
}); 

app.get('/contacto', (req, res) => { 
    visitaContacto +=1;
    actualizartxt();
    res.render(
        'contacto', {
            titulo: 'Contacto'
        })

     
}); 

app.get('/producto', (req, res) => { 
    visitaProducto +=1;
    actualizartxt();
    
    res.render(
        'producto', {
            titulo: 'Producto'
            
        })

     
}); 

app.listen(7070, function () {
    console.log('done in port 7070');
});
