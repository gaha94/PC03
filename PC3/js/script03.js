document.addEventListener("DOMContentLoaded", function () {
  const nodesContainer = document.getElementById('nodes');
  const startButton = document.getElementById('startAlgorithm');
  const numberOfNodes = 3;

  const nodesState = Array.from({ length: numberOfNodes }, () => ({
    requesting: false,
    granted: false,
    requestQueue: [],
  }));

  function startRicartAgrawala() {
    nodesContainer.innerHTML = '';

    for (let i = 1; i <= numberOfNodes; i++) {
      const node = document.createElement('div');
      node.className = 'node';
      node.textContent = `Nodo ${i}`;
      nodesContainer.appendChild(node);
      node.addEventListener('click', function () {
        simulateRequest(i - 1);
      });
    }
  }

  function simulateRequest(nodeIndex) {
    nodesState[nodeIndex].requesting = true;
    nodesState.forEach((node, index) => {
      if (index !== nodeIndex) {
        sendRequest(nodeIndex, index);
      }
    });

    processRequestQueue(nodeIndex);
  }

  function sendRequest(sourceNode, targetNode) {
    nodesState[targetNode].requestQueue.push(sourceNode);
    console.log(`Solicitud de Nodo ${sourceNode + 1} enviada a Nodo ${targetNode + 1}`);
  }

  function processRequestQueue(nodeIndex) {
    const node = nodesState[nodeIndex];
    const nodeElement = document.querySelector('.node:nth-child(' + (nodeIndex + 1) + ')');

    if (node.requesting && node.requestQueue.length === 0) {
      node.granted = true;
      console.log(`Nodo ${nodeIndex + 1} entra a la sección crítica`);

      document.querySelectorAll('.node').forEach(node => node.classList.remove('active'));
      nodeElement.classList.add('active');

      setTimeout(() => {
        console.log(`Nodo ${nodeIndex + 1} sale de la sección crítica`);
        node.requesting = false;
        node.granted = false;

        processRequestQueue(nodeIndex);
      }, 2000);
    } else {
      console.log(`Nodo ${nodeIndex + 1} está esperando para entrar a la sección crítica`);
    }
  }

  startButton.addEventListener('click', startRicartAgrawala);
});
