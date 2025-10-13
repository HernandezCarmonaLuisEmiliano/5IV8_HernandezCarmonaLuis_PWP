//No numeros
function validarl(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[a-zA-z\s ]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function invertirpalabras(){
    var str = document.getElementById("p1_input").value;
    var arreglocadenas= str.split(" ");
    var cadenareversa= arreglocadenas.reverse();
    document.getElementById("p1_output").innerHTML = cadenareversa.join(" ")
}

function borrare1(){
    document.getElementById("p1_input").value = "";
    document.getElementById("p1_output").textContent = "Esperando datos..."
}