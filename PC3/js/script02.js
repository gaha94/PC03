document.addEventListener("DOMContentLoaded", function() {
    const ring = document.getElementById('ring');
    const startButton = document.getElementById('startAlgorithm');
    const numberOfNodes = 5;
  
    function startTokenRing() {
      while (ring.firstChild) {
        ring.removeChild(ring.firstChild);
      }
  
      for (let i = 0; i < numberOfNodes; i++) {
        const node = document.createElement('li');
        node.textContent = `Nodo ${i + 1}`;
        ring.appendChild(node);
      }
  
      const nodes = document.querySelectorAll('#ring li');
      nodes.forEach((node, index) => {
        node.addEventListener('click', function() {
          console.log(`Token pasa a Nodo ${index + 1}`);
          nodes.forEach(node => node.classList.remove('active'));
          node.classList.add('active');
        });
      });
    }
    startButton.addEventListener('click', startTokenRing);
  });
  