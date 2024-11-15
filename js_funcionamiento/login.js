document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector("button[type='submit']");

    loginButton.addEventListener("click", (event) => {
        event.preventDefault();

        const email = document.getElementById("typeEmailX").value;
        const password = document.getElementById("typePasswordX").value;

        if (email && password) {
            alert("Inicio de sesión con éxito");
            window.location.href = "";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
