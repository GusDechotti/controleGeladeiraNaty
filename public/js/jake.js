function cadastrarProduto() {
  const newUrl = `/html/cadastrarProduto.html`;
  window.location.href = newUrl;
}

var Pix = document.getElementById("isPix");
var isPix = Pix.checked; 

const apiUrl = 'http://localhost:3000/api/pedido';

async function exibePedidos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const container = document.getElementById('tabela-container');
    data.forEach(item => {
      console.log(item)
      
      const tr = document.createElement('tr');
      tr.setAttribute('id', item.pedidoId)
      container.appendChild(tr);
      const tdNome = document.createElement('td');
      tdNome.textContent = item.nomePessoa
      const onde = document.getElementById(item.pedidoId)
      onde.appendChild(tdNome)
      const tdProduto = document.createElement('td');
      tdProduto.textContent = item.nomeProduto
      onde.appendChild(tdProduto)
    });
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

exibePedidos()