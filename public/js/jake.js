function cadastrarProduto(){
    const newUrl = `/html/cadastrarProduto.html`;
    window.location.href = newUrl;
}

const apiUrl = 'http://localhost:3000/api/pedido';

async function exibePedidos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const container = document.getElementById('tabela-container');
    data.forEach(item => {
      console.log(item)
      const tr = document.createElement('tr');
      tr.setAttribute('id',item.pedidoId)
      container.appendChild(tr);
    });
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

exibePedidos()