// clases


class Alumno{

    constructor(nombre, apellido, usuario, contrasenia){

        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasenia = contrasenia;

    }

}

class Profesor{

    constructor(nombre, apellido, usuario, contrasenia, curso){

        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.curso = curso;

    }

}



// funciones


//seccion registro
function eventoSubmitRegistroProfesor (nombre, apellido, usuario, contrasenia, curso){

    //creo el usuario y lo agrego a la lista
    profesores.push(new Profesor(nombre, apellido, usuario, contrasenia, curso));

    localStorage.setItem("lista_de_profesores", JSON.stringify(profesores));

}

function eventoSubmitRegistroAlumno (nombre, apellido, usuario, contrasenia){

    //creo el usuario y lo agrego a la lista
    alumnos.push(new Alumno(nombre, apellido, usuario, contrasenia));

    localStorage.setItem("lista_de_alumnos", JSON.stringify(alumnos));

}

function registroProfesor (event){

    //freno el flow del programa
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " ";

    //creo los elementos
    const divContenedorRegistro = document.createElement('div');
    divContenedorRegistro.className = 'contenedorInicial';

    const divVolver = document.createElement('div')
    divVolver.className = 'volver'

    const btnVolver = document.createElement('p')
    btnVolver.innerHTML = 'volver al login'
    btnVolver.addEventListener('click', (e) => {

        loginProfesor(e)

    })

    const nombreProfesor = document.createElement('input');
    nombreProfesor.type = 'text';
    nombreProfesor.placeholder = 'Ingresa tu nombre';
    nombreProfesor.className = 'inputNombreContrasenia';

    const apellidoProfesor = document.createElement('input');
    apellidoProfesor.type = 'text';
    apellidoProfesor.placeholder = 'Ingresa tu apellido';
    apellidoProfesor.className = 'inputNombreContrasenia';

    const cursoProfesor = document.createElement('input');
    cursoProfesor.type = 'number';
    cursoProfesor.placeholder = 'Ingresa tu curso';
    cursoProfesor.className = 'inputNombreContrasenia';

    const inputNombreRegistro = document.createElement('input');
    inputNombreRegistro.type = 'text';
    inputNombreRegistro.placeholder = 'Crea tu usuario';
    inputNombreRegistro.className = 'inputNombreContrasenia';

    const inputContraseniaRegistro = document.createElement('input');
    inputContraseniaRegistro.type = 'password';
    inputContraseniaRegistro.placeholder = 'Crea tu contrasenia';
    inputContraseniaRegistro.className = 'inputNombreContrasenia';

    const submitUsuarioRegistro = document.createElement('button');
    submitUsuarioRegistro.innerHTML = 'Registrarme';
    submitUsuarioRegistro.className = 'submitUsuario'
    submitUsuarioRegistro.addEventListener('click', () =>{

        const nombre = nombreProfesor.value;
        const apellido = apellidoProfesor.value;
        const curso = cursoProfesor.value;
        const usuario = inputNombreRegistro.value;
        const contrasenia = inputContraseniaRegistro.value;

        eventoSubmitRegistroProfesor(nombre, apellido, usuario, contrasenia, curso)

    })

    //agrego los elementos al div
    divContenedorRegistro.append(nombreProfesor, apellidoProfesor, cursoProfesor, inputNombreRegistro, inputContraseniaRegistro, submitUsuarioRegistro);
    divVolver.append(btnVolver);

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedorRegistro, divVolver);

}

function registroAlumno (event){

    //freno el flow del programa
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " ";

    //creo los elementos
    const divContenedorRegistro = document.createElement('div');
    divContenedorRegistro.className = 'contenedorInicial';

    const divVolver = document.createElement('div')
    divVolver.className = 'volver'

    const btnVolver = document.createElement('p')
    btnVolver.innerHTML = 'volver al login'
    btnVolver.addEventListener('click', (e) => {

        loginAlumno(e)

    })

    const nombreAlumno = document.createElement('input');
    nombreAlumno.type = 'text';
    nombreAlumno.placeholder = 'Ingresa tu nombre';
    nombreAlumno.className = 'inputNombreContrasenia';

    const apellidoAlumno = document.createElement('input');
    apellidoAlumno.type = 'text';
    apellidoAlumno.placeholder = 'Ingresa tu apellido';
    apellidoAlumno.className = 'inputNombreContrasenia';

    const inputNombreRegistro = document.createElement('input');
    inputNombreRegistro.type = 'text';
    inputNombreRegistro.placeholder = 'Crea tu usuario';
    inputNombreRegistro.className = 'inputNombreContrasenia';

    const inputContraseniaRegistro = document.createElement('input');
    inputContraseniaRegistro.type = 'password';
    inputContraseniaRegistro.placeholder = 'Crea tu contrasenia';
    inputContraseniaRegistro.className = 'inputNombreContrasenia';

    const submitUsuarioRegistro = document.createElement('button');
    submitUsuarioRegistro.innerHTML = 'Registrarme';
    submitUsuarioRegistro.className = 'submitUsuario'
    submitUsuarioRegistro.addEventListener('click', () =>{

        const nombre = nombreAlumno.value;
        const apellido = apellidoAlumno.value;
        const usuario = inputNombreRegistro.value;
        const contrasenia = inputContraseniaRegistro.value;

        swal({
            title: "Bienvenid@",
            text: "Tu registro fue exitoso",
            icon: "success",
        })

        eventoSubmitRegistroAlumno(nombre, apellido, usuario, contrasenia)

    })

    //agrego los elementos al div
    divContenedorRegistro.append(nombreAlumno, apellidoAlumno, inputNombreRegistro, inputContraseniaRegistro, submitUsuarioRegistro);
    divVolver.append(btnVolver);

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedorRegistro, divVolver);

}


//seccion login
function obtenerUsuariosEnLS (){

    //obtengo a los arrays de alumnos y profesores del local storage
    let alumnoLS = localStorage.getItem("lista_de_alumnos");
    let profesorLS = localStorage.getItem("lista_de_profesores");

    //me fijo que no esten vacios
    if (alumnoLS !== null){

        alumnosEnLS = JSON.parse(alumnoLS);

    }

    if (profesorLS !== null){

        profesoresEnLS = JSON.parse(profesorLS);

    }

    //los devuelvo
    return alumnosEnLS, profesoresEnLS

}

function buscarProfesorIngresadoEnElLS (usuarioDelLogin, contraDelLogin){

    //veo si existe el usuario en el local storage
    const indiceProfesor = profesoresEnLS.find((profesor) => (profesor.usuario === usuarioDelLogin) && (profesor.contrasenia === contraDelLogin));

    //si existe lo mando a otra pagina
    if (indiceProfesor !== undefined){

        window.location = 'paginaProfesor.html';

    }else{
        swal({
            title: "Error",
            text: "Datos incorrectos o usuario inexistente",
            icon: "error",
          });
    }
}

function buscarAlumnoIngresadoEnElLS (usuarioDelLogin, contraDelLogin){

    //veo si existe el usuario en el local storage
    const indiceAlumno = alumnosEnLS.find((alumno) => (alumno.usuario === usuarioDelLogin) && (alumno.contrasenia === contraDelLogin));

    //si existe lo mando a otra pagina
    if (indiceAlumno !== undefined){

        window.location = 'paginaAlumno.html';

    }else{
        swal({
            title: "Error",
            text: "Datos incorrectos o usuario inexistente",
            icon: "error",
          });
    }
}


function loginProfesor (event){

    //feno el flow
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " ";

    //creo los elementos
    const divContenedor = document.createElement('div');
    divContenedor.className = 'contenedorInicial';

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Usuario';
    inputNombre.className = 'inputNombreContrasenia';

    const inputContrasenia = document.createElement('input');
    inputContrasenia.type = 'password';
    inputContrasenia.placeholder = 'Contrasenia';
    inputContrasenia.className = 'inputNombreContrasenia';

    const submitUsuario = document.createElement('button');
    submitUsuario.innerHTML = 'Ingresar';
    submitUsuario.className = 'submitUsuario';
    submitUsuario.addEventListener('click', (event) =>{

        //freno el flow del input
        event.preventDefault();
    
        //obtengo los datos de los inputs
        const usuarioDelLogin = inputNombre.value;
        const contraDelLogin = inputContrasenia.value;
    
        obtenerUsuariosEnLS()
        buscarProfesorIngresadoEnElLS(usuarioDelLogin, contraDelLogin) 
    
    })

    const divRegistro = document.createElement('div');
    divRegistro.className = 'divRegistro';

    const btnRegistro = document.createElement('p');
    btnRegistro.innerHTML = 'Registrate aca';
    btnRegistro.className = 'aPaginaPrincipal';
    btnRegistro.addEventListener('click', (e) => {

        registroProfesor(e)

    })
    

    //agrego btnRegistro al divRegistro
    divRegistro.append(btnRegistro);

    //agrego los elementos al div
    divContenedor.append(inputNombre, inputContrasenia, submitUsuario, divRegistro);

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedor);
}

function loginAlumno (event){

    //feno el flow
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " ";

    //creo los elementos
    const divContenedor = document.createElement('div');
    divContenedor.className = 'contenedorInicial';

    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.placeholder = 'Usuario';
    inputNombre.className = 'inputNombreContrasenia';

    const inputContrasenia = document.createElement('input');
    inputContrasenia.type = 'password';
    inputContrasenia.placeholder = 'Contrasenia';
    inputContrasenia.className = 'inputNombreContrasenia'

    const submitUsuario = document.createElement('button');
    submitUsuario.innerHTML = 'Ingresar';
    submitUsuario.className = 'submitUsuario';
    submitUsuario.addEventListener('click', (event) =>{

        //freno el flow del input
        event.preventDefault();
    
        //obtengo los datos de los inputs
        const usuarioDelLogin = inputNombre.value;
        const contraDelLogin = inputContrasenia.value;
    
        obtenerUsuariosEnLS()
        buscarAlumnoIngresadoEnElLS(usuarioDelLogin, contraDelLogin) 
    
    })

    const divRegistro = document.createElement('div');
    divRegistro.className = 'divRegistro';

    const btnRegistro = document.createElement('p');
    btnRegistro.innerHTML = 'Registrate aca';
    btnRegistro.className = 'aPaginaPrincipal';
    btnRegistro.addEventListener('click', (e) => {

        registroAlumno(e)

    })
    

    //agrego btnRegistro al divRegistro
    divRegistro.append(btnRegistro);

    //agrego los elementos al div
    divContenedor.append(inputNombre, inputContrasenia, submitUsuario, divRegistro);

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedor);
}

//seccion API
async function llamadoALaAPIRick (divProfesor){

    //obtengo los personajes
    const response = await fetch("https://rickandmortyapi.com/api/character/[1]");
    const responseJSON = await response.json();
    const rick = responseJSON;

    for (const personaje of rick){

        //creo el div
        const divPersonajeRick = document.createElement('div');
        divPersonajeRick.className = 'personaje';

        //creo la imagen del personaje
        const imagenPersonaje = document.createElement('img');
        imagenPersonaje.src = personaje.image;

        //lo agrego a su div
        divPersonajeRick.append(imagenPersonaje);

        divProfesor.append(divPersonajeRick);

    }
    
}

async function llamadoALaAPIMorty (divAlumno){

    //obtengo los personajes
    const respuesta = await fetch("https://rickandmortyapi.com/api/character/[2]");
    const respuestaJSON = await respuesta.json();
    const morty = respuestaJSON;

    for (const personaje of morty){

        //creo el div
        const divPersonajeMorty = document.createElement('div');
        divPersonajeMorty.className = 'personaje';

        //creo la imagen del personaje
        const imagenPersonajeMorty = document.createElement('img');
        imagenPersonajeMorty.src = personaje.image;

        //lo agrego a su div
        divPersonajeMorty.append(imagenPersonajeMorty);

        divAlumno.append(divPersonajeMorty);

    }
    
}


//inicio del programa
function inicioDelPrograma (){

    //obtengo el contenedor principal mediante el id
    const contenedor = document.getElementById('contenedorInicio');
    contenedor.id = 'contenedorInicial';

    //creo los divs
    const divProfesor = document.createElement('div');
    divProfesor.id = 'divProfesor';
    divProfesor.addEventListener('click', (e) => {
        loginProfesor(e)
    })

    const divAlumno = document.createElement('div');
    divAlumno.id = 'divAlumno';
    divAlumno.addEventListener('click', (e) =>{
        loginAlumno(e)
    })
    
    const textoProfesor = document.createElement('p');
    textoProfesor.innerHTML = 'Profesor';
    textoProfesor.id = 'textoProfesor';

    const textoAlumno = document.createElement('p');
    textoAlumno.innerHTML = 'Alumno';
    textoAlumno.id = 'textoAlumno';

    //agrego los textos a sus divs
    divProfesor.append(textoProfesor);
    divAlumno.append(textoAlumno);

    llamadoALaAPIRick(divProfesor)
    llamadoALaAPIMorty(divAlumno)

    //los agrego al contenedor
    contenedor.append(divProfesor, divAlumno);

}



// programa


const contenedorPrincipal = document.getElementById('contenedorPrincipal');
let alumnosEnLS = [];
let profesoresEnLS = [];
let alumnos = [];
let profesores = [];

inicioDelPrograma()