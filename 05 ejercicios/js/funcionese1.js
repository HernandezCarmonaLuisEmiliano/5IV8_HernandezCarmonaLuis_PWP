//Validar solo numeros (opcional Decimales)
function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

//Validar solo letras
function validarnom(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron  = /[a-z \ A-Z]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

//Validar solo numeros (sin decimal)
function validarnsd(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron  = /[0-9]/;

    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

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
    var sueldofinal = ventatotal + comision + 13000;
    alert(sueldofinal)

    document.getElementById("sueldoi").value = "$ " + sueldofinal;

}

//Ejercicio3
function preciodesc(){
    var nombrep = document.getElementById("productoi").value;
    var preciop = document.getElementById("precioi").value;

    var precio1 = parseFloat(preciop);
    alert(precio1);
    var precio2 = precio1*(0.15);
    alert(precio2);
    var preciofinal = precio1 + precio2;
    alert(preciofinal);

    document.getElementById("totali").value = "Producto: "+ nombrep + "  $ " + preciofinal;
}
//Ejercicio4
function calificacion(){
    var parcial1 = document.getElementById("p1i").value;
    var parcial2 = document.getElementById("p2i").value;
    var parcial3 = document.getElementById("p3i").value;
    var trabfin = document.getElementById("tfi").value;
    var exam = document.getElementById("exi").value;

    var p1 = parseFloat(parcial1);
    alert(p1);
    var p2 = parseFloat(parcial2);
    alert(p2);
    var p3 = parseFloat(parcial3);
    alert(p3);
    var C2 = parseFloat(trabfin);
    alert(C2);
    var C3 = parseFloat(exam);
    alert(C3);

    var C1 = (p1 + p2 + p3)/3;
    alert(C1);
    var CF = (C1*(0.55)) + (C2*(0.30)) + (C3*(0.15));
    alert(CF);
    
    document.getElementById("cfi").value = CF.toFixed(2);

}

//Ejercicio5
function cantidadgente(){
    var h = document.getElementById("hi").value;
    var m = document.getElementById("mi").value;

    var canth = parseFloat(h);
    alert(canth);
    var cantm = parseFloat(m);
    alert(cantm);

    var totalgente = canth + cantm;
    alert(totalgente);

    var totalh = (canth/totalgente)*100;
    alert(totalh);
    var totalm = (cantm/totalgente)*100;
    alert(totalm);

    document.getElementById("porcentaje1i").value = totalh.toFixed(2) + "%";
    document.getElementById("porcentaje2i").value = totalm.toFixed(2) + "%";
}

//Ejercicio6
function calcularedad(){
        const fechanacimiento = document.getElementById("fechai").value
        const fechanacimientobjeto = new Date(fechanacimiento);
        const mes = fechanacimientobjeto.getUTCMonth() + 1;
        const año = parseFloat(fechanacimientobjeto.getUTCFullYear());
        const dia = fechanacimientobjeto.getUTCDate();
        const fechaactual = new Date();
        const mesactual= fechaactual.getUTCMonth()+1;
        const añoactual= parseFloat(fechaactual.getUTCFullYear());
        const diaactual= fechaactual.getUTCDate();
        var edad=0;

        if((añoactual-año)<110 && año<añoactual)
            { 
            edad=añoactual-año;

            if(mesactual<mes || mesactual===mes && diaactual < dia)
            {
                edad=edad-1;
            }
            document.getElementById("edadi").value = edad + " años";
        }
        else
        {
            if(año>añoactual)
                {
                    alert("Ingrese un año pasado, no posterior")
                }
                else
                {
                if((añoactual-año)>=122){alert("Ingrese una edad inferior a 110 años")}
                }
        }
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

    //Borrar campos del Ejercicio3
    document.getElementById("productoi").value = "";
    document.getElementById("precioi").value = "";

    //Borrar campos del Ejercicio4
    document.getElementById("p1i").value = "";
    document.getElementById("p2i").value = "";
    document.getElementById("p3i").value = "";
    document.getElementById("tfi").value = "";
    document.getElementById("exi").value = "";
    document.getElementById("cfi").value = "";

    //Borrar campos del Ejercicio5
    document.getElementById("hi").value = "";
    document.getElementById("mi").value = "";

    //Borrar campos del Ejercicio6
    document.getElementById("fechai").value = "";
}

/*
Del ejercicio 1, tenemos que agregar el campo numero de meses y sera una inversion de maximo 18 meses


2 se deben de ingresar 3 ventas, un sueldo base, y despues calcular el monto total, debe de aparecer cuanto cobra por comision y la suma ttoal

3 se debe de ingresar un producto, con su precio y aplicarle el 15% y el sistema debe mostrar el producto, precio, descuento, total a pagar

4 se debe de ingresar C1, C2, C3, se aplica el promedio y su porcentaje, se ingresa TF y se aplica % y examen final y se aplica el % se debe de mostrar el total de calificacion

5 se debe de ingresar cantidad h y cantidad de mujeres y mostrar sus % correspondientes

6 calcular la edad de una persona
*/