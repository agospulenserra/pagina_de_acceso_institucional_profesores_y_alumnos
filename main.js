// clases


class Usuario{

    constructor(nombre, contrasenia){

        this.nombre = nombre;
        this.contrasenia = contrasenia;
        this.caracteristica = ''

    }

}


// funciones


//seccion registro
function eventoSubmitRegistro (nombre, contrasenia){

    //creo el usuario y lo agrego a la lista
    usuarios.push(new Usuario(nombre, contrasenia))
    console.log(usuarios)

    localStorage.setItem("lista_de_usuarios", JSON.stringify(usuarios));

    //vacio los inputs
    nombre.value = ""
    contrasenia.value = ""

}

function registro (){

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

        eventoSubmitRegistro(nombre, contrasenia)

    })

    //agrego los elementos al div
    divContenedorRegistro.append(inputNombreRegistro, inputContraseniaRegistro, submitUsuarioRegistro)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedorRegistro)

}

//seccion login
function obtenerUsuariosEnLS (){

    let usuarioLS = localStorage.getItem("lista_de_usuarios")

    if (usuarioLS !== null){

        usuariosEnLS = JSON.parse(usuarioLS)

    }

    return usuariosEnLS


}

function buscarUsuarioIngresadoEnElLS (nombreDelLogin, contraDelLogin){

    //veo si existe el usuario en el local storage
    const indiceUsuario = usuariosEnLS.find((usuario) => (usuario.nombre === nombreDelLogin) && (usuario.contrasenia === contraDelLogin))

    //si existe lo mando a otra pagina
    //indiceUsuario !== undefined? window.location = 'main.html' : errorEnElLogin()
    if (indiceUsuario !== undefined && usuariosEnLS.caracteristica === 'alumno'){

        window.location = 'paginaAlumno.html'

    }else if ((indiceUsuario !== undefined && usuariosEnLS.caracteristica === 'profesor')){

        window.location = 'paginaProfesor.html'

    }else{
        swal({
            title: "Error",
            text: "Datos incorrectos o usuario inexistente",
            icon: "error",
          });
    }
}


function login (event){

    //feno el flow
    event.preventDefault();

    //limpio el contenedor principal
    contenedorPrincipal.innerHTML = " "

    //creo los elementos
    const divContenedor = document.createElement('div')
    divContenedor.id = 'contenedorLogin'

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

    //agrego los elementos al div
    divContenedor.append(inputNombre, inputContrasenia, submitUsuario)

    //agrego el div al contenedor
    contenedorPrincipal.append(divContenedor)
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
        login(e)
    })

    const divAlumno = document.createElement('div')
    divAlumno.id = 'divAlumno'
    divAlumno.addEventListener('click', (e) =>{
        login(e)
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

    //los agrego al contenedor
    contenedor.append(divProfesor, divAlumno)


}



// programa

const contenedorPrincipal = document.getElementById('contenedorPrincipal')
const btnRegistro = document.getElementById('btnRegistro')
btnRegistro.addEventListener('click', registro())
let usuarios = []
let usuariosEnLS = []

inicioDelPrograma()

//localStorage.clear()