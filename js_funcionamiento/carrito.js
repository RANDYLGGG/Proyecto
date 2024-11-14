function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    carrito.push({ nombre, precio });
    
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    
    alert(`${nombre} ha sido añadido al carrito`);
}

function actualizarContadorCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cantidad = carrito.length;

    document.getElementById('cantidad-carrito').textContent = cantidad;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();
});


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
                <td><button onclick="eliminarDelCarrito(${index})" class="btn btn-danger btn-lg w-0 my-0">Eliminar</button></td>
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
    actualizarContadorCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem('carrito');
    cargarCarrito(); ío

    actualizarContadorCarrito();
}

document.getElementById('vaciar-carrito-btn').addEventListener('click', vaciarCarrito);
