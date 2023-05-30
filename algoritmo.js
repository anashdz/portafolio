//Creamos la funcion encriptar
function encriptar(){
    
    /*Leemos el texto que el usuario dejo en la caja de texto a lo cual llamamos "textoEntrada"
        y guardaremos en la variable "frase" para posteriormente covertirlo a minusculas 
        asegurandonos que no tengamos problema al codificar con letras mayusculas*/
    var frase = document.getElementById("textoEntrada").value.toLowerCase();
    
    /*Remplazamos las letras de la forma descrita en el requerimiento guardando el reemplazo de "frase"
        en la nueva variable "textoEntrada" y realizando esta misma accion para cada letra */
    var textoEntrada = frase.replace(/e/img, "enter");
    var textoEntrada = textoEntrada.replace(/i/img, "imes");
    var textoEntrada = textoEntrada.replace(/a/img, "ai");
    var textoEntrada = textoEntrada.replace(/o/img, "ober");
    var textoEntrada = textoEntrada.replace(/u/img, "ufat");

    /*Leemos el id del html para la caja de salida de texto y hacemos una union del texto de entrada 
        ya modificado con el texto de salida, mostrando este en la caja de salida de texto*/
    document.getElementById("textoSalida").innerHTML = textoEntrada;
    /*Le decimos al boton de copiar que aparezca ya que este esta parcialmente oculto hasta que
        obtengamos el primer cifrado */
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

//Creamos la funcion desencriptar
function desencriptar(){

    /*Leemos el texto que el usuario dejo en la caja de texto a lo cual llamamos "textoEntrada"
        y guardaremos en la variable "frase" para posteriormente covertirlo a minusculas 
        asegurandonos que no tengamos problema al codificar con letras mayusculas*/
    var frase = document.getElementById("textoEntrada").value.toLowerCase();

    /*Remplazamos de forma contraria a lo descrito en el encriptado, decodificando asi 
        el texto encriptado al mensaje original*/
    var textoEntrada = frase.replace(/enter/img, "e");
    var textoEntrada = textoEntrada.replace(/imes/img, "i");
    var textoEntrada = textoEntrada.replace(/ai/img, "a");
    var textoEntrada = textoEntrada.replace(/ober/img, "o");
    var textoEntrada = textoEntrada.replace(/ufat/img, "u");

    /*Leemos el id del html para la caja de salida de texto y hacemos una union del texto de entrada 
        ya modificado con el texto de salida, mostrando este en la caja de salida de texto*/
    document.getElementById("textoSalida").innerHTML = textoEntrada;
    /*Le decimos al boton de copiar que aparezca ya que este esta parcialmente oculto hasta que
        obtengamos el primer cifrado */
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

//Creamos la funcion copiar
function copiar(){
    
    /*Seleccionamos el texto que este en la caja de salida de texto por medio del id "textoSalida", 
    guardandolo en la varible contenido*/
    var contenido = document.querySelector("#textoSalida");
    contenido.select();
    //Realizamos la copia del texto ya seleccioando
    document.execCommand("copy");

}
