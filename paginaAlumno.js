// funciones


function obtenerProfesores (){

    let profesorLS = localStorage.getItem("lista_de_profesores");

    //me fijo que no este vacio el array guardado en el local storage
    if (profesorLS !== null){

        profesoresEnLS = JSON.parse(profesorLS);

    }

    //los devuelvo
    return profesoresEnLS

}

function renderizarProfesores (){

    contenedor.innerHTML = " ";

    const ulProfesores = document.createElement('ul');
    ulProfesores.className = 'ulProfesores';

    if (profesoresEnLS.length >=1){

        profesoresEnLS.forEach( (profesor) => {

            const liProfesores = document.createElement("li");
            liProfesores.className = 'liProfesores';
        
            const nombreProfesor = document.createElement("p");
            nombreProfesor.innerHTML = `<strong>Nombre:</strong> ${profesor.nombre}`
        
            const apellidoProfesor = document.createElement("p");
            apellidoProfesor.innerHTML = `<strong>Apellido:</strong> ${profesor.apellido}`;

            const cursoProfesor = document.createElement("p");
            cursoProfesor.innerHTML = `<strong>Curso:</strong> ${profesor.curso} anio`;
        
            liProfesores.append(nombreProfesor, apellidoProfesor, cursoProfesor);
        
            ulProfesores.append(liProfesores);
    
            contenedor.append(ulProfesores);
        
        })

    }else{

        swal({
            title: "Error",
            text: "Todavia no hay profesores registrados",
            icon: "error",
        })

    }

}


function crearNotasDelAlumno (){

    //limpio el contenedor
    contenedor.innerHTML = " ";

    //creo un contenedor
    const divPromedio = document.createElement('div');
    divPromedio.className = 'ulProfesores'

    //creo los inputs para las notas
    const nota1 = document.createElement('input');
    nota1.type = 'number';
    nota1.placeholder = 'Nota uno';
    nota1.className = 'inputNombreContrasenia';

    const nota2 = document.createElement('input');
    nota2.type = 'number';
    nota2.placeholder = 'Nota dos';
    nota2.className = 'inputNombreContrasenia';

    const nota3 = document.createElement('input');
    nota3.type = 'number';
    nota3.placeholder = 'Nota tres';
    nota3.className = 'inputNombreContrasenia';

    const btnSubmit = document.createElement('button');
    btnSubmit.innerHTML = 'Calcular';
    btnSubmit.className = 'submitUsuario'
    btnSubmit.addEventListener('click', (e) => {

        //freno el flow del programa
        e.preventDefault()

        const valorNota1 = Number(nota1.value);
        const valorNota2 = Number(nota2.value);
        const valorNota3 = Number(nota3.value);

        notas.push(valorNota1, valorNota2, valorNota3);

        const promedioAlumno = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

        if (promedioAlumno >= 0){

            swal({
                title: "Tu promedio es: ",
                text: `${promedioAlumno}`,
                icon: "info",
            })

        }else{

            swal({
                title: "Error",
                text: "Ingrese notas validas",
                icon: "error",
            })

        }

    })

    divPromedio.append(nota1, nota2, nota3, btnSubmit);

    contenedor.append(divPromedio);

}


function inicioDelPrograma (){

    //creo un contenedor
    const divInicial = document.createElement('div');
    divInicial.className = 'contenedorInicial';

    //creo las opciones
    const listaProfesores = document.createElement('div');
    listaProfesores.className = 'opcion';
    listaProfesores.addEventListener('click', (e) => {

        e.preventDefault();

        obtenerProfesores()
        renderizarProfesores()

    })

    const calcNotas = document.createElement('div');
    calcNotas.className = 'opcion';
    calcNotas.addEventListener('click', (e) => {

        //freno el flow del programa
        e.preventDefault();

        crearNotasDelAlumno()

    })

    const textoProfesores = document.createElement('p');
    textoProfesores.innerHTML = 'Ver listado de profesores';

    const textoNotas = document.createElement('p');
    textoNotas.innerHTML = 'Calcular mi promedio';

    btnVolver.addEventListener('click', (e) => {

        e.preventDefault();
        window.location = 'index.html';

    })

    //agrego las opciones al contenedor
    listaProfesores.append(textoProfesores);
    calcNotas.append(textoNotas);

    divInicial.append(listaProfesores, calcNotas);

    contenedor.append(divInicial);

}



// programa

const contenedor = document.getElementById('contenedorAlumno');
const btnVolver = document.getElementById('botonVolver');
contenedor.className = 'contenedorInicial';
let notas = [];
let profesoresEnLS = [];

inicioDelPrograma()