var visitaContacto = 2, 
    visitaInicio = 0, 
    visitaProducto= 0;

document.querySelector('#contacto_btn').addEventListener('click', function(){
    visitaContacto = visitaContacto +1;
    console.log(visitaContacto);
    
});

document.querySelector('#index_btn').addEventListener('click', function(){
    visitaInicio+=1;
});
document.querySelector('#producto_btn').addEventListener('click', function(){
    visitaProducto+=1;
});


