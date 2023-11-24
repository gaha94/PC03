document.addEventListener("DOMContentLoaded", function() {
    let servidorPermiteEntrada = false;
  
    function generarTestigo() {
      return "Testigo generado";
    }
  
    function enviarTestigo(testigo) {
      console.log("Testigo enviado: " + testigo);
    }
  
    function manejarCambioEnFormulario() {
      let p2TieneToken = document.getElementById('p2Token').checked;
      let p3PideAcceso = document.getElementById('p3Acceso').checked;
  
      console.log("P2 tiene token:", p2TieneToken);
      console.log("P3 ha pedido acceso:", p3PideAcceso);
  
      if (p2TieneToken && p3PideAcceso) {
        servidorPermiteEntrada = true;
  
        const testigo = generarTestigo();
        enviarTestigo(testigo);
  
      }
  
      const resultadoElement = document.getElementById('resultado');
      if (servidorPermiteEntrada) {
        console.log("Acceso concedido. Testigo enviado.");
        resultadoElement.textContent = "Acceso concedido. Testigo enviado.";
      } else {
        console.log("Acceso denegado.");
        resultadoElement.textContent = "Acceso denegado.";
      }
    }
  
    document.querySelector('form').addEventListener('change', manejarCambioEnFormulario);
  });
  