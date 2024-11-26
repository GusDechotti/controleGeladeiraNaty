const apiUrl = 'http://localhost:3000/api/produto';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

console.log(isPix)

async function addBtnProduto() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const container = document.getElementById('btnProduto');

        data.forEach(item => {
            const btn = document.createElement('button');
            var img = document.createElement('img');
            var br = document.createElement('br');
            img.src = item.imagem;
            img.alt = item.nome;
            img.style.width = 'auto';
            img.style.height = '100px';
            var text = document.createTextNode(item.nome);
            btn.appendChild(img);
            btn.appendChild(br);
            btn.appendChild(text);
            btn.createElement;
            var Pix = document.getElementById("isPix");
            Pix.addEventListener('change', function() {
                console.log('Checkbox foi clicado! Estado atual:', Pix.checked);
            });
            btn.addEventListener('click', () => {
                const newUrl = `/html/pagarComPix.html?idPessoa=${getQueryParam("id")}&idProduto=${item.id}`;
                window.location.href = newUrl;
            });
            if(item.quantidade >= 0){
                container.appendChild(btn);   
            }
        });
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}
addBtnProduto();
