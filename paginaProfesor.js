function obtenerAlumnos (){

    let alumnoLS = localStorage.getItem("lista_de_alumnos");

    //me fijo que no este vacio el array guardado en el local storage
    if (alumnoLS !== null){

        alumnosEnLS = JSON.parse(alumnoLS);

    }

    //los devuelvo
    return alumnosEnLS

}

function renderizarAlumnos (){

    contenedor.innerHTML = " ";

    const ulAlumnos = document.createElement('ul');
    ulAlumnos.className = 'ulProfesores';

    if (alumnosEnLS.length >=1){

        alumnosEnLS.forEach( (alumno) => {

            const liAlumnos = document.createElement("li");
            liAlumnos.className = 'liProfesores';
        
            const nombreAlumno = document.createElement("p");
            nombreAlumno.innerHTML = `<strong>Nombre:</strong> ${alumno.nombre}`
        
            const apellidoAlumno = document.createElement("p");
            apellidoAlumno.innerHTML = `<strong>Apellido:</strong> ${alumno.apellido}`;
        
            liAlumnos.append(nombreAlumno, apellidoAlumno);
        
            ulAlumnos.append(liAlumnos);
    
            contenedor.append(ulAlumnos);
        
        })

    }else{

        swal({
            title: "Error",
            text: "Todavia no hay alumnos registrados",
            icon: "error",
        })

    }

    btnVolver.addEventListener('click', (e) => {

        e.preventDefault();
        window.location = 'index.html';

    })

}



// programa

const contenedor = document.getElementById('contenedorprofesor');
const btnVolver = document.getElementById('botonVolver');
contenedor.className = 'contenedorInicial';
let alumnosEnLS = [];

obtenerAlumnos()
renderizarAlumnos()