function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

//funcion para calcular el interes
//DELIMITAR EL NUMERO DE DECIMALES
//Ejercicio1
function interes(){
    var valor = document.getElementById("cantidadi").value;
    var mes = document.getElementById("mesesi").value;
    var mesinteres = parseFloat(mes);

    var parseo = parseFloat(valor);
    alert(parseo);
    var interes = parseo*(0.085)*mesinteres;//LIMITE A 2 DECIMALES
    alert(interes);
    var total = interes + parseo;
    alert(total);
    document.getElementById("saldoi").value = "$ " + total; //LIMITE A 2 DECIMALES
}

//Ejercicio2
function sueldomes(){
    var valor1 = document.getElementById("ventai1").value;
    var valor2 = document.getElementById("ventai2").value;
    var valor3 = document.getElementById("ventai3").value;

    var venta1 = parseFloat(valor1);
    alert(venta1);
    var venta2 = parseFloat(valor2);
    alert(venta2);
    var venta3 = parseFloat(valor3);
    alert(venta3)

    var ventatotal = venta1 + venta2 + venta3;
    alert(ventatotal)
    var comision = ventatotal*(0.10);
    alert(comision)
    var sueldofinal = ventatotal + comision;
    alert(sueldofinal)

    document.getElementById("sueldoi").value = "$ " + sueldofinal;

}

function borrari(){
    //Borrar campos del Ejercicio1
    document.getElementById("saldoi").value = "";
    document.getElementById("cantidadi").value = "";

    // Borrar campos del Ejercicio2
    document.getElementById("sueldoi").value = "";
    document.getElementById("ventai1").value = "";
    document.getElementById("ventai2").value = "";
    document.getElementById("ventai3").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses


2 se deben de ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma ttoal

3 se debe de ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, precio, descuento, total a pagar

4 se debe de ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe de mostrar el total de calificacion

5 se debe de ingresar cantidad h y cantidad de mujeres y mostrar sus % correspondientes

6 calcular la edad de una persona
*/