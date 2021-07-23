var intervCarrusel =  null;
var idxImagen = -1;

window.onload = function(){
    iniciarCarrusel();
}

function cambiarImagen(){
    if(idxImagen==4){
        idxImagen = 0;
    }else{
        idxImagen  = idxImagen + 1;
    }
    setImage();
}    
    
function setImage(){
    var carrusel = document.getElementById("carrusel");
    switch(idxImagen){
        case 0:
            carrusel.innerHTML = "<img class='fade-in' src='/imagenes/promo-tequeños.jpg' width=100%;  height=500px;/>";
            break;
        case 1:
            carrusel.innerHTML = "<img class='fade-in' src='/imagenes/promo-pollo-torta-bebidas.jpg'width=100%;  height=500px;/>";
            break;
        case 2:
            carrusel.innerHTML = "<img class='fade-in' src='/imagenes/promo-pollo-bebidas.jpg'width=100%;  height=500px;/>";
            break; 
        case 3:
            carrusel.innerHTML = "<img class='fade-in' src='/imagenes/promo-llegó-la-familia.jpg'width=100%;  height=500px;/>";
            break;   
        case 4:
            carrusel.innerHTML = "<img class='fade-in' src='/imagenes/promo-1.5-pollo-para-2.jpg'width=100%;  height=500px;/>";
            break;       
    }
}

function iniciarCarrusel(){
    intervCarrusel = setInterval(cambiarImagen, 3000);
}

function prev(){
    clearInterval(intervCarrusel);
    if(idxImagen==0){
        idxImagen = 2;
    }else{
    idxImagen =  idxImagen - 2;
    }
    cambiarImagen();
    setImage();
    iniciarCarrusel();
}
