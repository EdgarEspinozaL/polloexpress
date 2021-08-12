let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar s/${total}`
}

function back(){
    history.go(-1);
}

function limpiar(product, price){
    console.log(products,price);
    products.splice(product);
    total=0;
    document.getElementById("checkout").innerHTML = `Pagar s/${total}`
}

function pay() {
    window.alert(products.join("  \n")+ "\nTOTAL A PAGAR ES :"+ total );
}