function cadastrarProduto() {
  const newUrl = `/html/cadastrarProduto.html`;
  window.location.href = newUrl;
}

var Pix = document.getElementById("isPix");
var isPix = Pix.checked;

async function exibePedidos() {
  const apiUrl = 'http://localhost:3000/api/pedido';
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
  const URLDetalhes = 'http://localhost:3000/api/pessoas/detalhes';
  try {
    const response = await fetch(URLDetalhes);
    const data = await response.json();
    const container = document.getElementById('media');
    data.forEach(item => {
      console.log(item)

      const tr = document.createElement('tr');
      tr.setAttribute('id', item.Id + 'pessoa')
      container.appendChild(tr);
      const tdNome = document.createElement('td');
      tdNome.textContent = item.nome
      const lugar = document.getElementById(item.Id + 'pessoa')
      lugar.appendChild(tdNome)
      const tdProduto = document.createElement('td');
      tdProduto.textContent = item.total_pedidos
      lugar.appendChild(tdProduto)
    });
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

exibePedidos()

async function limpar() {
  if (window.confirm("Isso vai apagar todas as compras, tem certeza?")) {
    const apiUrl = 'http://localhost:3000/api/pedidos/deleteAll';
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ocorreu um erro:', error);
    } finally {
      window.alert("Limpo com sucesso!")
      window.reload()
    }
  }
}