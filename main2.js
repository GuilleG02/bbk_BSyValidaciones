


// USUARIOS.HTML

const container = document.getElementById('usersContainer');
const usersArray = JSON.parse(localStorage.getItem('users')) || [];


function showUsers(){


    if (!usersArray || usersArray.length === 0) {
        console.log('No hay usuarios guardados');
        return;
    }
    
    usersArray.forEach(user => {

        console.log("Aqui llego")

        const card = document.createElement('div');
        card.classList.add('card', 'mb-3', 'shadow-sm', 'border-primary', 'rounded-3');  // Estilos mejorados
        card.style.maxWidth = '300px'; // Ancho máximo de cada card
        card.style.margin = '10px'; // Añadimos un margen entre las cards
        card.style.display = 'inline-block'; // Para que se alineen horizontalmente
        card.style.verticalAlign = 'top'; // Para que las cards se alineen correctamente en la misma fila
        card.style.width = 'calc(33.33% - 20px)'; // Ajuste el ancho para mostrar 3 cards por fila (ajustable)

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title text-center" style="font-size: 1.25rem; font-weight: bold; color: #007bff;"><strong>Nombre: </strong>${user.userName}</h5>
                <p class="card-subtitle mb-2 text-muted text-center" style="font-size: 1rem; color: #6c757d;"><strong>Email: </strong>${user.userEmail}</p>
                <hr>
                <p class="card-text" style="font-size: 1rem; color: #333;">
                    <strong>Contraseña:</strong> <span class="text-dark">${user.userPassword}</span>
                </p>
            </div>
        `;

        container.appendChild(card);


    });

}

if (window.location.pathname.includes("usuario.html")) {
    console.log("Ejecutando en pagina1.html");

    // Aquí la función que quieres ejecutar solo en ese HTML
    showUsers();
}

console.log(usersArray)

console.log("hola")




