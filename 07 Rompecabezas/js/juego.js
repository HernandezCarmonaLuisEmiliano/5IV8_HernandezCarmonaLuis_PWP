var instrucciones = [
    "Utiliza las flechas para mover juego",
    "Para ordenar las piezas guiate por el objetivo"
]

//vamos a guardar en uan variable los moviemientos del reompecabezas
var moviemientos = []

//Vamos a crear una matriz para saber las posiciones del rompecabezas
var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//Vamos a tener que crear una matriz donde tengamos las posiciones correctas
var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//necesito sabes las coordenadas de la pieza vacia

var filavacia = 2;
var columnavacia = 2;

//Necesitamos una funcion que se encargue de mostrar las instrucciones
function mostrarInstrucciones(instrucciones){
    for(var i = 0; i < instrucciones.length; i++){
        mostrarInstruccionesLista(instrucciones[i], "lista-instrucciones");
    }
}

//Esta funcion se encarg a de crear el componente li y agragar dichas instrucciones
function mostrarInstruccionesLista(instrucciones,idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instrucciones;
    ul.appendChild(li);
}

function iniciar(){
    //mezclar las piezas
    //mezclarPiezas
}

//mandamos traer la instruccion
mostrarInstrucciones(instrucciones)