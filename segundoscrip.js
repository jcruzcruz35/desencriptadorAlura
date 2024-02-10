function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo");
  let parrafo = document.getElementById("parrafoTitulo");
  let personaje = document.getElementById("imgPersonaje");
  
  let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
        
  if (texto.length !=0) {
    texto + textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    
    if(texto.length !=0){
      texto = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con exito.";
      parrafo.textContent = "";
      imgPersonaje.src = "Imagenes/encripado.img";
    } else {
      imgPersonaje.src = "Imagenes/personaje.svg";
      alert("Debes ingresar algun texto");
    }
  }      
}