/*Javascript es un lenguaje multiparadigma Acepta la programacion funcional, estructurada POO, y a eventos Dentro de Js, no existe el typado de variables int, string, float, etc. Solo existen 3 tipos de variables de acuerdo al estandar ES6: VAR, LET, CONST */
function validar(formulario){
    if(formulario.nombre.value.length < 4){
        alert("Porfavor escriba bien");
        formulario.nombre.focus();
        return false;
    }
    var checkstr = formulario.nombre.value;
    alert(checkstr);
    var abcok="QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm";
    var allValido = true;

    for(var i=0; i < checkstr.length; i++){
        var caracteres = checkstr.charAt(i);
        for(var j=0;j<abcok.length;j++){
            if(caracteres == abcok.charAt(j)) break;
        }
        if(j==abcok.length){
            allValido=false;
            break;
        }
    }
    if(!allValido){
        alert("Escriba unicamente letras en el nombre")
        formulario.nombre.focus();
        return false;
    }
}