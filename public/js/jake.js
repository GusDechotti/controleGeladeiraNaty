function cadastrarProduto() {
  const newUrl = `/html/cadastrarProduto.html`;
  window.location.href = newUrl;
}

function alterarQuantidade() {
  const newUrl = `/html/quantidadeProdutos.html`;
  window.location.href = newUrl;
}

async function exibePedidos() {
  $.ajax({
    url: 'http://localhost:3000/api/pedido',
    method: 'GET',
    success: function (data) {
      let tabela = $('#tabela-container tbody');
      tabela.empty(); 
      data.forEach(function (item) {
        let row = `<tr>
                <td>${item.nomePessoa}</td>
                <td>${item.nomeProduto}</td>
                <td>${item.isPix ? 'X' : ''}</td>
                <td>${new Date(item.dia).toLocaleDateString('pt-BR')}</td>
            </tr>`;
        tabela.append(row);
      });
      $('#tabela-container').DataTable({
        destroy: true, 
        paging: true,
        searching: true,
        ordering: true,
        pageLength: 5,
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json' 
        }
      });
    },
    error: function (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  });
}

exibePedidos()

$.ajax({
  url: 'http://localhost:3000/api/pessoas/detalhes',
  method: 'GET',
  success: function (data) {
    let tabela = $('#media tbody');
    tabela.empty();
    data.forEach(function (item) {
      let row = `<tr>
              <td>${item.nome}</td>
              <td>${item.total_pedidos}</td>
          </tr>`;
      tabela.append(row);
    });
    $('#media').DataTable({
      destroy: true,
      paging: true,
      searching: true,
      ordering: true,
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json'
      }
    });
  },
  error: function (error) {
    console.error("Erro ao carregar os dados:", error);
  }
});

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
    }
  }
  location.reload();
}