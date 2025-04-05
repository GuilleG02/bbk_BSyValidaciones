
// CREARUSUARIO.HTML


const userNameFORM = document.getElementById('nameUser');
const userEmailFORM = document.getElementById('emailUser');
const userPassword1FORM = document.getElementById('password1User');
const userPassword2FORM = document.getElementById('password2User');
const FORM = document.getElementById('formCreate');

function onSubmit(event) {

    event.preventDefault();

    // Si los campos no estan vacios
    if (userNameFORM.value === '' || userEmailFORM.value === '' || userPassword1FORM.value === "" || userPassword2FORM.value === '') {
        
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = "Rellena los Campos que faltan";

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);


    // Si el email cumple los parametros
    } else if (/(\w+?@\w+?\x2E.+)/.test(userEmailFORM.value) !== true) {

        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = "Introduce un email válido";

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);


    // Si las contraseñas no son iguales
      } else if (userPassword1FORM.value !== userPassword2FORM.value){ 

        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = "Las contraseñas no coinciden";

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);


    // Comprobamos que la contraseña cumpla los requisitos
      } else if (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/.test(userPassword1FORM.value) !== true){

        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = "La contraseña debe contener 1 Mayúscula, 1 Minúscula, 1 Número y 1 Carácter Especial";

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);



    // Crea el usuario y da la alerta de Success
      } else {

        createUser();
        const succesDiv = document.createElement('div');
        succesDiv.classList.add('alert', 'alert-success');
        succesDiv.textContent = "Usuario creado correctemente";
        document.body.appendChild(succesDiv);

        setTimeout(() => {
            succesDiv.remove();
            window.location.href = 'usuario.html';

        }, 3000);
        
     
    }

    
}

// Creamos el array o lo recogemos si existe
const usersArray = JSON.parse(localStorage.getItem('users')) || [];


function createUser (){

    // Obtener el array de usuarios del localStorage, si no existe, iniciar como un array vacío
    // let usersArray = JSON.parse(localStorage.getItem('users')) || [];

    // Crear el nuevo usuario a agregar
    const newUser = {
        userName: userNameFORM.value,
        userEmail: userEmailFORM.value,
        userPassword: userPassword1FORM.value,
    };

    // Agregar el nuevo usuario al array
    usersArray.push(newUser);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('users', JSON.stringify(usersArray));

    console.log('Usuarios guardados:');
    console.log(usersArray);
}


FORM.addEventListener('submit', onSubmit);



// USUARIOS.HTML

const container = document.getElementById('usersContainer');


function showUsers(){


    if (!usersArray || usersArray.length === 0) {
        console.log('No hay usuarios guardados');
        return;
    }
    
    // Hacemos un forEach para mostrar cada usuario en su respectiva tarjeta

    usersArray.forEach(user => {

        console.log("Aqui llego")

        const card = document.createElement('div');
        card.classList.add('card', 'mb-3', 'shadow-sm');
        card.style.maxWidth = '400px';

        card.innerHTML = 

        // Hay que usar estas comillas para poder hacer uso de ${}
        
        `<div class="card-body">
            <h2 class="card-title">${user.userName}</h2>
            <p class="card-subtitle mb-2 text-muted">${user.userEmail}</p>
            <p class="card-text"><strong>Contraseña:</strong> ${user.userPassword}</p>
        </div>`;
    
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

