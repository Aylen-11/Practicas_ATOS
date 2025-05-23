const form1 = document.getElementById('formulario');
const tablaCuerpo = document.getElementById('tabla_cuerpo');
const botonDescarga = document.getElementById('descargarJson');
const subirInput = document.getElementById('subirJson');
const mensaje = document.getElementById('mensaje');

async function getEventos() {
    console.log("lista eventos")
    const tablaCuerpo = document.getElementById('tabla_cuerpo'); //llamamos a la tabla

    try{
        const res = await fetch('http://localhost:9003/eventos/todos'); //conecta con la base de datos
        const data = await res.json(); //convierte los datos a json
        console.log(data); //muestra el array en la consola

        tablaCuerpo.innerHTML = ''; //limpiar lista
        //if (data )
        data.forEach(e => { //para cada uno
        const tr = document.createElement('tr'); //crea la row
 
        //creacion de bloques
        const tdId = document.createElement('td');
        tdId.textContent = e.idEvento;
        tr.appendChild(tdId);

        const tdNombre = document.createElement('td');
        tdNombre.textContent = e.nombre; 
        tr.appendChild(tdNombre); 
        
        const tdEstado = document.createElement('td');
        tdEstado.textContent = e.estado; 
        tr.appendChild(tdEstado); 
        
        const tdPrecio = document.createElement('td');
        tdPrecio.textContent =e.precio;
        tr.appendChild(tdPrecio);

        const tdAforo = document.createElement('td');
        tdAforo.textContent =e.aforoMaximo;
        tr.appendChild(tdAforo);

        //botones
        const tdVer = document.createElement('td');
        const btnVer = document.createElement('button');
        btnVer.textContent = 'Ver';
        tdVer.appendChild(btnVer);
        tr.appendChild(tdVer);

        btnVer.addEventListener('click', () => {
            desc = e.descripcion;
            fechaIn = e.fechaInicio;
            fechaAlt = e.fechaAlta;
            direc = e.direccion;
            durac = e.duracion;
            uni = e.unidadDuracion

            alert("Descripcion: " + desc + " Direccion: " + direc + " Fecha inicio:  " + fechaIn + " Fecha alta: " + fechaAlt + " Duracion: " + durac + " Unidad: " +  uni );
        })


        const tdModificar = document.createElement('td');
        const btnModificar = document.createElement('button');
        btnModificar.textContent = 'Modificar';
        tdModificar.appendChild(btnModificar);
        tr.appendChild(tdModificar);

        btnModificar.addEventListener('click', async() =>{
            try {
                const res = await fetch(`http://localhost:9003/eventos/uno/${e.idEvento}`)
                const data = await res.json();
                console.log(data);

                const formu = document.getElementById('formularioModificar');

                const inputNombre = document.createElement('input');
                inputNombre.value = data.nombre;

                const inputDescripcion = document.createElement('input');
                inputDescripcion.value = data.descripcion;

                const inputFechaInicio = document.createElement('input');
                inputFechaInicio.value = data.fechaInicio;

                const inputDuracion = document.createElement('input');
                inputDuracion.value = data.duracion;

                const inputUnidadDuracion = document.createElement('input');
                inputUnidadDuracion.value = data.unidadDuracion;

                const inputDireccion = document.createElement('input');
                inputDireccion.value = data.direccion;

                const inputAforo = document.createElement('input');
                inputAforo.value = data.aforoMaximo;

                const inputEstado = document.createElement('input');
                inputEstado.value = data.estado;

                const inputDestacado = document.createElement('input');
                inputDestacado.value = data.destacado;

                const inputPrecio = document.createElement('input');
                inputPrecio.value = data.precio;

                const inputTipo = document.createElement('input');
                inputTipo.value = data.tipo.idTipo;

                const botonGuardar = document.createElement('button');
                botonGuardar.type = 'submit';
                botonGuardar.textContent= 'Guardar';

                const botonCerrar = document.createElement('button');
                botonCerrar.type = 'button';
                botonCerrar.textContent = 'Cerrar';

                botonCerrar.addEventListener('click', () => {
                    document.getElementById('formularioModificar').innerHTML = '';
                });

                
                formu.appendChild(inputNombre);
                formu.appendChild(inputDescripcion);
                formu.appendChild(inputFechaInicio);
                formu.appendChild(inputDuracion);
                formu.appendChild(inputUnidadDuracion);
                formu.appendChild(inputDireccion);
                formu.appendChild(inputAforo);
                formu.appendChild(inputEstado);
                formu.appendChild(inputDestacado);
                formu.appendChild(inputPrecio);
                formu.appendChild(inputTipo);
                formu.appendChild(botonGuardar);
                formu.appendChild(botonCerrar);

                formu.addEventListener('submit', async (e) => {
                    e.preventDefault();

                    const nuevoEvento2 = {
                        nombre: inputNombre.value,
                        descripcion: inputDescripcion.value,
                        fechaInicio: inputFechaInicio.value,
                        duracion: parseInt(inputDuracion.value),
                        unidadDuracion: inputUnidadDuracion.value,
                        direccion: inputDireccion.value,
                        aforoMaximo: parseInt(inputAforo.value),
                        estado: inputEstado.value,
                        destacado: inputDestacado.value,
                        precio: parseInt(inputPrecio.value),
                        tipo: {idTipo: parseInt(inputTipo.value)},
                    };  
                    console.log(data.idEvento);

                    await fetch(`http://localhost:9003/eventos/modificar/${data.idEvento}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(nuevoEvento2)
                    });

                    document.getElementById('formularioModificar').innerHTML = '';
                    await getEventos();
                });
                
            }catch (error) {
                console.log("error formu2")
            }

        });

       /* const tdVerReserva = document.createElement('td');
        const botonVerReserva = document.createElement('button');
        botonVerReserva.textContent = 'Ver reserva';
        tdVerReserva.appendChild(botonVerReserva);
        tr.appendChild(tdEliminar);

       /* botonVerReserva.addEventListener('click', async () => {
            try {
                const res = await fetch()
            } catch (error) {
                console.log("Error boton ver reserva")
            }
        })*/

        const tdEliminar = document.createElement('td');
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        tdEliminar.appendChild(btnEliminar);
        tr.appendChild(tdEliminar);

        async function eliminarEventos (){
            const elmi = await fetch(`http://localhost:9003/eventos/eliminar/${e.idEvento}`,{
                method:'DELETE',});

        }
        
        btnEliminar.addEventListener('click', async () =>{
            const confirmacion = confirm(`¿Estás seguro que quieres eliminar el evento ${e.nombre}?`);
            if (!confirmacion) return;
        
            await eliminarEventos();
            await getEventos();
        })
        

        // Finalmente, se añade y renderiza la tabla
        tablaCuerpo.appendChild(tr);
            
        })

        
    }
    catch(error){
        console.log("error eliminar")
    }
}
//formulario para añadir cosas
form1.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nuevoEvento = {
        nombre:document.getElementById("nombre").value,
        descripcion: document.getElementById("desc").value,
        fechaInicio: document.getElementById("feIn").value,
        duracion: parseInt(document.getElementById("dura").value),
        unidadDuracion: document.getElementById("uniDura").value,
        direccion: document.getElementById("direc").value,
        aforoMaximo: parseInt(document.getElementById("afMax").value),
        estado: 'ACTIVO',
        destacado: 'N',
        precio: parseInt(document.getElementById("prec").value),
        tipo: {idTipo:parseInt(document.getElementById("tip").value)},
        fechaAlta: new Date().toISOString().split('T')[0],

    }    

    try{ 
        console.log(nuevoEvento);
        const res = await fetch('http://localhost:9003/eventos/alta',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoEvento)
    });
    console.log("Respuesta:", res.status, res.statusText);

    if (!res.ok) {
        const errorData = await res.text(); // Intenta ver el cuerpo del error
        console.error("Error en respuesta:", errorData);
        return;
    }
    await getEventos();
    form1.reset();

    } catch(error){
        console.log("error al añadir evento")
    }

   
});


getEventos(); //se renderiza los datos pero en la consola