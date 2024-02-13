var resultado = document.getElementById("resultado");

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
        
    
    if(texto.length != 0){
      document.getElementById("texto").value = textoCifrado;
      titulo.textContent = "Texto encriptado con exito.";
      parrafo.textContent = "";
      personaje.src = "Imagenes/encriptado.jpg";
    } else {
      personaje.src = "Imagenes/personaje.svg";
      tituloMensaje.textContent = "Ningun mensaje fué encontrado";
      parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar"
      console.log("is");
      alert("Debes ingresar algun texto");
    }
    
    const botonCopiar = document.querySelector(".botonCopiar");
    botonCopiar.addEventListener("click", copiar = () => {
      var contenido = document.getElementsByClassName("resultado").textContent;
      navigator.clipboard.writeText(contenido);
      console.log("hola");
    });
    
    
  }      
  
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafoTitulo");
    let personaje = document.getElementById("imgPersonaje");
    
    
    let textoCifrado = texto 
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u")
      
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulo.textContent = "Texto desencriptado con exito.";
        parrafo.textContent = "";
        personaje.src = "Imagenes/desencriptado.jpg";
      } else {
        personaje.src = "Imagenes/personaje.svg";
        tituloMensaje.textContent = "Ningun mensaje fué encontrado";
        parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar"
        console.log("is");
        alert("Debes ingresar algun texto");
      }
  }


