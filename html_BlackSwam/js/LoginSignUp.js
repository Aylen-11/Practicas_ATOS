const RegistrarseBoton = document.getElementById('signUp');
const EntrarBoton = document.getElementById('signIn');
const contenedor = document.getElementById('contenedor');

RegistrarseBoton.addEventListener('click', () => {
	contenedor.classList.add("right-panel-active");
});

EntrarBoton.addEventListener('click', () => {
	contenedor.classList.remove("right-panel-active");
});
 

const formRegistro = document.getElementById('formRegistrarse');
const formEntrar = document.getElementById('formEntrar');

formRegistro.addEventListener('submit', async function(e){
	e.preventDefault();

	const nuevoUsuario = {
		nombre: document.getElementById("nombreR").value,
		apellidos: document.getElementById("apellidosR").value,
		email: document.getElementById('emailR').value,
		password: document.getElementById('passwordR').value,
		fechaRegistro: new Date().toISOString().split('T')[0],
	}

	try {
		console.log(nuevoUsuario);
		const res = await fetch('http://localhost:9003/usuarios/alta', {
			method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
		});
		
		//formRegistro.reset();
		window.location.href = 'principal.html';
	} catch (error) {
		console.log("Error en formulario")
	}
});

//iniciar sesión
formEntrar.addEventListener('submit', async function (e){
	e.preventDefault();

	const correoUsuario = document.getElementById('emailE').value;
	const passUsuario = document.getElementById('passwordE').value;
	console.log(correoUsuario);
	console.log(passUsuario);
	try {
		const res = await fetch(`http://localhost:9003/usuarios/emailypass/${correoUsuario}/${passUsuario}`);
		const data = res.json();
		console.log(data);
		
	} catch (Error) {
		console.log ('error en formulario entrar');
		
	}

})