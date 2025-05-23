
var aNombre = [],
    aApellido = [],
    aContraseña = [],
    aCorreoElectronico = [],
    aNumeroTelefono = [];





if (localStorage.getItem('nombre_personas') != null) {
    aNombre = JSON.parse(localStorage.getItem('nombre_personas'));
    aApellido = JSON.parse(localStorage.getItem('apellido_personas'));
    aContraseña = JSON.parse(localStorage.getItem('contraseña_personas'));
    aCorreoElectronico = JSON.parse(localStorage.getItem('correo_personas'));
    aNumeroTelefono = JSON.parse(localStorage.getItem('numero_personas'));
}

var formulario = document.querySelector('#formRegistro');
formulario.addEventListener('submit', registrarPersona);

function registrarPersona(event) {
    event.preventDefault();


    

    var nNombre = document.querySelector('#txtNombre').value,
        sApellido = document.querySelector('#txtApellido').value,
        sContraseña= document.querySelector('#txtContraseña').value,
        sCorreoElectronico = document.querySelector('#txtCorreo').value,
        sNumeroTelefono = document.querySelector('#txtTelefono').value;

    aNombre.push(nNombre);
    aApellido.push(sApellido);
    aContraseña.push(sContraseña);
    aCorreoElectronico.push(sCorreoElectronico);
    aNumeroTelefono.push(sNumeroTelefono);

    localStorage.setItem('nombre_personas', JSON.stringify(aNombre));
    localStorage.setItem('apellido_personas', JSON.stringify(aApellido));
    localStorage.setItem('Contraeña_personas', JSON.stringify(aContraeña)); 
    localStorage.setItem('correo_personas', JSON.stringify(aCorreoElectronico));
    localStorage.setItem('numero_personas', JSON.stringify(aNumeroTelefono));

  
    formulario.reset();


    llenarTabla();


    alert("Persona Registrada");
}
