const apiUrl = 'http://localhost:3000/api/pessoa';

async function adicionaBtnPessoa() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const container = document.getElementById('button-container');

        container.innerHTML = '';

        data.forEach(item => {
            const button = document.createElement('button');
            button.setAttribute('nome', item.nome);
            button.textContent = item.nome;
            button.classList.add('user-box');

            button.addEventListener('click', () => {
                const newUrl = `/html/produto.html?id=${item.id}`;
                window.location.href = newUrl;
            });
            container.appendChild(button);
        });
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

function pgCriar() {
    const newUrl = `/html/cadastrarPessoa.html`;
    window.location.href = newUrl;
}

function paginaJake() {
    const newUrl = `/html/jake.html`;
    window.location.href = newUrl;
}

document.addEventListener('DOMContentLoaded', adicionaBtnPessoa);