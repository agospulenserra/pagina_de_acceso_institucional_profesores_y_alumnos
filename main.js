// clases


class Alumno{

    constructor(nombre, contrasenia){

        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.caracteristica = 'alumno'

    }

}

class Profesor{

    constructor(nombre, contrasenia){

        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.caracteristica = 'profesor'

    }

}


// funciones


//seccion registro
function eventoSubmitRegistroProfesor (nombre, contrasenia){

    //creo el usuario y lo agrego a la lista
    profesores.push(new Profesor(nombre, contrasenia))

    localStorage.setItem("lista_de_profesores", JSON.stringify(profesores));

    guardarEnLSALosUsuarios()

}

function eventoSubmitRegistroAlumno (nombre, contrasenia){

    //creo el usuario y lo agrego a la lista
    alumnos.push(new Alumno(nombre, contrasenia))

    localStorage.setItem("lista_de_alumnos", JSON.stringify(alumnos))

    guardarEnLSALosUsuarios()

}

function guardarEnLSALosUsuarios (){

    //concateno los arrays en el array usuarios y lo guardo en el LS
    usuarios = profesores.concat(alumnos)

    localStorage.setItem("lista_de_usuarios", JSON.stringify(usuarios));

}

function registroProfesor (event){

    //freno el flow del programa
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " "

    //creo los elementos
    const divContenedorRegistro = document.createElement('div')
    divContenedorRegistro.className = 'contenedorInicio'

    const inputNombreRegistro = document.createElement('input')
    inputNombreRegistro.type = 'text'
    inputNombreRegistro.placeholder = 'Crea tu usuario'

    const inputContraseniaRegistro = document.createElement('input')
    inputContraseniaRegistro.type = 'password'
    inputContraseniaRegistro.placeholder = 'Crea tu contrasenia'

    const submitUsuarioRegistro = document.createElement('button')
    submitUsuarioRegistro.innerHTML = 'Registrarme'
    submitUsuarioRegistro.addEventListener('click', () =>{

        const nombre = inputNombreRegistro.value
        const contrasenia = inputContraseniaRegistro.value

        eventoSubmitRegistroProfesor(nombre, contrasenia)

    })

    //agrego los elementos al div
    divContenedorRegistro.append(inputNombreRegistro, inputContraseniaRegistro, submitUsuarioRegistro)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedorRegistro)

}

function registroAlumno (event){

    //freno el flow del programa
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " "

    //creo los elementos
    const divContenedorRegistro = document.createElement('div')
    divContenedorRegistro.className = 'contenedorInicio'

    const inputNombreRegistro = document.createElement('input')
    inputNombreRegistro.type = 'text'
    inputNombreRegistro.placeholder = 'Crea tu usuario'

    const inputContraseniaRegistro = document.createElement('input')
    inputContraseniaRegistro.type = 'password'
    inputContraseniaRegistro.placeholder = 'Crea tu contrasenia'

    const submitUsuarioRegistro = document.createElement('button')
    submitUsuarioRegistro.innerHTML = 'Registrarme'
    submitUsuarioRegistro.addEventListener('click', () =>{

        const nombre = inputNombreRegistro.value
        const contrasenia = inputContraseniaRegistro.value

        eventoSubmitRegistroAlumno(nombre, contrasenia)

    })

    //agrego los elementos al div
    divContenedorRegistro.append(inputNombreRegistro, inputContraseniaRegistro, submitUsuarioRegistro)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedorRegistro)

}


//seccion login
function obtenerUsuariosEnLS (){

    let alumnoLS = localStorage.getItem("lista_de_alumnos")
    let profesorLS = localStorage.getItem("lista_de_profesores")

    if (alumnoLS !== null){

        alumnosEnLS = JSON.parse(alumnoLS)

    }

    if (profesorLS !== null){

        profesoresEnLS = JSON.parse(profesorLS)

    }

    return alumnosEnLS, profesoresEnLS


}

function buscarUsuarioIngresadoEnElLS (nombreDelLogin, contraDelLogin){

    //veo si existe el usuario en el local storage
    const indiceAlumno = alumnosEnLS.find((usuario) => (usuario.nombre === nombreDelLogin) && (usuario.contrasenia === contraDelLogin));
    const indiceProfesor = profesoresEnLS.find((usuario) => (usuario.nombre === nombreDelLogin) && (usuario.contrasenia === contraDelLogin));

    //si existe lo mando a otra pagina
    //indiceUsuario !== undefined? window.location = 'main.html' : errorEnElLogin()
    if (indiceAlumno !== undefined){

        window.location = 'paginaAlumno.html'

    }else if (indiceProfesor !== undefined){

        window.location = 'paginaProfesor.html'

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
    contenedorPrincipal.innerHTML = " "

    //creo los elementos
    const divContenedor = document.createElement('div')
    divContenedor.className = 'contenedorInicio'

    const inputNombre = document.createElement('input')
    inputNombre.type = 'text'
    inputNombre.placeholder = 'Usuario'

    const inputContrasenia = document.createElement('input')
    inputContrasenia.type = 'password'
    inputContrasenia.placeholder = 'Contrasenia'

    const submitUsuario = document.createElement('button')
    submitUsuario.innerHTML = 'Ingresar'
    submitUsuario.addEventListener('click', (event) =>{

        //freno el flow del input
        event.preventDefault();
    
        //obtengo los datos de los inputs
        const nombreDelLogin = inputNombre.value
        const contraDelLogin = inputContrasenia.value
    
        obtenerUsuariosEnLS()
        buscarUsuarioIngresadoEnElLS(nombreDelLogin, contraDelLogin) 
    
    })

    const divRegistro = document.createElement('div')
    divRegistro.className = 'divRegistro'

    const btnRegistro = document.createElement('p')
    btnRegistro.innerHTML = 'Registrate aca'
    btnRegistro.className = 'aPaginaPrincipal'
    btnRegistro.addEventListener('click', (e) => {
        registroProfesor(e)
    })
    

    //agrego btnRegistro al divRegistro
    divRegistro.append(btnRegistro)

    //agrego los elementos al div
    divContenedor.append(inputNombre, inputContrasenia, submitUsuario, divRegistro)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedor)
}

function loginAlumno (event){

    //feno el flow
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " "

    //creo los elementos
    const divContenedor = document.createElement('div')
    divContenedor.className = 'contenedorInicio'

    const inputNombre = document.createElement('input')
    inputNombre.type = 'text'
    inputNombre.placeholder = 'Usuario'

    const inputContrasenia = document.createElement('input')
    inputContrasenia.type = 'password'
    inputContrasenia.placeholder = 'Contrasenia'

    const submitUsuario = document.createElement('button')
    submitUsuario.innerHTML = 'Ingresar'
    submitUsuario.addEventListener('click', (event) =>{

        //freno el flow del input
        event.preventDefault();
    
        //obtengo los datos de los inputs
        const nombreDelLogin = inputNombre.value
        const contraDelLogin = inputContrasenia.value
    
        obtenerUsuariosEnLS()
        buscarUsuarioIngresadoEnElLS(nombreDelLogin, contraDelLogin) 
    
    })

    const divRegistro = document.createElement('div')
    divRegistro.className = 'divRegistro'

    const btnRegistro = document.createElement('p')
    btnRegistro.innerHTML = 'Registrate aca'
    btnRegistro.className = 'aPaginaPrincipal'
    btnRegistro.addEventListener('click', (e) => {
        registroAlumno(e)
    })
    

    //agrego btnRegistro al divRegistro
    divRegistro.append(btnRegistro)

    //agrego los elementos al div
    divContenedor.append(inputNombre, inputContrasenia, submitUsuario, divRegistro)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedor)
}

//seccion API
async function llamadoALaAPI (divProfesor, divAlumno){

    //obtengo los personajes
    const response = await fetch("https://rickandmortyapi.com/api/character/[1,2]");
    const responseJSON = await response.json();
    const personajesInicio = responseJSON.results;

    //recorro los personajes y genero los agrego al inicio
    for (const personaje of personajesInicio){

        //creo el div
        const divPersonaje = document.createElement('div');

        //creo la imagen de los personajes
        const imagenPersonaje = document.createElement('img');
        imagenPersonaje.src = personaje.image;

        //los agrego a sus divs correspondientes
        divPersonaje.append(imagenPersonaje);

        divProfesor.append(divPersonaje);
        divAlumno.append(divPersonaje);

    }

}


//inicio del programa
function inicioDelPrograma (){

    //obtengo el contenedor principal mediante el id
    const contenedor = document.getElementById('contenedorInicio')
    contenedor.id = 'contenedorInicial'

    //creo los divs
    const divProfesor = document.createElement('div')
    divProfesor.id = 'divProfesor'
    divProfesor.addEventListener('click', (e) => {
        loginProfesor(e)
    })

    const divAlumno = document.createElement('div')
    divAlumno.id = 'divAlumno'
    divAlumno.addEventListener('click', (e) =>{
        loginAlumno(e)
    })
    
    const textoProfesor = document.createElement('p')
    textoProfesor.innerHTML = 'Profesor'
    textoProfesor.id = 'textoProfesor'

    const textoAlumno = document.createElement('p')
    textoAlumno.innerHTML = 'Alumno'
    textoAlumno.id = 'textoAlumno'

    //agrego los textos a sus divs
    divProfesor.append(textoProfesor)
    divAlumno.append(textoAlumno)

    llamadoALaAPI(divProfesor, divAlumno)

    //los agrego al contenedor
    contenedor.append(divProfesor, divAlumno)

}



// programa


const contenedorPrincipal = document.getElementById('contenedorPrincipal')
let alumnosEnLS = []
let profesoresEnLS = []
let alumnos = []
let profesores = []

inicioDelPrograma()

//localStorage.clear()