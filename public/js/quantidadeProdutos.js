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
            form.id = item.id;
            ipt.id = item.id + `id`;
            ipt.placeholder = 'Adicione o novo valor';
            ipt.type = 'number';
            btn.textContent = 'Adicionar';
            btn.type = 'submit';
            img.src = item.imagem;
            img.alt = item.nome;
            img.style.width = '100px';
            img.style.height = '100px';
            var text = document.createTextNode(item.nome);
            var qtd = document.createTextNode(`Quantidade atual: ${item.quantidade}`);
            form.appendChild(ipt);
            form.appendChild(btn);
            div.appendChild(img);
            div.appendChild(text);
            div.appendChild(form);
            div.appendChild(qtd);
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

function voltar(){
    const newUrl = `/`;
    window.location.href = newUrl;
}

addBtnProduto();