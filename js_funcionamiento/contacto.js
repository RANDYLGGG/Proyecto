const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Formulario enviado con éxito');
        contactForm.reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
    }
});
