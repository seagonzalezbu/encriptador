function mostrarImagen() {
  var textoIzquierdo = document.getElementById("texto").value;
  if (textoIzquierdo.trim() == "") {
    document.getElementById("imagen1").style.display = "block";
    document.getElementById("h1derecho").style.display = "block";
  } else {
    document.getElementById("imagen1").style.display = "none";
    document.getElementById("h1derecho").style.display = "none";
  }
}

function encriptar(){
  var texto = document.getElementById("texto").value.toLowerCase();
  var txtCifrado = texto.replace(/e/igm,"enter").replace(/o/igm,"over").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");
  
  
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "block";
  mostrarImagen()
}

function desencriptar(){
  var texto = document.getElementById("texto").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/igm,"e").replace(/over/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");
  
  
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "block";
  mostrarImagen()
}

function copiar(){
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand("copy");

}

function ocultarImagen() {
  document.getElementById("imagen1").style.display = "none";
  document.getElementById("h1derecho").style.display = "none";


}