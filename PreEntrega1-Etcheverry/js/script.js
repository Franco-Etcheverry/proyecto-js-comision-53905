let postre = "";
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = true;

function comprarPostre(){
do {
    postre = prompt("¿Que postre querés comprar?");

    let cantidad = parseInt(prompt("¿Cuántos querés comprar?"));

    while (isNaN(cantidad) || cantidad <= 0) {
        alert("Debés agregar una cantidad válida.");
        cantidad = parseInt(prompt("¿Cuántos querés comprar?"));
    }

    let precio = 0;
    
    switch (postre) {
        case "Cheescake":
            precio = 1000;
            break;
        case "Carrot Cake":
            precio = 1200;
            break;
        case "Red Velvet":
            precio = 1400;
            break;
        case "Lemon Pie":
                precio = 800;
                break;
        default:
            alert("El postre ingresado no es válido");
            continue;
    }

    let precioTotalPostre = precio * cantidad;
    precioTotal += precioTotalPostre;
    cantidadTotal += cantidad;

    alert('Has agregado ' + cantidad + ' ' + postre + '(s)' + ' al carrito. Total a pagar: $' + precioTotalPostre);

    seguirComprando = confirm("¿Querés agregar otro postre?");

    if (!seguirComprando) {
        let finalizarCompra = confirm("¿Desea finalizar la compra?");

        if (finalizarCompra) {
            alert('Has comprado un total de ' + cantidadTotal + ' postre(s)' + ' por un total de $' + precioTotal + '. ' + ' ¡Gracias por tu compra!');
        } else {
            alert("Esperamos volver a verte pronto. ¡Hasta luego!");
        }
    }
} while (seguirComprando);
}