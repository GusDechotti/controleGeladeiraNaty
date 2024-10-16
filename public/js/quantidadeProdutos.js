const apiUrl = 'http://localhost:3000/api/produtos';

async function addBtnProduto() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const container = document.getElementById('produtos');

        data.forEach(item => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const ipt = document.createElement('input');
            const btn = document.createElement('button');
            const form = document.createElement('form');
            const divUm = document.createElement('div');            
            const divDois = document.createElement('div');      
            const divQuantidade = document.createElement('div');     
            form.id = item.id;
            ipt.id = item.id + `id`;
            ipt.placeholder = 'Adicione o novo valor';
            ipt.type = 'number';
            btn.textContent = 'Adicionar';
            btn.type = 'submit';
            img.src = item.imagem;
            img.alt = item.nome;
            img.style.width = 'auto';
            img.style.height = '70px';
            var text = document.createTextNode(item.nome);
            var qtd = document.createTextNode(`Quantidade atual: ${item.quantidade}`);
            form.appendChild(ipt);
            form.appendChild(btn);
            divUm.className = 'divUm';
            divDois.className = 'divDois';
            divUm.appendChild(img);
            divDois.append(text, form, qtd);
            div.append(divUm, divDois);
            div.style = 'border:solid'
            btn.addEventListener('click', () => {
                atualizaApi(item.id)
            });
            if(item.quantidade >= 0){
                container.appendChild(div);   
            }
        });
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

async function atualizaApi(id){
    const url = 'http://localhost:3000/api/produto/'+ id;
    document.getElementById(id).addEventListener('submit', function(event) {
        const formData = {
          quantidade: document.getElementById(id + `id`).value  
        };
      
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        console.log(body)
        console.log(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao enviar dados');
          }
          return response.json();
        })
        .then(data => {
          console.log('Sucesso:', data);
        })
        .catch(error => {
          console.error('Erro:', error);
        });
      });
      
}

function redirecionar() {
  window.location.href = "../html/jake.html"; // Substitua pelo nome do seu arquivo HTML
}

addBtnProduto();