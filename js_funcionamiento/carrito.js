
function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    carrito.push({ nombre, precio });
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    alert(`${nombre} ha sido añadido al carrito`);
}


function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    let contenidoCarrito = '';

    carrito.forEach((producto, index) => {
        total += producto.precio;
        contenidoCarrito += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.precio} $</td>
                <td><button onclick="eliminarDelCarrito(${index})">Eliminar</button></td>
            </tr>`;
    });

    document.getElementById('carrito-contenido').innerHTML = contenidoCarrito;
    document.getElementById('total').textContent = `Total: ${total} $`;
}


function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito(); 
}
