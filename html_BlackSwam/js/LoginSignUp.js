const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const contenedor = document.getElementById('contenedor');

signUpButton.addEventListener('click', () => {
	contenedor.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	contenedor.classList.remove("right-panel-active");
});
 

// Formulario de Registro
const nombreInput = document.querySelector('#nombreR');
const apellidoInput = document.querySelector('#apellidoR');
const formRegister = document.querySelector('#formRegister');
const emailInputR = document.querySelector('#emailR');
const passwordInputR = document.querySelector('#passwordR');
const roleInput = document.querySelector('#role');

formRegister.addEventListener('submit', e => {
	e.preventDefault();
	const nombre = nombreInput.value;
	const apellido = apellidoInput.value;
	const email = emailInputR.value;
	const password = passwordInputR.value;
	const role = roleInput.value;

	fetch('http://localhost:9003/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ nombre, apellido, email, password, role }) 
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('La respuesta no fue correcta');
		}
		return response.json();
	})
	.then(data => {
		window.location.href = '/LoginSignUp.html';
	})
	.catch(error => {
		console.error('Error:', error);
	});
});


// Formulario de Login
const formLogin = document.querySelector('#formLogin');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const contenedorError = document.querySelector('#contenedor-error');

formLogin.addEventListener('submit', e => {
	e.preventDefault();
	const email = emailInput.value;
	const password = passwordInput.value;

	fetch('http://localhost:9003/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password })
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('La respuesta no fue correcta');
		}
		return response.json();
	})
	.then(data => {
		localStorage.setItem('token', data.token);
		localStorage.setItem('user', data.user.email);
		localStorage.setItem('role', data.user.role);
		localStorage.setItem('id', data.user._id);
		window.location.href = '/home.html';
	})
	.catch(error => {
		console.error('Error:', error);
		contenedorError.textContent = 'Usuario o contraseña incorrecta';
	});
});
