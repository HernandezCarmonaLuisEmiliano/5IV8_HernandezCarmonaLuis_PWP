function validarn(e){
    var teclado = (document.all) ? e.keycode : e.which
    if(teclado === 8) return true;
    var regex = /[0-9\d.]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo);
}

function problema1(){
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var resultado=0;
    if(!isNaN(num1) && !isNaN(num2)){
    if(num1===num2){
      resultado = num1*num2  
    }else{
    num1>num2 ? resultado = num1-num2 : resultado = num1+num2
    }
    document.getElementById("output_p1").textContent = "El resultado es: " + resultado.toFixed(2)
    }else{
        alert("Por favor rellene los campos")
    }
}

function problema2(){
    var num1 = parseFloat(document.getElementById("n1_p2").value);
    var num2 = parseFloat(document.getElementById("n2_p2").value);
    var num3 = parseFloat(document.getElementById("n3_p2").value);
    if(!isNaN(num3) && !isNaN(num3) && !isNaN(num3)){
    var arreglonums = [num1,num2,num3];
    var resultado = Math.max(...arreglonums)
    document.getElementById("output_p2").textContent = "El numero mayor es: " + resultado.toFixed(2);
    }else{
        alert("Por favor rellene los campos")
    }
}

function validarne(e){
    var teclado = document.all ? e.keycode : e.which;
    if(teclado === 8) return true;
    var regex = /[0-9\d]/
    var codigo = String.fromCharCode(teclado);
    return regex.test(codigo)
}

function problema3(){
    var sueldobase = parseFloat(document.getElementById("sueldob").value)
    var horas = parseFloat(document.getElementById("horasb").value)
    var total=0;
    if(!isNaN(sueldobase) && !isNaN(horas)){
    if(horas-40>0){
        total= sueldobase*40
        if(horas-48>0){
            var horaspor3 = horas-48
            total = total + horaspor3*(sueldobase*3) + 8*(sueldobase*2);
        }
        if(horas-40 > 0 && horas-40<=8){
            total = total + (horas-40)*(sueldobase*2);
        }
    }else{
        total = horas*sueldobase;
    }
    document.getElementById("output_p3").textContent = "Su sueldo final es: " + total.toFixed(2)
    }else{
     alert("Por favor rellene los campos")   
    }
}

function problema4(){
    var nummeses = parseFloat(document.getElementById("nmeses").value)
    var sueldobase = parseFloat(document.getElementById("sueldobp4").value)
    if(!isNaN(nummeses) && !isNaN(sueldobase)){
    var tiempoempresa = nummeses/12;
    var utilidadanual =0;
    if(tiempoempresa<1){
        utilidadanual = sueldobase*0.05;
    }
    if(tiempoempresa>=1 && tiempoempresa<2){
        utilidadanual = sueldobase*0.07;
    }
    if(tiempoempresa>=2 && tiempoempresa<5){
        utilidadanual = sueldobase*0.1;
    }
    if(tiempoempresa>=5 && tiempoempresa<10){
        utilidadanual = sueldobase*0.15;
    }
    if(tiempoempresa>=10){
        utilidadanual = sueldobase*0.2;
    }
    document.getElementById("output_p4").textContent = "Su reparto de utilidad anual es: " + utilidadanual.toFixed(2)
    }else{
     alert("Por favor rellene los campos")   
    }
}