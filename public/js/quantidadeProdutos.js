const apiUrl = 'http://localhost:3000/api/produto';

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
            ipt.id = item.id;
            ipt.placeholder = 'Adicione o novo valor'
            ipt.type = 'number'
            btn.textContent = 'Adicionar';
            img.src = item.imagem;
            img.alt = item.nome;
            img.style.width = '100px';
            img.style.height = '100px';
            var text = document.createTextNode(item.nome);
            div.appendChild(img);
            div.appendChild(text);
            div.appendChild(ipt);
            div.appendChild(btn);
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
    const data = {
        "quantidade":document.getElementById(id)
    }
    console.log(data)
    try {
        const response = await fetch('http://localhost:3000/api/produto', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            window.alert("Produto atualizado com sucesso");
        } else {
            console.error('Erro:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
}
addBtnProduto();